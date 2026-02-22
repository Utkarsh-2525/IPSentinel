import React, { useState } from "react";

interface Props {
    onSearch: (ip: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
    const [ip, setIp] = useState("");
    const [error, setError] = useState("");

    const validateIP = (ip: string) => {
        const regex =
            /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/;
        return regex.test(ip);
    };

    const handleSubmit = () => {
        if (!validateIP(ip)) {
            setError("Invalid IP format");
            return;
        }
        setError("");
        onSearch(ip);
    };

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Enter IP address"
                value={ip}
                onChange={(e) => setIp(e.target.value)}
            />
            <button onClick={handleSubmit}>Analyze</button>
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default SearchBar;