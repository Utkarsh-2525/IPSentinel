import React from "react";

interface Props {
    score: number;
}

const RiskGauge: React.FC<Props> = ({score}) => {
    const radius = 60;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (score / 100) * circumference;

    const getColor = () => {
        if (score < 30) return "#22c55e";
        if (score < 70) return "#f59e0b";
        return "#ef4444";
    };

    return (
        <div style={{textAlign: "center"}}>
            <svg width="160" height="160">
                <circle
                    cx="80"
                    cy="80"
                    r={radius}
                    stroke="#1e293b"
                    strokeWidth="12"
                    fill="transparent"
                />
                <circle
                    cx="80"
                    cy="80"
                    r={radius}
                    stroke={getColor()}
                    strokeWidth="12"
                    fill="transparent"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    style={{transition: "stroke-dashoffset 1s ease"}}
                />
            </svg>
            <h2>{score}</h2>
        </div>
    );
};

export default RiskGauge;