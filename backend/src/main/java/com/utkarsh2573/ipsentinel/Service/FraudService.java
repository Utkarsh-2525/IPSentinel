package com.utkarsh2573.ipsentinel.Service;

import com.utkarsh2573.ipsentinel.Model.FraudResponse;
import org.springframework.stereotype.Service;

import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;
import java.util.Map;

@Service
public class FraudService {

    private final WebClient webClient = WebClient.create();

    public FraudResponse analyze(String ip) {

        FraudResponse response = new FraudResponse();
        response.ip = ip;

        Map geo = webClient.get()
                .uri("https://ipwho.is/" + ip)
                .retrieve()
                .bodyToMono(Map.class)
                .block();

        if (geo == null || geo.get("success") == null || !(Boolean) geo.get("success")) {
            throw new RuntimeException("Invalid IP or API failure");
        }

        response.country = String.valueOf(geo.getOrDefault("country", "Unknown"));
        response.countryCode = String.valueOf(geo.get("country_code"));

        Map connection = (Map) geo.get("connection");

        if (connection != null) {

            Object ispObj = connection.get("isp");
            response.isp = ispObj != null ? String.valueOf(ispObj) : "Unknown";

            Object asnObj = connection.get("asn");
            response.asn = asnObj != null ? String.valueOf(asnObj) : "Unknown";

        } else {
            response.isp = "Unknown";
            response.asn = "Unknown";
        }

        // Tor check
        String torList = webClient.get()
                .uri("https://check.torproject.org/torbulkexitlist")
                .retrieve()
                .bodyToMono(String.class)
                .block();

        response.tor = torList != null && torList.contains(ip);

        // Risk scoring
        int score = 0;

        if (response.proxy) score += 30;
        if (response.hosting) score += 25;
        if (response.tor) score += 40;

        if (score > 100) score = 100;

        response.riskScore = score;

        response.riskLevel =
                score < 30 ? "LOW" :
                        score < 70 ? "MEDIUM" : "HIGH";

        return response;
    }
}