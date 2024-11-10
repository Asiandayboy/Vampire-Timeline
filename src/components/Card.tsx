import { Vampire } from "../Vampires"

type Props = {
  vampire: Vampire
  openCardArticleCallback: () => void
  index: number
}


export default function Card({vampire, index, openCardArticleCallback}: Props) {

  return (
    <section className={`timeline-card vampire-card ${index % 2 == 0 && "left-container" || "right-container"}`}>
      <div className="card-img-wrapper">
        <img src={vampire.images[0]} alt=""/>
      </div>
      <div className="card-content">
        <h2 className="card-header">{vampire.name}</h2>
        <div className="card-subheader">{vampire.culturalOrigin} &mdash; {vampire.timePeriod}</div>
        <p className="card-summary">
          {vampire.summary}
        </p>
        <button onClick={openCardArticleCallback} className="read_more-btn">Read More...</button>
      </div>
      {
        index % 2 == 0 &&
        <span className="left-container-circle"></span>
        ||
        <span className="right-container-circle"></span>
      }
    </section>
  )
}