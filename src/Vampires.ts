type Image = {
    src: string
    caption?: string
    author?: string
}

type Description = {
    heading?: string
    description: string
    img?: Image
}

type VampireDescription = {
    originExplanation: string,
    abilities: string[]
    defenseStrategy: string[]

    originDescription?: Description[],
    abilitiesDescription?: Description[],
    weaknessesDescription?: Description[],
    appearanceDescription?: Description[]
}


type TimePeriod = string
| [number, number] 
| { start: number, end: number }


export type Vampire = {
    name: string
    culturalOrigin: string,
    timePeriod: string
    summary?: string
    description: VampireDescription
    culturalSignificance?: string
    thumbnail: string
    sources?: { [key: string]: string }
}

function timePeriodToString(timePeriod: TimePeriod): string {
    if (typeof timePeriod === "string") {
        return timePeriod
    } else if (Array.isArray(timePeriod)) {
        return `${timePeriod[0]} - ${timePeriod[1]}` 
    } else {
        return `${timePeriod.start} - ${timePeriod.end}` 
    }
}




export const VAMPIRES: Vampire[] = [
    {
        name: "Lamia",
        culturalOrigin: "Greece",
        timePeriod: "5th Century BCE",
        description: {
            originExplanation: "",
            appearanceDescription: [
                {
                    heading: "Half-human, Half-serpent",
                    description: `Lamia is depicted as half woman, half snake. This type of portrayal is common for Greek Mythology, as part of the portrayls of women represented as monsters whose existence is a threat to others, especially men (Greek Reporter). Some interpretations of Lamia depicts her "with the upper body of a woman but with the lower half as that of a snake" (Greek Reporter).`,
                    img: {
                        src: "https://www.worldhistory.org/img/r/p/1000x1200/16343.jpg.webp?v=1662514771-1662514786",
                        caption: "The Kiss of the Enchantress",
                        author: "Isobel Lilian Gloag"
                    }
                },
            ],
            originDescription: [
                {
                    heading: "Beginning of Tragedy",
                    description: "In Greek mythology, Lamia was a beautiful queen of Libya, whose beauty captivated the attention of Zeus. He visited her as a mortal and after pursuing her relentlessly, depsite her resistance, she gradually allowed herself to be drawn to him, becoming one of his many mistresses (The Story of Lamia)."
                },
                {
                    heading: "Wrath of Hera",
                    description: "Hera, being the jealous and vindictive wife she is, discovered Zeus' betrayal and with her rage, destroyed everything that was dear to her, withering crops and spreading illnesses among her people (The Story of Lamia). In other versions, Hera also sought revenge by stealing Lamia's children (Ancient Greece Reloaded). In a final act of retribution, Hera cursed Lamia, transforming her lower body into a monstrous serpent tail and distorting her face into a fearsome ugly creature (The Story of Lamia). "
                },
                {
                    heading: "The Child-Eating Demon",
                    description: `Cursed, Lamia descended into madness and vengeance, seeking revenge by preying on others' children and drinking their blood (The Story of Lamia)—a common theme in vampire lore. Lamia became a symbol of fear—"a creature of the night that would take [children] if they strayed too far from the safety of their homes" (The Story of Lamia). She became a story parents used to scare their children into behaving.`
                }
            ],
            defenseStrategy: [],
            abilities: [],
            abilitiesDescription: [
                {
                    heading: "Shapeshifting",
                    description: "Lamia is often depicted as having the ability to transform between a beautiful woman and her serpent-like monster form. This ability allowed her to lure unsuspecting children with her beauty",
                    img: {
                        src: "https://greekgodsandgoddesses.net/wp-content/uploads/2019/10/lamia.jpg"
                    }
                },
                {
                    heading: "Seduction",
                    description: "Because of her shapeshifting, she was able to lure and manipulate people, similar to many depictions of vampire. It was a weapon she used to draw people close to her before preying upon them.",
                    img: {
                        src: "https://www.worldhistory.org/img/r/p/1000x1200/16347.jpg.webp?v=1662515581-1662515632",
                        caption: "Lamia and the Soldier",
                        author: "John William Waterhouse"
                    }
                }
            ],
            weaknessesDescription: [
                {
                    heading: "Sleeplessness",
                    description: `In later stories, Hera is described to have also cursed Lamia with the inability to close her eyes so that she wouldn't sleep and would "always obsess over the image of her dead children" (Ancient Greece Reloaded). Zeus then gave her the ability to remove her eyes so that she could rest and to appease her grief (Ancient Greece Reloaded).`
                }
            ]
        },
        thumbnail: "https://greekreporter.com/wp-content/uploads/2021/05/Lamia-696x605.jpg",
        sources: {
            ["Greek Reporter"]: "https://greekreporter.com/2024/11/04/lamia-the-man-devouring-goddess-of-greek-mythology/",
            ["The Story of Lamia"]: "https://www.gathertales.com/story/the-story-of-the-lamia/sid-812",
            ["Ancient Greece Reloaded"]: "https://www.ancientgreecereloaded.com/files/ancient_greece_reloaded_website/legendary_monsters/monsters_lamia.php",
            ["Lamia"]: "https://www.worldhistory.org/lamia/"
        }
    },

    






    {
        name: "Twilight",
        culturalOrigin: "US",
        timePeriod: "2008",
        summary: "twilight vampires",
        description: {
            originExplanation: "",
            abilities: [],
            defenseStrategy: []
        },
        thumbnail: "https://static0.srcdn.com/wordpress/wp-content/uploads/2019/06/edward-cullen-sparkle.jpg",
        sources: {
            
        }
    },
    {
        name: "The Originals",
        culturalOrigin: "US",
        timePeriod: timePeriodToString([2011, 2018]),
        summary: `
            Popularized through the fantasy TV show, "The Originals", the story follows the family of the first and most powerful vampires, created over a millennum ago through a magical ritual. With unparalleled power, they are bound by family but cursed for eternity with a thirst for blood and a constant threat to their existence.
        `,
        description: {
            originExplanation: `In modern entertainment, the story of the Original Vampires was popularized through television, most notably in "The Vampire Diaries" and "The Originals." Over a thousand years ago, during Viking era, the Mikaelson's youngest son was killed by a werewolf on a full moon. In this grief and fear of losing more of their children, the Mother, who was a powerful witch, created a spell to make her fmaily immortal, strong enough to survive the dangerous world. However, this spell had unintended consequences, turning them into uncontrollable and emotional bloodthirsty monsters who burned in the sunlight, but could not die from fire, who were unable to enter homes without the owner's invitation, and who could only be killed by the rare tree that gave them life—White Oak. They lived cursed. 
            `,
            // appearance: `The Originals appear as regular human beings, but they are able to transform their appearance on will when feeding off the blood of humans. In this vampiric state, their canines become noticably longer and sharper and the scelera of their eyes turn bloodshot red, accompnanied with black pulsing veins under their eyes, as if blood is rushing into their eyes.
            // `,
            abilities: [
                "Immortality",
                "Enhanced speed",
                "Enhanced strength",
                "Super durability",
                "Heightened senses",
                "Heightened emotions",
                "Mind Compulsion",
                "Healing Factor",
                "Dream manipulation"
            ],
            defenseStrategy: [
                "White Oak stake to the heart",
                "Cannot enter a house uninvited",
                "Powerful magic"
            ]
        },
        thumbnail: "https://th.bing.com/th/id/R.289e30c332449a03a80d434afc7e51dc?rik=YGGMAcDno%2fRGDg&riu=http%3a%2f%2fvignette3.wikia.nocookie.net%2fthe-originels%2fimages%2f2%2f2b%2fTvd0302-0294.jpg%2frevision%2flatest%3fcb%3d20130529160429%26path-prefix%3dfr&ehk=%2bdBSVxpqNLM6Nd2ozLJEJV0wP4Ba2L0r%2f4TS%2fSoClFE%3d&risl=&pid=ImgRaw&r=0",
        // images: [
        //     "https://th.bing.com/th/id/R.10c18d8650a57fcf22c704010e2e3d34?rik=%2f%2f8d2jVxSqNugQ&pid=ImgRaw&r=0"
        // ],
        sources: {
            ["TVD"]: "https://vampirediaries.fandom.com/wiki/Original_Vampire"
        }   
    }
]