import { Metadata } from "next";
import { QuizContainer } from "@/components/quiz/QuizContainer";

interface QuizPageProps {
  searchParams: Promise<{
    ref?: string;
    from?: string;
    score?: string;
    challenge?: string;
  }>;
}

// Dynamic metadata for challenge links with OG image
export async function generateMetadata({
  searchParams,
}: QuizPageProps): Promise<Metadata> {
  const params = await searchParams;
  const challengeFrom = params.from;

  const baseMetadata = {
    title: "Take the Quiz | Do I Love My Job?",
    description: "5 questions. 2 minutes. The truth about your workplace survival level.",
  };

  // If this is a challenge link, customize the OG image
  if (challengeFrom) {
    const ogImageUrl = `/api/og/challenge?from=${encodeURIComponent(challengeFrom)}`;
    const title = `A ${challengeFrom} challenged you! | Do I Love My Job?`;
    const description = `Someone got "${challengeFrom}" on the workplace quiz. Think you can do better?`;

    return {
      ...baseMetadata,
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
            alt: `Workplace Quiz Challenge from ${challengeFrom}`,
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

  // Default OG for non-challenge quiz page
  return {
    ...baseMetadata,
    openGraph: {
      title: baseMetadata.title,
      description: baseMetadata.description,
      images: [
        {
          url: "/api/og/quiz",
          width: 1200,
          height: 630,
          alt: "Do I Love My Job? Quiz",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: baseMetadata.title,
      description: baseMetadata.description,
      images: ["/api/og/quiz"],
    },
  };
}

export default async function QuizPage({ searchParams }: QuizPageProps) {
  const params = await searchParams;

  return (
    <QuizContainer
      referralSource={params.ref}
      challengeFrom={params.from}
      isChallenge={params.challenge === "true"}
    />
  );
}
