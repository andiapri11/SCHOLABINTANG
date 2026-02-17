"use server";

import { readFile, writeFile } from "fs/promises";
import path from "path";

const TRAFFIC_FILE = path.join(process.cwd(), 'data', 'traffic.json');

interface TrafficData {
    totalSessions: number;
    sessionsToday: number;
    lastUpdated: string;
    history: { date: string; sessions: number }[];
}

async function initTrafficFile() {
    const initialData: TrafficData = {
        totalSessions: 0,
        sessionsToday: 0,
        lastUpdated: new Date().toISOString().split('T')[0],
        history: []
    };
    try {
        await writeFile(TRAFFIC_FILE, JSON.stringify(initialData, null, 2));
        return initialData;
    } catch (e) {
        console.error("Failed to init traffic file", e);
        return initialData;
    }
}

export async function logVisit() {
    try {
        let content;
        try {
            content = await readFile(TRAFFIC_FILE, 'utf-8');
        } catch (e) {
            content = JSON.stringify(await initTrafficFile());
        }

        const data: TrafficData = JSON.parse(content);
        const today = new Date().toISOString().split('T')[0];

        // Check if date changed
        if (data.lastUpdated !== today) {
            // Save yesterday's data to history if it has value
            if (data.sessionsToday > 0) {
                data.history.push({ date: data.lastUpdated, sessions: data.sessionsToday });
                // Keep only last 30 days
                if (data.history.length > 30) data.history.shift();
            }
            data.sessionsToday = 0;
            data.lastUpdated = today;
        }

        data.totalSessions += 1;
        data.sessionsToday += 1;

        await writeFile(TRAFFIC_FILE, JSON.stringify(data, null, 2));
        return { success: true, count: data.sessionsToday };
    } catch (error) {
        console.error("Traffic logging error:", error);
        return { success: false };
    }
}

export async function getTrafficStats() {
    try {
        const content = await readFile(TRAFFIC_FILE, 'utf-8');
        return JSON.parse(content) as TrafficData;
    } catch (error) {
        return {
            totalSessions: 0,
            sessionsToday: 0,
            lastUpdated: new Date().toISOString().split('T')[0],
            history: []
        };
    }
}
