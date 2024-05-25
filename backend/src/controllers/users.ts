import { Request, Response } from "express";
import { db, firestore } from "../db/firebase";
import { StandardUsers } from "../models/StandardUsers";
import { OrganizationUsers } from "../models/OrganizationUsers";
import { jsDate } from "../utils/datetime";
import { TokenMapping } from "../models/TokenMapping";

const usersCollection = "users";
const tokenMappingsCollection = "tokenMappings";

const getTokenMappings = async () => {
    let tokenMappings = await db.getDocs(db.collection(firestore, tokenMappingsCollection));
    const tokenMappingsArray: TokenMapping[] = [];

    if (tokenMappings.empty) return null;
    else {
        tokenMappings.forEach((doc) => {
            const data: TokenMapping = doc.data() as any;
            const tokenMapping: TokenMapping = {
                ...data,
                id: doc.id,
            };
            tokenMappingsArray.push(tokenMapping);
        });
        return tokenMappingsArray;
    }
}

export const getProfile = async (req: Request, res: Response) => {
    const userRole = "standard";
    const userId = req.params.id;
    const docRef = db.doc(firestore, usersCollection, userId);
    const tokenMappings: TokenMapping[] | null = await getTokenMappings();
    const profileData: StandardUsers = (await db.getDoc(docRef)).data() as any;

    tokenMappings?.sort((a, b) => a.token - b.token);
    if (profileData.role === userRole && tokenMappings) {
        for (let tokenMapping of tokenMappings) {
            if (profileData.tokens - tokenMapping.token >= 0) profileData.badge = tokenMapping.badge;
        }
        if (!profileData.badge) profileData.badge = "None";

        if (profileData.friends.length > 0) {
            const friendsListId = profileData.friends.split(',');
            profileData.friendsData = [];
            for (let friendId of friendsListId) {
                const friend = await getUserById(friendId);
                for (let tokenMapping of tokenMappings) {
                    if (friend.tokens - tokenMapping.token >= 0) friend.badge = tokenMapping.badge;
                }
                if (!friend.badge) friend.badge = "None";
                profileData.friendsData.push(friend);
            }
        }

        res.status(200).json({ code: 200, data: profileData });
    }
    else
        res.status(501).json({ code: 501, data: "This endpoint only retrieves user's profile!" });
}

export const getLeaderboard = async (req: Request, res: Response) => {
    const userRole = "standard";
    const userId = req.params.id;
    const docRef = db.doc(firestore, usersCollection, userId);
    const tokenMappings: TokenMapping[] | null = await getTokenMappings();
    const profileData: StandardUsers = (await db.getDoc(docRef)).data() as any;

    tokenMappings?.sort((a, b) => a.token - b.token);
    if (profileData.role === userRole && tokenMappings) {
        for (let tokenMapping of tokenMappings) {
            if (profileData.tokens - tokenMapping.token >= 0) profileData.badge = tokenMapping.badge;
        }
        if (!profileData.badge) profileData.badge = "None";

        let leaderboardData: any = [profileData];
        if (profileData.friends.length > 0) {
            const friendsListId = profileData.friends.split(',');
            for (let friendId of friendsListId) {
                const friend = await getUserById(friendId);
                for (let tokenMapping of tokenMappings) {
                    if (friend.tokens - tokenMapping.token >= 0) friend.badge = tokenMapping.badge;
                }
                if (!friend.badge) friend.badge = "None";
                leaderboardData.push(friend);
            }
        }

        leaderboardData = leaderboardData.map((d: any) => ({ name: d.name, tokens: d.tokens, badge: d.badge })).sort((a: any, b: any) => b.tokens - a.tokens);
        res.status(200).json({ code: 200, data: leaderboardData });
    }
    else
        res.status(501).json({ code: 501, data: "This endpoint only retrieves user's profile!" });
}

export const getGlobalLeaderboard = async (req: Request, res: Response) => {
    const userRole = "standard";
    const tokenMappings: TokenMapping[] | null = await getTokenMappings();
    const users = await db.getDocs(db.collection(firestore, usersCollection));
    const leaderboardArray: any = [];

    if (users.empty) {
        res.status(400).json({ code: 400, data: "No users found!" });
    } else {
        tokenMappings?.sort((a, b) => a.token - b.token);
        users.forEach((doc) => {
            const data: StandardUsers = doc.data() as any;
            if (data.role === userRole && tokenMappings) {
                let badge = "None";
                for (let tokenMapping of tokenMappings) {
                    if (data.tokens - tokenMapping.token >= 0) badge = tokenMapping.badge;
                }
                const score = {
                    name: data.name,
                    tokens: parseInt(data.tokens as any),
                    badge
                };
                if (data.role === userRole)
                    leaderboardArray.push(score);
            }
        });

        leaderboardArray.sort((a: any, b: any) => b.tokens - a.tokens);
        res.status(200).json({ code: 200, data: leaderboardArray });
    }
}

export const updateProfile = async (req: Request, res: Response) => {
    const userId = req.params.id;
    const newData = req.body;
    const userData = db.doc(firestore, usersCollection, userId);
    await db.updateDoc(userData, newData);
    res.status(200).json({ code: 200, data: "The user data has been updated successfully!" });
}

export const getOrganizationProfile = async (req: Request, res: Response) => {
    const userRole = "organization";
    const userId = req.params.id;
    const docRef = db.doc(firestore, usersCollection, userId);
    const profileData: StandardUsers = (await db.getDoc(docRef)).data() as any;
    if (profileData.role === userRole)
        res.status(200).json({ code: 200, data: profileData });
    else
        res.status(501).json({ code: 501, data: "This endpoint only retrieves organization's profile!" });
}

export const getAllOrganizationProfile = async (req: Request, res: Response) => {
    const userRole = "organization";
    let organizations = await db.getDocs(db.collection(firestore, usersCollection));
    const organizationsArray: OrganizationUsers[] = [];

    if (organizations.empty) {
        res.status(400).json({ code: 400, data: "No organizations found!" });
    } else {
        organizations.forEach((doc) => {
            const data: OrganizationUsers = doc.data() as any;
            const event: OrganizationUsers = {
                ...data,
                id: doc.id,
            };
            if (data.role === userRole)
                organizationsArray.push(event);
        });

        res.status(200).json({ code: 200, data: organizationsArray });
    }
}

export const updateOrganizationProfile = async (req: Request, res: Response) => {
    const organizationId = req.params.id;
    const newData = req.body;
    const organizationData = db.doc(firestore, usersCollection, organizationId);
    await db.updateDoc(organizationData, newData);
    res.status(200).json({ code: 200, data: "The organization data has been updated successfully!" });
}

export const getOrganizationById = async (organizationId: string) => {
    const organization = db.doc(firestore, usersCollection, organizationId);
    const organizationData = await db.getDoc(organization);
    if (organizationData.exists()) {
        const organization = organizationData.data() as any;
        return {
            ...organization,
            foundedDate: jsDate((organization.foundedDate as any).toDate()),
        };
    }
    else return null;
}

export const getUserById = async (userId: string) => {
    const user = db.doc(firestore, usersCollection, userId);
    const userData = await db.getDoc(user);
    if (userData.exists()) {
        const user = userData.data() as any;
        return { ...user, tokens: parseInt(user.tokens) };
    }
    else return null;
}