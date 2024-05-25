import { Request, Response } from "express";
import { db, firestore } from "../db/firebase";
import { Partners } from "../models/Partners";

const partnersCollection = "partners";

export const getPartners = async (req: Request, res: Response) => {
    let events = await db.getDocs(db.collection(firestore, partnersCollection));
    const eventsArray: Partners[] = [];

    if (events.empty) {
        res.status(400).json({ code: 400, data: "No partners found!" });
    } else {
        events.forEach((doc) => {
            const data: Partners = doc.data() as any;
            const event: Partners = {
                ...data,
                id: doc.id,
            };
            eventsArray.push(event);
        });

        res.status(200).json({ code: 200, data: eventsArray });
    }
}

export const updatePartner = async (req: Request, res: Response) => {
    const partnerId = req.params.id;
    const newData = req.body;
    const partnerData = db.doc(firestore, partnersCollection, partnerId);
    await db.updateDoc(partnerData, newData);
    res.status(200).json({ code: 200, data: "The partner data has been updated successfully!"});
}