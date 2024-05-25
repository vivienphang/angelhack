interface PartnerDeals {
    id: number;
    name: string;
    description: string;
    tokensRequried: number;
}

export interface Partners {
    id: string;
    name: string;
    description: string;
    deals: PartnerDeals[];
}