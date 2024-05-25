import { OrganizationUsers } from "./OrganizationUsers";

export interface Events {
    id: string;
    title: string;
    description: string;
    date: string;
    duration: number;
    tokensOffered: number;
    categories: "Outdoor" | "Indoor";
    numPeople: number;
    maxPeople: number;
    status: "Upcoming" | "Ended" 
    organizationId: string;
    organization?: OrganizationUsers;
}