import React, { useState } from "react";
import { checkIP } from "../api/fraudApi";
import { FraudResponse } from "../types/FraudTypes";
import SearchBar from "../components/SearchBar";
import Loader from "../components/Loader";
import RiskGauge from "../components/RiskGauge";
import Flag from "../components/Flag";
import RiskBreakdown from "../components/RiskBreakdown";

const Dashboard: React.FC = () => {
    const [data, setData] = useState<FraudResponse | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSearch = async (ip: string) => {
        try {
            setLoading(true);
            setError("");
            setData(null);

            const result = await checkIP(ip);
            setData(result);
        } catch (err) {
            setError("Failed to fetch IP intelligence.");
        } finally {
            setLoading(false);
        }
    };

    const getRiskColor = () => {
        if (!data) return "#888";
        if (data.riskScore < 30) return "#22c55e";
        if (data.riskScore < 70) return "#f59e0b";
        return "#ef4444";
    };

    return (
        <div style={{ padding: "40px 20px" }}>
            <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
                IPSentinel Dashboard
            </h1>

            <SearchBar onSearch={handleSearch} />

            {error && (
                <p style={{ color: "#ef4444", textAlign: "center", marginTop: "20px" }}>
                    {error}
                </p>
            )}

            {loading && <Loader />}

            {data && (
                <div
                    style={{
                        marginTop: "40px",
                        display: "flex",
                        justifyContent: "center",
                        gap: "60px",
                        flexWrap: "wrap"
                    }}
                >
                    {/* LEFT SIDE */}
                    <div style={{ textAlign: "center" }}>
                        <RiskGauge score={data.riskScore} />

                        <h3 style={{ color: getRiskColor() }}>
                            {data.riskLevel} RISK
                        </h3>
                    </div>

                    {/* RIGHT SIDE */}
                    <div
                        style={{
                            background: "#1e293b",
                            padding: "25px",
                            borderRadius: "12px",
                            minWidth: "300px"
                        }}
                    >
                        <h3 style={{ marginBottom: "20px" }}>IP Details</h3>

                        <p><strong>IP:</strong> {data.ip}</p>

                        <p style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <strong>Country:</strong>
                            <Flag countryCode={data.countryCode || "us"} />
                            {data.country}
                        </p>

                        <p><strong>ISP:</strong> {data.isp}</p>
                        <p><strong>ASN:</strong> {data.asn}</p>

                        <div style={{ marginTop: "25px" }}>
                            <h4>Risk Breakdown</h4>
                            <RiskBreakdown
                                proxy={data.proxy}
                                hosting={data.hosting}
                                tor={data.tor}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;