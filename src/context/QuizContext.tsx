import React, { PropsWithChildren, createContext, useContext, useState } from "react";
import { data } from "../store/store";

type QuizContextValues = {
  answers: undefined | number[];
  setAnswers(answers: undefined | number[]): void;
  data: DataDetails[];
  questions: DataDetails[];
  startQuizGame(): void;
  nextQuestion(value: string): void;
  isStarted: boolean;
  isFinished: boolean;
  currentStep: number;
};

const QuizContext = createContext<QuizContextValues>({} as QuizContextValues);

export function useQuizContext() {
  return useContext(QuizContext);
}

export type DataDetails = {
  id: number;
  who: string;
  quote: string;
};

export function QuizProvider({ children }: PropsWithChildren<{}>) {
  const [answers, setAnswers] = useState<undefined | number[]>(undefined);
  const [questions, setQuestions] = useState<DataDetails[]>([]);

  const isStarted = answers !== undefined;
  const isFinished = answers ? answers.length >= 10 : false;
  const currentStep = answers ? answers.length + 1 : 1;

  function startQuizGame() {
    setAnswers([]);
    getNewData();
  }

  const newData: DataDetails[] = [];

  function getNewData() {
    let numbers = new Set<number>();
    while (numbers.size < 11) {
      let number = Math.floor(Math.random() * data.length);
      numbers.add(number);
    }
    let numbersArray = [...numbers];
    for (let item of numbersArray) {
      newData.push(data[item]);
    }
    setQuestions(newData);
  }

  function nextQuestion(value: string) {
    let newAnswers = [...(answers || [])];
    newAnswers.push(value === questions[currentStep].who ? 1 : 0);
    setAnswers(newAnswers);
    console.log(newAnswers);
    console.log(currentStep);
  }

  const value = {
    answers,
    setAnswers,
    isStarted,
    isFinished,
    currentStep,
    startQuizGame,
    nextQuestion,
    data,
    questions,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

export default QuizContext;
