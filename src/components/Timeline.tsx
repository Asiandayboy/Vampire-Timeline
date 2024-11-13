import { ReactElement, useRef } from "react"
import gsap from "gsap"
import { ReactRef, useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"



type Props = {
  cards: ReactElement[]
}


gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)



function getTopPercentage(index: number, increment: number) {
  return 0.5 * increment * ((index+1)*2 - 1)
}


export default function Timeline({ cards }: Props) {
  const timelineWrapper = useRef() as ReactRef


  useGSAP(() => {
    const cards = gsap.utils.toArray(".card") as GSAPTweenTarget[]
    const points = gsap.utils.toArray(".timeline-point") as GSAPTweenTarget[]
    const pointsBg = gsap.utils.toArray(".timeline-point-bg") as GSAPTweenTarget[]
    const totalCards = cards.length;
    const DIVIDER_INCREMENT = 100 / totalCards; // Percentage height increment per card


    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: timelineWrapper.current,
        start: "top 46%",
        end: "bottom-=10% 57.5%",
        scrub: 1,
        markers: true,
      },
    })

    cards.forEach((card, i) => {
      const dividerHeight = (i + 1) * DIVIDER_INCREMENT
      
      timeline.to(".timeline-divider", {
        height: `${dividerHeight}%`,
        ease: "linear",
      }, i * 0.5);

      timeline.from(card, {
        x: i % 2 === 0 ? "-25%" : "125%",
        autoAlpha: 0,
        duration: .25,
        ease: "sine.inOut",
      }, "<");

      gsap.set(points[i], { top: `${getTopPercentage(i, DIVIDER_INCREMENT)}%` })
      gsap.set(pointsBg[i], { top: `${getTopPercentage(i, DIVIDER_INCREMENT)}%` })

      timeline.from(points[i], {
        scale: 0,
        duration: 0.1,
        ease: "back"
      }, `<+${0.2}`)

      timeline.from(pointsBg[i], {
        scale: 0,
        duration: 0.25,
        ease: "back"
      }, `<-${0.15}`)

    });

  }, { scope: timelineWrapper })


  return (
    <section className="timeline-wrapper" ref={timelineWrapper}>
      {
        cards.map((card, i) => (
          <section key={`tlc${i}`} className={`card card${i}`}>
            {card}
          </section>
        ))
      }

      <span className="timeline-divider"></span>

      {
        Array.from({ length: cards.length }, (_, i) => (
          <span key={`tlp${i}`} className="timeline-point"></span>
        ))
      }

      {
        Array.from({ length: cards.length }, (_, i) => (
          <span key={`tlpbg${i}`} className="timeline-point-bg"></span>
        ))
      }
      
    </section>
  )
}