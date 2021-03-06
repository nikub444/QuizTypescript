import React from "react";

import { AnswerObject } from "../App";

import { Wrapper, Buttonwrapper } from "./QuestionCard.styles";

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => (
  <Wrapper>
    <p className="number">
      Question: {questionNr}/{totalQuestions}
    </p>
    <p>{question}</p>
    <div>
      {answers.map((answer) => (
        <Buttonwrapper
          key={answer}
          correct={userAnswer?.correctAnswer === answer}
          userClicked={userAnswer?.answer === answer}
        >
          <button
            disabled={userAnswer ? true : false}
            value={answer}
            onClick={callback}
          >
            <span>{answer}</span>
          </button>
        </Buttonwrapper>
      ))}
    </div>
  </Wrapper>
);

export default QuestionCard;
