import fs from 'fs';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'data', 'submissions.json');

// Ensure directory and file exist
if (!fs.existsSync(path.join(process.cwd(), 'data'))) {
    fs.mkdirSync(path.join(process.cwd(), 'data'));
}

if (!fs.existsSync(DB_PATH)) {
    fs.writeFileSync(DB_PATH, JSON.stringify([], null, 2));
}

export async function saveSubmission(data: any) {
    const currentData = JSON.parse(fs.readFileSync(DB_PATH, 'utf-8'));
    const newEntry = {
        id: Date.now(),
        ...data,
        createdAt: new Date().toISOString()
    };
    currentData.push(newEntry);
    fs.writeFileSync(DB_PATH, JSON.stringify(currentData, null, 2));
    return newEntry;
}
