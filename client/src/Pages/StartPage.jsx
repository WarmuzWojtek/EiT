import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import Button from '../components/Button/Button'
import Title from '../components/Title/Title'
import Subtitle from '../components/Subtitle/Subtitle'
import ButtonsKit from '../components/ButtonsKit/ButtonsKit'
import StartBcg from '../components/StartBackground/StartBcgDesktop'
import '../components/StartBackground/startBcgDesktop.css';

import { Transition } from "react-transition-group";
import { TweenMax } from "gsap/all";
const startState = { autoAlpha: 0, y: -50 };

const StartPage = (props) => {

  const titleRef = useRef(null);
  const subtitle1Ref = useRef(null);
  const subtitle2Ref = useRef(null);
  const subtitle3Ref = useRef(null);
  const itRef = useRef(null);
  const startBtnRef = useRef(null);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    let tl = gsap.timeline({
      delay: 0.5,
    })
    tl.from(titleRef.current, {
      duration: 0.5,
      x: -1440,
      ease: 'none',

    })
      .from(itRef.current, {
        duration: 0.5,
        x: 500,
        ease: 'none',
        delay: -0.5,
      })
      .from(subtitle1Ref.current, {
        duration: 0.5,
        autoAlpha: 0,
        ease: 'none',
        delay: 0.5,
      })
      .from(subtitle2Ref.current, {
        duration: 0.5,
        autoAlpha: 0,
        ease: 'none',

      })
      .from(subtitle3Ref.current, {
        duration: 0.5,
        autoAlpha: 0,
        ease: 'none',

      })
      .from(startBtnRef.current, {
        duration: 1,
        autoAlpha: 0,
        ease: 'none',
        delay: 0.5,
      })

  }, [titleRef]);

  useEffect(() => {

    gsap.fromTo(startBtnRef.current, {
      boxShadow: "0 0 0 0 rgba(255,255,255, 1)"
    }, {
      boxShadow: "0 0 10px 5px rgba(255,255,255, 0.3)",
      repeat: -1,
      duration: 1.5,
      delay: 1,
      ease: 'power4.out',
    });

  }, [])

  function handleStartClick() {
    setIsClicked(!isClicked);
  }

  return (
    <Transition
      unmountOnExit
      in={props.show}
      timeout={1000}
      onEnter={node => TweenMax.set(node, startState)}
      addEndListener={(node, done) => {
        TweenMax.to(node, 0.5, {
          autoAlpha: props.show ? 1 : 0,
          y: props.show ? 0 : 50,
          onComplete: done
        });
      }}
    >
      <StartBcg>
        <Title id={titleRef} />
        <Subtitle id={subtitle1Ref} content="Master your IT vocabulary..." className='subtitle' />
        <Subtitle id={subtitle2Ref} content="Take up the challenge..." className='subtitle' />
        <Subtitle id={subtitle3Ref} content="Have fun!" className='subtitle' />
        {/* <Button
        id={startBtnRef}
        onClick={handleStartClick}
        className='startBtn'
        content='Click !'
      /> */}
        {isClicked ? <ButtonsKit /> :
          <Button
            id={startBtnRef}
            onClick={handleStartClick}
            className='startBtn'
            content='NOW!' />
        }
        <Subtitle id={itRef} content="it" className='it' />
      </StartBcg>
    </Transition>
  );
}

export default StartPage;