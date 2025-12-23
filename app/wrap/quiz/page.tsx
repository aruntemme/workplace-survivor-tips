import { Metadata } from "next";
import { WrapQuiz } from "@/components/wrap/WrapQuiz";
import { WRAP_YEAR } from "@/lib/wrap/constants";

export const metadata: Metadata = {
  title: `Work Wrap ${WRAP_YEAR} | Quiz`,
  description: `Answer 6 quick questions to reveal your ${WRAP_YEAR} work stats.`,
};

export default function WrapQuizPage() {
  return <WrapQuiz />;
}
