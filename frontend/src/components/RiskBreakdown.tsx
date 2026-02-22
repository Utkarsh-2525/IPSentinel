import React from "react";

interface Props {
    proxy: boolean;
    hosting: boolean;
    tor: boolean;
}

const RiskBreakdown: React.FC<Props> = ({ proxy, hosting, tor }) => {
    const Bar = ({ label, active }: any) => (
        <div style={{ marginBottom: "10px" }}>
            <p>{label}</p>
            <div style={{ background: "#1e293b", height: "8px" }}>
                <div
                    style={{
                        width: active ? "100%" : "10%",
                        background: active ? "#ef4444" : "#22c55e",
                        height: "8px",
                        transition: "width 0.5s"
                    }}
                />
            </div>
        </div>
    );

    return (
        <div>
            <Bar label="Proxy Risk" active={proxy} />
            <Bar label="Hosting Risk" active={hosting} />
            <Bar label="Tor Risk" active={tor} />
        </div>
    );
};

export default RiskBreakdown;