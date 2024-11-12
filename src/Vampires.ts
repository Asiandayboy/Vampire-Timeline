type VampireDescription = {
    originExplanation: string
    appearance: string
    abilities: string[]
    defenseStrategy: string[]
}


type TimePeriod = string
| [number, number] 
| { start: number, end: number }


export type Vampire = {
    name: string
    culturalOrigin: string,
    timePeriod: string
    summary: string
    description: VampireDescription
    culturalSignificance?: string
    images: string[]
    sources: string[]
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
    // {

    // },
    {
        name: "Twilight",
        culturalOrigin: "US",
        timePeriod: "2008",
        summary: "twilight vampires",
        description: {
            originExplanation: "",
            appearance: "",
            abilities: [],
            defenseStrategy: []
        },
        images: [
            "https://static0.srcdn.com/wordpress/wp-content/uploads/2019/06/edward-cullen-sparkle.jpg"
        ],
        sources: [
            
        ]
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
            appearance: `The Originals appear as regular human beings, but they are able to transform their appearance on will when feeding off the blood of humans. In this vampiric state, their canines become noticably longer and sharper and the scelera of their eyes turn bloodshot red, accompnanied with black pulsing veins under their eyes, as if blood is rushing into their eyes.
            `,
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
        images: [
            "https://th.bing.com/th/id/R.289e30c332449a03a80d434afc7e51dc?rik=YGGMAcDno%2fRGDg&riu=http%3a%2f%2fvignette3.wikia.nocookie.net%2fthe-originels%2fimages%2f2%2f2b%2fTvd0302-0294.jpg%2frevision%2flatest%3fcb%3d20130529160429%26path-prefix%3dfr&ehk=%2bdBSVxpqNLM6Nd2ozLJEJV0wP4Ba2L0r%2f4TS%2fSoClFE%3d&risl=&pid=ImgRaw&r=0",
            "https://th.bing.com/th/id/R.10c18d8650a57fcf22c704010e2e3d34?rik=%2f%2f8d2jVxSqNugQ&pid=ImgRaw&r=0"
        ],
        sources: [
            "https://vampirediaries.fandom.com/wiki/Original_Vampire"
        ]
    }
]