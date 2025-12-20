import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ResultCard } from "@/components/result/ResultCard";
import { resultContent, allResultTypes } from "@/lib/quiz/results";
import { ResultType } from "@/lib/quiz/types";

interface ResultPageProps {
  params: Promise<{ type: string }>;
  searchParams: Promise<{ score?: string }>;
}

// Generate static params for all result types
export function generateStaticParams() {
  return allResultTypes.map((type) => ({
    type,
  }));
}

// Dynamic metadata for SEO and social sharing
export async function generateMetadata({
  params,
  searchParams,
}: ResultPageProps): Promise<Metadata> {
  const { type } = await params;
  const { score } = await searchParams;

  // Validate result type
  if (!allResultTypes.includes(type as ResultType)) {
    return {
      title: "Result Not Found | Do I Love My Job?",
    };
  }

  const content = resultContent[type as ResultType];
  const scoreValue = score || "0";

  const title = `I'm a ${content.title} | Do I Love My Job?`;
  const description = content.shareTextTwitter;
  const ogImageUrl = `/api/og/${type}?score=${scoreValue}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `Do I Love My Job? Result: ${content.title}`,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
  };
}

export default async function ResultPage({ params, searchParams }: ResultPageProps) {
  const { type } = await params;
  const { score } = await searchParams;

  // Validate result type
  if (!allResultTypes.includes(type as ResultType)) {
    notFound();
  }

  const scoreValue = parseInt(score || "0", 10);

  return <ResultCard resultType={type as ResultType} score={scoreValue} />;
}
