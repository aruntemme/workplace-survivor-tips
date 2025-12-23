import { Metadata } from "next";
import { WrapLanding } from "@/components/wrap/WrapLanding";
import { WRAP_YEAR, WRAP_TAGLINE } from "@/lib/wrap/constants";

export const metadata: Metadata = {
  title: `Work Wrap ${WRAP_YEAR} | ${WRAP_TAGLINE}`,
  description: `Your manager played you more than Spotify played your top artist. See your ${WRAP_YEAR} work year, quantified and roasted.`,
  openGraph: {
    title: `Work Wrap ${WRAP_YEAR}`,
    description: `Your manager played you more than Spotify played your top artist. Unwrap your ${WRAP_YEAR}.`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Work Wrap ${WRAP_YEAR}`,
    description: `Your manager played you more than Spotify played your top artist.`,
  },
};

export default function WrapPage() {
  return <WrapLanding />;
}
