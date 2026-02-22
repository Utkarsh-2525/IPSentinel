import React from "react";
import { FraudResponse } from "../types/FraudTypes";
import RiskGauge from "./RiskGauge";

interface Props {
    data: FraudResponse;
}

const ResultCard: React.FC<Props> = ({ data }) => {
    return (
        <div className="result-card">
            <RiskGauge score={data.riskScore}/>

            <div className="info">
                <p><strong>IP:</strong> {data.ip}</p>
                <p><strong>Country:</strong> {data.country}</p>
                <p><strong>ISP:</strong> {data.isp}</p>
                <p><strong>ASN:</strong> {data.asn}</p>
                <p><strong>Proxy:</strong> {data.proxy ? "Yes" : "No"}</p>
                <p><strong>Hosting:</strong> {data.hosting ? "Yes" : "No"}</p>
                <p><strong>Tor:</strong> {data.tor ? "Yes" : "No"}</p>
            </div>
        </div>
    );
};

export default ResultCard;