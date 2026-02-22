import React, { useState } from "react";
import { checkIP } from "../api/fraudApi";

const BulkScanner = () => {
    const [ips, setIps] = useState("");
    const [results, setResults] = useState<any[]>([]);

    const handleScan = async () => {
        const ipList = ips.split("\n");
        const responses = await Promise.all(
            ipList.map((ip) => checkIP(ip.trim()))
        );
        setResults(responses);
    };

    return (
        <div style={{ padding: "40px" }}>
            <h2>Bulk IP Scanner</h2>

            <textarea
                rows={8}
                style={{ width: "100%" }}
                placeholder="Enter one IP per line"
                value={ips}
                onChange={(e) => setIps(e.target.value)}
            />

            <button onClick={handleScan}>Scan All</button>

            {results.map((res, index) => (
                <div key={index} style={{ marginTop: "15px" }}>
                    {res.ip} → {res.riskScore}
                </div>
            ))}
        </div>
    );
};

export default BulkScanner;