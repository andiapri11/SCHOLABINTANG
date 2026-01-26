import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://scholabintang.id',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        // Tambahkan halaman lain di sini jika ada
    ];
}
