import { Request, Response } from "express";
import { db, firestore } from "../db/firebase";
import { Events } from '../models/Events';
import { getOrganizationById } from "./users";
import { OrganizationUsers } from "../models/OrganizationUsers";
import { jsDate } from "../utils/datetime";

const eventsCollection = "events";

export const getEvents = async (req: Request, res: Response) => {
    const { name, date, duration, tokensOffered, maxPeople, categories } = req.query;
    let collection = db.collection(firestore, eventsCollection);
    let queries: any = {};

    if (name) queries.name = name;
    if (date) queries.date = date;
    if (duration) queries.duration = parseInt(duration as string);
    if (tokensOffered) queries.tokensOffered = parseInt(tokensOffered as string);
    if (maxPeople) queries.maxPeople = parseInt(maxPeople as string);
    if (categories) queries.categories = categories;

    let events = await db.getDocs(collection);
    let eventsCount = (await db.getCountFromServer(collection)).data().count;
    const eventsArray: Events[] = [];

    if (events.empty) {
        res.status(400).json({ code: 400, data: "No events found!" });
    } else {
        let i = 0;
        events.forEach(async (doc) => {
            const data: Events = doc.data() as any;
            const organization: OrganizationUsers = await getOrganizationById(doc.data().organizationId);
            const event: Events = {
                ...data,
                id: doc.id,
                date: jsDate((data.date as any).toDate()),
                organization
            };

            // filter
            if ((!queries.name || (queries.name && event.organization?.name === queries.name))
                && (!queries.date || (queries.date && event.date === queries.date))
                && (!queries.duration || (queries.duration && event.duration === queries.duration))
                && (!queries.tokensOffered || (queries.tokensOffered && event.tokensOffered === queries.tokensOffered))
                && (!queries.maxPeople || (queries.maxPeople && event.maxPeople === queries.maxPeople))
                && (!queries.categories || (queries.categories && event.categories === queries.categories))
            ) eventsArray.push(event);
            i++;
            if (i === eventsCount)
                res.status(200).json({ code: 200, data: eventsArray });
        });
    }
}

export const updateEvent = async (req: Request, res: Response) => {
    const eventId = req.params.id;
    const newData = req.body;
    const eventData = db.doc(firestore, eventsCollection, eventId);
    await db.updateDoc(eventData, newData);
    res.status(200).json({ code: 200, data: "The event data has been updated successfully!" });
}