import { Metadata } from "next";
import HomeClient from "@/components/home/HomeClient";

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://codifi.id',
  },
};

export default function Home() {
  return <HomeClient />;
}
