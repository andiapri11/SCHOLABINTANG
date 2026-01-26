"use server";

import { readFile } from "fs/promises";
import path from "path";

const DB_PATH = path.join(process.cwd(), 'data', 'submissions.json');

export async function getSubmissions() {
    try {
        const fileContent = await readFile(DB_PATH, 'utf-8');
        const data = JSON.parse(fileContent);
        // Sort by most recent
        return data.sort((a: any, b: any) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
    } catch (error) {
        console.error("Fetch Error:", error);
        return [];
    }
}
