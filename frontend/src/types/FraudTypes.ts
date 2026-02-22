export interface FraudResponse {
    ip: string;
    country: string;
    countryCode?: string;
    isp: string;
    asn: string;
    proxy: boolean;
    hosting: boolean;
    tor: boolean;
    riskScore: number;
    riskLevel: string;
}