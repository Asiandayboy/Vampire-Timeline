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
        <img src={vampire.thumbnail} alt=""/>
      </div>
      <div className="card-content">
        <div className="card-subheader">{vampire.culturalOrigin}, {vampire.timePeriod}</div>
        <h2 className="card-header">{vampire.name}</h2>
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