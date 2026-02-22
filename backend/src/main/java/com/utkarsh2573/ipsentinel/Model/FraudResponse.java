package com.utkarsh2573.ipsentinel.Model;

public class FraudResponse {

    public String ip;
    public String country;
    public String isp;
    public String asn;

    public boolean proxy;
    public boolean hosting;
    public boolean tor;

    public int riskScore;
    public String riskLevel;
}