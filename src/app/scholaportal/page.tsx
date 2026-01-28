import PromoPortal from "@/components/PromoPortal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/lib/LanguageContext";

export default function Page() {
    return (
        <LanguageProvider>
            <main>
                <Navbar />
                <PromoPortal />
                <Footer />
            </main>
        </LanguageProvider>
    );
}
