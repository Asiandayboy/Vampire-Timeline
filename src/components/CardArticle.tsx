import { Vampire } from "../Vampires"

type Props = {
    vampire: Vampire
    closeCardArticleCallback: () => void
}

export default function CardArticle({ vampire, closeCardArticleCallback }: Props) {


  return (
    <section className="vampire-article">
			<nav className="article-nav">
				<button className="close_article-btn" onClick={closeCardArticleCallback}>Back to Timeline</button>
			</nav>
			<h1>{vampire.name}</h1>
			
			<section>
				<h2>Origin</h2>
				<p>
					{vampire.description.originExplanation}
				</p>
			</section>

			<section className="appearance-section">
				<h2>Appearance</h2>
				<div className="appearance-content">
					<p>
						{vampire.description.appearance}
					</p>
					<div className="vampire_img-wrapper">
						<img src={vampire.images[1]} alt="" />
					</div>
				</div>
			</section>

			<section className="abilities_and_weaknesses">
				<div className="abilities-wrapper">
					<h3>Abilities</h3>
					<ul>
					{
						vampire.description.abilities.map((ability) => (
							<li>{ability}</li>
						))
					}
					</ul>
				</div>

				<div className="weaknesses-wrapper">
					<h3>Weaknesses</h3>
					<ul>
					{
						vampire.description.defenseStrategy.map((weakness) => (
							<li>{weakness}</li>
						))
					}
					</ul>
				</div>
			</section>

    </section>
  )
}