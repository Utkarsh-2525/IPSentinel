import React from "react";

interface Props {
    countryCode: string;
}

const Flag: React.FC<Props> = ({ countryCode }) => {
    return (
        <img
            src={`https://flagcdn.com/w40/${countryCode.toLowerCase()}.png`}
            alt="flag"
            style={{ borderRadius: "4px" }}
        />
    );
};

export default Flag;