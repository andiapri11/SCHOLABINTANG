export type Language = 'id' | 'en';

export interface NavTranslations {
    services: string;
    portfolio: string;
    about: string;
    cta: string;
}

export interface HeroService {
    name: string;
    icon: string;
}

export interface HeroTranslations {
    badge: string;
    title1: string;
    title2: string;
    desc: string;
    services: HeroService[];
    ctaPrimary: string;
    ctaSecondary: string;
    techStack: string;
    seo: string;
    mobile: string;
}

export interface ServiceItem {
    title: string;
    description: string;
}

export interface ServicesTranslations {
    badge: string;
    subtitle: string;
    desc: string;
    items: ServiceItem[];
}

export interface ProductItem {
    name: string;
    price: string;
    originalPrice: string;
    discount: string;
    desc: string;
    isPromo: boolean;
    features: string[];
}

export interface ProductsTranslations {
    title: string;
    readyTitle: string;
    readyDesc: string;
    readyItems: ProductItem[];
    customTitle: string;
    customDesc: string;
    customItems: ProductItem[];
    customCTA: string;
    customBtn: string;
}

export interface PortfolioItem {
    title: string;
    category: string;
    client: string;
    image: string;
}

export interface PortfolioTranslations {
    badge: string;
    title: string;
    desc: string;
    all: string;
    items: PortfolioItem[];
}

export interface CTASectionTranslations {
    title1: string;
    title2: string;
    title3: string;
    desc: string;
    whatsapp: string;
}

export interface FooterTranslations {
    tagline: string;
    links: string;
    contact: string;
    rights: string;
}

export interface ContactFormTranslations {
    name: string;
    email: string;
    whatsapp: string;
    service: string;
    message: string;
    placeholder: string;
    submit: string;
}

export interface ContactInfoTranslations {
    title: string;
    whatsapp: string;
    email: string;
    address: string;
}

export interface ContactPageTranslations {
    title1: string;
    title2: string;
    desc: string;
    form: ContactFormTranslations;
    info: ContactInfoTranslations;
}

export interface TranslationSchema {
    nav: NavTranslations;
    hero: HeroTranslations;
    services: ServicesTranslations;
    products: ProductsTranslations;
    portfolio: PortfolioTranslations;
    ctaSection: CTASectionTranslations;
    footer: FooterTranslations;
    contactPage: ContactPageTranslations;
}

export interface WebsiteSettings {
    whatsapp: string;
    email?: string;
}
