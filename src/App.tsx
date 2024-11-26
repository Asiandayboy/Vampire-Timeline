import { useState } from "react"
import { Vampire, VAMPIRES } from "./Vampires"
import Card from "./components/Card"
import "./styles.css"
import CardArticle from "./components/CardArticle"
import Timeline from "./components/Timeline"
import AuthorTag from "./components/AuthorTag"


function App() {
  const [focusedCard, setFocusedCard] = useState<Vampire|null>(null)
  const [scrollY, setScrollY] = useState<number>(window.scrollY)


  function openCardArticle(card: Vampire) {
    setScrollY(window.scrollY)
    setFocusedCard(card)
    window.scrollTo(0,0)
  }

  function closeCardArticle() {
    setFocusedCard(null)
    window.scrollTo(0, scrollY)
  }



  return (
    <>
      {
        !focusedCard &&
        <>
          <header>
            <h1 className="timeline-header">Vampires Throughout History</h1>
          </header>
          <Timeline cards={
            VAMPIRES.map((v, i) => (
              <Card key={i} vampire={v} index={i} openCardArticleCallback={() => openCardArticle(v)}/>
            ))
          } />
          <footer>
            <AuthorTag />
          </footer>
        </>
        ||
        <CardArticle vampire={focusedCard!!} closeCardArticleCallback={() => closeCardArticle()}/>
      }
    </>
  )
}

export default App
