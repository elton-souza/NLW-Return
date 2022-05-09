import { useState } from "react";
import bugImage from "../../assets/bug.svg";
import ideaImage from "../../assets/idea.svg";
import thoughtImage from "../../assets/thought.svg";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackSuccessStep } from "./Steps/FeedbacSuccessStep";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImage,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Idéia",
    image: {
      source: ideaImage,
      alt: "imagem de uma lâmpada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thoughtImage,
      alt: "Imagem de um balão de pensamento",
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  const handleRestartFeedback = () => {
    setFeedbackSent(false);
    setFeedbackType(null);
  };

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccessStep restartFeedback={handleRestartFeedback} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChange={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              restartFeedback={handleRestartFeedback}
              onFeedbackSent={()=> setFeedbackSent(true)}
            />
          )}
        </>
      )}
      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela{" "}
        <a
          className="underline underline-offset-2"
          href="https://rocketseat.com.br"
        >
          Rocketseat
        </a>
      </footer>
    </div>
  );
}
