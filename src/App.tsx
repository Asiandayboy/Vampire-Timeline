import { useState } from "react"
import { Vampire, VAMPIRES } from "./Vampires"
import Card from "./components/Card"
import "./styles.css"
import CardArticle from "./components/CardArticle"


function App() {
  const [focusedCard, setFocusedCard] = useState<Vampire|null>(null)

  return (
    <>
      {
        !focusedCard &&
        <>
          <h1 className="timeline-header">Vampires Throughout History</h1>
          <section className="vampire-cards-wrapper timeline">
          {
            VAMPIRES.map((v, i) => (
              <Card key={i} vampire={v} index={i} openCardArticleCallback={() => setFocusedCard(v)}/>
            ))
          }
          </section>
        </>
        ||
        <CardArticle vampire={focusedCard!!} closeCardArticleCallback={() => setFocusedCard(null)}/>
      }

      {/* <div className="timeline">
        <div className="container left-container">
          <div className="text-box">
            <h2>Alphabet Inc.</h2>
            <small>2018 - 2018</small>
            <p>
              The success of every website depends on search engine optimization and digital marketing strategy. If you are on first page of all major search...
            </p>
          </div>
          <span className="left-container-circle"></span>
        </div>
        <div className="container right-container">
          <div className="text-box">
            <h2>Alphabet Inc.</h2>
            <small>2018 - 2018</small>
            <p>
              The success of every website depends on search engine optimization and digital marketing strategy. If you are on first page of all major search...
            </p>
          </div>
          <span className="right-container-circle"></span>
        </div>
        <div className="container left-container">
          <div className="text-box">
            <h2>Alphabet Inc.</h2>
            <small>2018 - 2018</small>
            <p>
              The success of every website depends on search engine optimization and digital marketing strategy. If you are on first page of all major search...
            </p>
          </div>
          <span className="left-container-circle"></span>
        </div>
        <div className="container right-container">
          <div className="text-box">
            <h2>Alphabet Inc.</h2>
            <small>2018 - 2018</small>
            <p>
              The success of every website depends on search engine optimization and digital marketing strategy. If you are on first page of all major search...
            </p>
          </div>
          <span className="right-container-circle"></span>
        </div>
        <div className="container left-container">
          <div className="text-box">
            <h2>Alphabet Inc.</h2>
            <small>2018 - 2018</small>
            <p>
              The success of every website depends on search engine optimization and digital marketing strategy. If you are on first page of all major search...
            </p>
          </div>
          <span className="left-container-circle"></span>
        </div>
      </div> */}
    </>
  )
}

export default App
