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

			
			<section className="origin-section">
				<h2>Origin</h2>

				<div className="desc-wrapper">
				{
					vampire.description.originDescription?.map((desc) => (
						<div key={desc.heading} className="desc-subsection">
							<h3>{desc.heading}</h3>
							{
								Array.isArray(desc.description) &&
								<div>
									{
										desc.description.map((descText) => (
											<p>{descText}</p>
										))
									}
								</div> ||
								<p>{desc.description}</p>
							}
						</div>
					))
				}
				</div>
			</section>

			<span className="section-divider"></span>

			<section className="appearance-section">
				<h2>Appearance</h2>

				{
					vampire.description.appearanceDescription?.map((desc) => (
						<div key={desc.heading} className="appearance_desc-subsection">
							{
								desc?.heading && <h3>{desc.heading}</h3>
							}
							<p>{desc.description}</p>
							{
								desc?.img &&
								<div className="image">
									<div className="img-wrapper">
										<img src={desc.img.src} alt="" />
									</div>
									{
											desc.img.caption &&
											<div className="img-caption">{desc.img.caption}</div>
										}
									{
										desc.img.author &&
										<div className="img-author">by {desc.img.author}</div>
									}
								</div>
							}
						</div>
					))
				}

			</section>

			<span className="section-divider"></span>

			<section className="abilities-section">
				<h2>Abilities</h2>

				<section>
					<h3>Strengths</h3>
					<div>
						{
							vampire.description.abilitiesDescription?.map((desc) => (
								<div key={desc.heading} className="ability-item">
									<div className={`ability-info ${!desc.img && "no_img-info"}`}>
										<h4>{desc.heading}</h4>
										<p>{desc.description}</p>
									</div>
									{
										desc.img &&
										<div className="image ability-img">
											<div className="img-wrapper">
												<img src={desc.img.src} alt="" />
											</div>
											{
												desc.img.caption &&
												<div className="img-caption">{desc.img.caption}</div>
											}
											{
												desc.img.author &&
												<div className="img-author">by {desc.img.author}</div>
											}
										</div>
									}
								</div>
							))
						}
					</div>
				</section>

				<section>
					<h3>Weaknesses</h3>
					<div>
					{
						vampire.description.weaknessesDescription?.map((desc) => (
							<div key={desc.heading} className="ability-item">
								<div className={`ability-info ${!desc.img && "no_img-info"}`}>
									<h4>{desc.heading}</h4>
									<p>{desc.description}</p>
								</div>
								{
									desc.img &&
									<div className="image ability-img">
										<div className="img-wrapper">
											<img src={desc.img.src} alt="" />
										</div>
										{
											desc.img.caption &&
											<div className="img-caption">{desc.img.caption}</div>
										}
										{
											desc.img.author &&
											<div className="img-author">by {desc.img.author}</div>
										}
									</div>
								}
							</div>
						))
					}
					</div>
				</section>

			</section>

			<span className="section-divider"></span>

			<section className="culture-section">
				<h2>Cultural Significance</h2>
				{vampire.culturalSignificance && vampire.culturalSignificance.length > 0 &&
					<div className="desc-wrapper">
						{
							vampire.culturalSignificance?.map((desc) => (
								<div key={desc.heading} className="desc-subsection">
									<h3>{desc.heading}</h3>
									<p>{desc.description}</p>
								</div>
							))
						}
					</div>
				}

			</section>

			<span className="section-divider"></span>

			<section className="sources-section">
				<h2>Sources</h2>
				<ul>
					{
						Object.entries(vampire.sources!).map(([citation, src], i) => (
							<li key={i}>
								<h3>[{i+1}] {citation}</h3>
								<div>
									<a href={src}>{src}</a>
								</div>
							</li>
						))
					}
				</ul>
			</section>


    </section>
  )
}