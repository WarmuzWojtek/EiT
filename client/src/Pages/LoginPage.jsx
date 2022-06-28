import { useState, useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
// import { Modal } from "react-responsive-modal";
import PlayBackground from "../components/PlayBackground/PlayBackground";
import AppBar from "../components/AppBar/AppBar";
import GameplayContainer from "../components/GameplayContainer/GameplayContainer";
import PlaygroundContainer from "../components/PlaygroundContainer/PlaygroundContainer";
import RulesContainer from "../components/RulesContainer/RulesContainer";
import ActionsContainer from "../components/ActionsContainer/ActionsContainer";
import CounterContainer from "../components/CounterContainer/CounterContainer";
import LanguageSwitch from "../components/LanguageSwitch/LanguageSwitch";
import Subtitle from "../components/Subtitle/Subtitle";
import Button from "../components/Button/Button";
import { words } from "../Constants/words";
import Modal from "../components/Modal/Modal";
// import Playground from '../Components/Playground/Playground'

import { Transition } from "react-transition-group";
import { TweenMax } from "gsap/all";

const startState = { autoAlpha: 0, y: -50 };

const LoginPage = (props) => {
  const [answer, setAnswer] = useState("");
  const [questions, setQuestions] = useState(words);
  const [currentQ, setCurrentQ] = useState("");
  const [comment, setComment] = useState("");
  const [currentIndex, setCurrentIndex] = useState();
  const [isEnglishFirst, setIsEnglishFirst] = useState(true);
  // const [isGameStarted, setIsGameStarted] = useState(false);
  const [rightAnswers, setRightAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);

  const rightAnswersRef = useRef(null);
  const wrongAnswersRef = useRef(null);
  const closeModalBtnRef = useRef(null);
  const modalRef = useRef(null);
  const commentRef = useRef(null);
  const startBtnRef = useRef(null);
  const learnBtnRef = useRef(null);
  const questionRef = useRef(null);

  const endGame = useCallback(() => {
    setAnswer("");
    alert(
      `Twój wynik to ${(
        (rightAnswers / (rightAnswers + wrongAnswers)) *
        100
      ).toFixed(0)} %`
    );
    window.location = "/";
  }, [rightAnswers, wrongAnswers]);

  useEffect(() => {
    gsap.fromTo(
      questionRef.current,
      {
        transform: "scale(0)",
      },
      {
        transform: "scale(1.3)",
        // repeat: 0,
        duration: 1,
        // yoyo: "true",
        // delay: 0,
        ease: "bounce",
      }
    );
  }, [currentQ]);

  useEffect(() => {
    gsap.fromTo(
      commentRef.current,
      {
        opacity: 1,
        letterSpacing: "1px",
        transform: "scale(1)",
      },
      {
        opacity: 0,
        letterSpacing: "5px",
        transform: "scale(2.5)",
        // repeat: 0,
        duration: 1,
        yoyo: "true",
        // delay: 0,
        ease: "power3",
      }
    );

    if (questions.length < 1) {
      endGame();
    }
  }, [rightAnswers, wrongAnswers, endGame, questions.length]);

  useEffect(() => {
    gsap.fromTo(
      rightAnswersRef.current,
      {
        transform: "translateY(-40px)",
      },
      {
        transform: "translateY(0)",
        repeat: 0,
        duration: 1,
        delay: 0,
        ease: "bounce",
      }
    );
  }, [rightAnswers]);

  useEffect(() => {
    gsap.fromTo(
      wrongAnswersRef.current,
      {
        transform: "translateY(-40px)",
      },
      {
        transform: "translateY(0)",
        repeat: 0,
        duration: 1,
        delay: 0,
        ease: "bounce",
      }
    );
  }, [wrongAnswers]);

  function handleAnswerChange(e) {
    setAnswer(e.target.value);
  }
  function handleStartBtn() {
    const index = Math.floor(Math.random() * questions.length);
    const currentQuestion = questions[index];
    // setIsGameStarted(true);
    setCurrentIndex(index);
    setCurrentQ(isEnglishFirst ? currentQuestion.q : currentQuestion.a);
  }

  function handleGoodAnswer() {
    setComment("very good");
    setRightAnswers((rightAnswers) => rightAnswers + 1);
    handleNextQuestion();
  }
  function handleWrongAnswer() {
    setComment("you`re wrong");
    setWrongAnswers((wrongAnswers) => wrongAnswers + 1);
    handleNextQuestion();
  }

  function handleAnswerSubmit(e) {
    e.preventDefault();
    isEnglishFirst
      ? questions[currentIndex].a === answer
        ? handleGoodAnswer()
        : handleWrongAnswer()
      : questions[currentIndex].q === answer
      ? handleGoodAnswer()
      : handleWrongAnswer();
  }

  function handleNextQuestion() {
    const first = questions.slice(0, currentIndex);
    const second = questions.slice(currentIndex + 1, questions.length);
    const newQuestions = first.concat(second);
    setQuestions(newQuestions);
    if (newQuestions.length > 0) {
      const index = Math.floor(Math.random() * newQuestions.length);
      const currentQuestion = newQuestions[index];
      setCurrentIndex(index);
      setCurrentQ(isEnglishFirst ? currentQuestion.q : currentQuestion.a);
      setAnswer("");
    }
  }

  function handleLanguageSwitch() {
    setIsEnglishFirst(!isEnglishFirst);
  }

  function handleLearnBtn() {
    modalRef.current.style.transform = "translateY(0)";
    modalRef.current.style.opacity = 1;
  }

  function handleCloseModal() {
    modalRef.current.style.transform = "translateY(-100%)";
  }

  return (
    <Transition
      unmountOnExit
      in={props.show}
      timeout={1000}
      onEnter={(node) => TweenMax.set(node, startState)}
      addEndListener={(node, done) => {
        TweenMax.to(node, 0.5, {
          autoAlpha: props.show ? 1 : 0,
          y: props.show ? 0 : 50,
          onComplete: done,
        });
      }}
    >
      <PlayBackground>
        <AppBar />
        <PlaygroundContainer>
          <GameplayContainer></GameplayContainer>
        </PlaygroundContainer>
      </PlayBackground>
    </Transition>
  );
};

export default LoginPage;
