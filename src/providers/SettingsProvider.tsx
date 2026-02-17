"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchSettings } from '@/actions/contact-actions';
import { WebsiteSettings } from '@/types';

type SettingsContextType = {
    settings: WebsiteSettings;
    refreshSettings: () => Promise<void>;
};

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export function SettingsProvider({ children }: { children: React.ReactNode }) {
    const [settings, setSettings] = useState<WebsiteSettings>({
        whatsapp: "628218144726",
        email: "hello@codifi.id"
    });

    const refreshSettings = async () => {
        try {
            const data = await fetchSettings();
            if (data && data.whatsapp) {
                setSettings(data);
            }
        } catch (error) {
            console.error("Failed to fetch settings in context:", error);
        }
    };

    useEffect(() => {
        refreshSettings();
    }, []);

    return (
        <SettingsContext.Provider value={{ settings, refreshSettings }}>
            {children}
        </SettingsContext.Provider>
    );
}

export function useSettings() {
    const context = useContext(SettingsContext);
    if (context === undefined) {
        throw new Error('useSettings must be used within a SettingsProvider');
    }
    return context;
}
