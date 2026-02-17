"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, translations } from '@/constants/translations';
import { TranslationSchema } from '@/types';

type LanguageContextType = {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: TranslationSchema;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>('id');

    useEffect(() => {
        const saved = localStorage.getItem('language') as Language;
        if (saved && (saved === 'id' || saved === 'en')) {
            setLanguage(saved);
        }
    }, []);

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem('language', lang);
    };

    const t = translations[language];

    return (
        <LanguageContext value={{ language, setLanguage: handleSetLanguage, t }}>
            {children}
        </LanguageContext>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
