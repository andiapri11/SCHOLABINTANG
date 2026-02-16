import fs from 'fs';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'data', 'submissions.json');
const SETTINGS_PATH = path.join(process.cwd(), 'data', 'settings.json');

// Ensure directory and files exist
if (!fs.existsSync(path.join(process.cwd(), 'data'))) {
    fs.mkdirSync(path.join(process.cwd(), 'data'));
}

if (!fs.existsSync(DB_PATH)) {
    fs.writeFileSync(DB_PATH, JSON.stringify([], null, 2));
}

if (!fs.existsSync(SETTINGS_PATH)) {
    const defaultSettings = {
        whatsapp: "628218144726",
        email: "hello@codifi.id"
    };
    fs.writeFileSync(SETTINGS_PATH, JSON.stringify(defaultSettings, null, 2));
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

export async function getSettings() {
    if (!fs.existsSync(SETTINGS_PATH)) return { whatsapp: "628218144726" };
    return JSON.parse(fs.readFileSync(SETTINGS_PATH, 'utf-8'));
}

export async function updateSettings(data: any) {
    const currentSettings = await getSettings();
    const newSettings = { ...currentSettings, ...data };
    fs.writeFileSync(SETTINGS_PATH, JSON.stringify(newSettings, null, 2));
    return newSettings;
}
