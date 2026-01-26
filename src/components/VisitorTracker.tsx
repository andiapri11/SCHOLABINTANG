"use client";

import { useEffect, useRef } from "react";
import { logVisit } from "@/app/actions/traffic";

export default function VisitorTracker() {
    const trackedRef = useRef(false);

    useEffect(() => {
        // Only track once per page mount in dev, or simply once per session
        // we use a simple sessionStorage to avoid spamming counts on refresh
        const hasTracked = sessionStorage.getItem("tracked_session");

        if (!hasTracked && !trackedRef.current) {
            trackedRef.current = true;
            logVisit().then(() => {
                sessionStorage.setItem("tracked_session", "true");
            });
        }
    }, []);

    return null; // Silent component
}
