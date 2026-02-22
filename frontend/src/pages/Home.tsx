import React, { useEffect, useState } from "react";
import { checkIP } from "../api/fraudApi";
import { FraudResponse } from "../types/FraudTypes";
import SearchBar from "../components/SearchBar";
import Loader from "../components/Loader";
import RiskGauge from "../components/RiskGauge";
import Flag from "../components/Flag";
import RiskBreakdown from "../components/RiskBreakdown";

const Home: React.FC = () => {
    const [data, setData] = useState<FraudResponse | null>(null);
    const [loading, setLoading] = useState(false);
    const [apiHealthy, setApiHealthy] = useState(true);
    const [rateCount, setRateCount] = useState(0);
    const [darkMode, setDarkMode] = useState(true);

    // // 🌍 Auto detect user IP
    // useEffect(() => {
    //     fetch("https://api.ipify.org?format=json")
    //         .then((res) => res.json())
    //         .then((res) => handleSearch(res.ip))
    //         .catch(() => {});
    // }, []);

    const handleSearch = async (ip: string) => {
        try {
            setLoading(true);

            const result = await checkIP(ip);

            setData(result);
            setRateCount((prev) => prev + 1);
            setApiHealthy(true);
        } catch {
            setApiHealthy(false);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={`app-wrapper ${darkMode ? "dark-theme" : "light-theme"}`}>

            <div className="content">

                {/* HERO */}
                <section className="hero">
                    <h1>IPSentinel</h1>
                    <p>Real-Time IP Intelligence & Fraud Risk Analysis</p>

                    {/*<button*/}
                    {/*    className="theme-toggle"*/}
                    {/*    onClick={() => setDarkMode(!darkMode)}*/}
                    {/*>*/}
                    {/*    {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}*/}
                    {/*</button>*/}

                    <SearchBar onSearch={handleSearch} />

                    <div className="status-bar">
            <span>
              API Status:{" "}
                <b style={{ color: apiHealthy ? "#22c55e" : "#ef4444" }}>
                {apiHealthy ? "Healthy" : "Offline"}
              </b>
            </span>

                        <span>Requests Made: {rateCount}</span>
                    </div>
                </section>

                {/* RESULTS */}
                {loading && <Loader />}

                {data && (
                    <section className="dashboard">
                        <div className="left-panel">
                            <RiskGauge score={data.riskScore} />
                            <h3>{data.riskLevel} Risk</h3>
                        </div>

                        <div className="right-panel">
                            <h3>IP Details</h3>

                            <p><b>IP:</b> {data.ip}</p>

                            <p className="country-row">
                                <b>Country:</b>
                                <Flag countryCode={data.countryCode?.toLowerCase() || "us"} />
                                <span>{data.country}</span>
                            </p>

                            <p><b>ISP:</b> {data.isp}</p>
                            <p><b>ASN:</b> {data.asn}</p>

                            <h4>Risk Breakdown</h4>

                            <RiskBreakdown
                                proxy={data.proxy}
                                hosting={data.hosting}
                                tor={data.tor}
                            />
                        </div>
                    </section>
                )}

            </div>
        </div>
    );
};

export default Home;