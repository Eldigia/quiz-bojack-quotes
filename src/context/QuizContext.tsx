import React, { createContext, useContext, useState } from "react";

type QuizContextValues = {
  isStart: boolean;
  useIsStart(isStart: boolean): void;
  isGame: boolean;
  useIsGame(isGame: boolean): void;
  data: DataDetails[];
  setData(tasks: DataDetails[]): void;
};

const QuizContext = createContext<QuizContextValues>({
  isStart: true,
  useIsStart: () => {},
  isGame: true,
  useIsGame: () => {},
  data: [],
  setData() {},
});

export function useQuizContext() {
  return useContext(QuizContext);
}

export type DataDetails = {
  id: number;
  who: string;
  quote: string;
};

export function QuizProvider({ children }: any) {
  const [isStart, useIsStart] = useState(true);
  const [isGame, useIsGame] = useState(true);

  const [data, setData] = useState<DataDetails[]>([
    {
      id: 1,
      who: "BoJack",
      quote: `"He’s so stupid he doesn’t realize how miserable he should be."`,
    },
    {
      id: 2,
      who: "BoJack",
      quote: `"You are a horrible person, and you not understanding that you’re a horrible person, doesn’t make you less of a horrible person."`,
    },
    {
      id: 3,
      who: "Princess Carolyn",
      quote: `"I got into this business because I love stories. They comfort us, they inspire us, they create a context for how we experience the world. But also, you have to be careful, because if you spend a lot of time with stories, you start to believe that life is just stories, and it’s not. Life is life, and that’s so sad because there’s so little time and… what are we doing with it?"`,
    },
    {
      id: 4,
      who: "BoJack",
      quote: `"Settle. Because otherwise you’re just gonna get older and harder, and more alone. And you’re gonna do everything you can to fill that hole, with friends, and your career, and meaningless sex, but the hole doesn’t get filled. One day, you’re gonna look around and you’re going to realize that everybody loves you, but nobody likes you. And that is the loneliest feeling in the world."`,
    },
    {
      id: 5,
      who: "Mr. Peanutbutter's",
      quote: `"He's probably just razzin' ya. But he's a good dog. All bark, no bite. Oh, sorry! That's a Labrador expression. I guess in human terms it would be: he's all talk, no shooting you with an assault rifle.`,
    },
    {
      id: 6,
      who: "Mr. Peanutbutter",
      quote: `"All I ever wanted was to be your friend. And you treat me like a big joke."`,
    },
    {
      id: 7,
      who: "Mr. Peanutbutter",
      quote: `"The universe is a cruel, uncaring void. The key to being happy isn't a search for meaning. It's to just keep yourself busy with unimportant nonsense, and eventually, you'll be dead."`,
    },
    {
      id: 8,
      who: "Other",
      quote: `"It gets easier. Every day it gets a little easier. But you gotta do it every day —that’s the hard part. But it does get easier."`,
    },
    {
      id: 9,
      who: "Other",
      quote: `"Do you ever get that feeling that like, to know you more is to love you less?"`,
    },
    {
      id: 10,
      who: "BoJack",
      quote: `"I need to go take a shower so I can’t tell if I’m crying or not."`,
    },
    {
      id: 11,
      who: "BoJack",
      quote: `"Yeah, there were exactly twelve! I ate twelve muffins, and I didn’t even want one! There’s your goddamn news story, the mystery of my missing goddamn self-respect!"`,
    },
    {
      id: 12,
      who: "BoJack",
      quote: `"I don’t hate the troops, I just hate one specific troop. I don’t even hate him, I just think he’s wrong about the muffins."`,
    },
    {
      id: 13,
      who: "Princess Carolyn",
      quote: `"So, are you available for Tuesday, or are you gonna be too busy masturbating to old pictures of yourself?"`,
    },
    {
      id: 14,
      who: "Other",
      quote: `"When you look at someone through rose-colored glasses, all the red flags just look like flags."`,
    },
    {
      id: 15,
      who: "BoJack",
      quote: `"Same thing that always happens. You didn’t know me and then you fell in love with me. And now you know me."`,
    },
    {
      id: 16,
      who: "Diane",
      quote: `"That’s the problem with life, you either know what you want, and you don’t get what you want, or you get what you want, and you don’t know what you want."`,
    },
    {
      id: 17,
      who: "Diane",
      quote: `"I don't think I believe in 'deep down'. I think that all you are is just the things that you do."`,
    },
    {
      id: 18,
      who: "Diane",
      quote: `"I think there are people that help you become the person you end up being, and you can be grateful for them, even if they were never meant to be in your life forever."`,
    },
    {
      id: 19,
      who: "Diane",
      quote: `"You're responsible for your own happiness, you know?"`,
    },
    {
      id: 20,
      who: "Princess Carolyn",
      quote: `"I don't know how you expect me to love you when you so clearly hate yourself."`,
    },
    {
      id: 21,
      who: "Princess Carolyn",
      quote: `"You gotta get your shit together. So you took some licks, but you're gonna bounce back! Because you're talented, you're smart, and damn it, you're good! You are a goddamn American treasure, you know that? You are BoJack goddamn Horseman. So get the hell off my lawn!"`,
    },
    {
      id: 22,
      who: "Other",
      quote: `"Has the concept of "women having choices" gone too far? We've assembled this diverse panel of white man in bow-ties to talk about abortion."`,
    },
    {
      id: 23,
      who: "BoJack",
      quote: `"Couldn't hear you over the und of my calories not metabolizing."`,
    },
    {
      id: 24,
      who: "Princess Carolyn",
      quote: `"So yesterday you let yourself fall in love a little bit and you got your heart broken. Serves you right for having feelings!"`,
    },
    {
      id: 25,
      who: "Mr. Peanutbutter",
      quote: `"Tennis makes me so mad!! Why doesn't anyone catch the ball!?"`,
    },
    {
      id: 26,
      who: "Other",
      quote: `"I’m at a place where I don’t need to grow as a person and can constantly surround myself with sycophants and enablers until I die tragically young."`,
    },
    {
      id: 27,
      who: "Other",
      quote: `"Henrietta, don’t use a foreign language in front of the child, she’ll get ideas!"`,
    },
    {
      id: 28,
      who: "Todd",
      quote: `"I never know if I can handle anything. That's what makes my life so exciting"`,
    },
    {
      id: 29,
      who: "Diane",
      quote: `"We've all been damaged, but it's good damage because it makes us who we are."`,
    },
    {
      id: 30,
      who: "BoJack",
      quote: `"I'm not someone therapy works on. I might be too smart."`,
    },
    {
      id: 31,
      who: "Mr. Peanutbutter",
      quote: `"Officer, the mail truck pulled up right next to me. I got a bad vibe. What was I supposed to do? Not chase the mail truck?"`,
    },
    {
      id: 32,
      who: "BoJack",
      quote: `"Sweetie, no I think this is stupid and a waste of everyone’s time but you’re my girlfriend and I care about you so I’m here."`,
    },
    {
      id: 33,
      who: "Todd",
      quote: `"Call me four out of five dentists because I agree!"`,
    },
    {
      id: 34,
      who: "Todd",
      quote: `"I do love having my picture taken, it's proof I exist"`,
    },
    {
      id: 35,
      who: "Todd",
      quote: `"As my blood type always says, B positive!"`,
    },
    {
      id: 37,
      who: "Todd",
      quote: `"You know, sometimes I feel like my whole life is just a series of loosely-related wacky misadventures"`,
    },
    {
      id: 38,
      who: "Todd",
      quote: `"You are all the things that are wrong with you. It’s not the alcohol, or the drugs or any of the shitty things that happened to you in your career or when you were a kid. It’s you."`,
    },
    {
      id: 39,
      who: "Todd",
      quote: `"Fool me once, fool me twice, fool me chicken soup with rice"`,
    },
    {
      id: 40,
      who: "Todd",
      quote: `"It's always nice to be included in a sentence someone says."`,
    },
  ]);

  const value = { data, setData, isStart, useIsStart, isGame, useIsGame };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

export default QuizContext;
