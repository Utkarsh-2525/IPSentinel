package com.utkarsh2573.ipsentinel.Controller;
import com.utkarsh2573.ipsentinel.Model.FraudResponse;
import com.utkarsh2573.ipsentinel.Service.FraudService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class FraudController {

    private final FraudService fraudService;

    public FraudController(FraudService fraudService) {
        this.fraudService = fraudService;
    }

    @GetMapping("/check")
    public FraudResponse check(@RequestParam String ip) {
        return fraudService.analyze(ip);
    }
}