type Image = {
    src: string
    caption?: string
    author?: string
}

type Description = {
    heading?: string
    description: string | string[]
    img?: Image
}

type VampireDescription = {
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
    description: VampireDescription
    thumbnail: string
    sources: { [key: string]: string }

    summary?: string
    culturalSignificance?: Description[]
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
                {
                    heading: "",
                    description: "",
                    img: {
                        src: "https://th.bing.com/th/id/R.dbbbce16d0bb044dee6badcd29bd80a0?rik=iq38pYXXzeIkvg&riu=http%3a%2f%2fvignette2.wikia.nocookie.net%2fvillains%2fimages%2f4%2f47%2fThe_Lamia.jpg%2frevision%2flatest%2fscale-to-width-down%2f2000%3fcb%3d20130813010027&ehk=gVjLW4yOMeqEHYqIHjZdLyFgIMvnUYsOL0EuU0Y04p0%3d&risl=&pid=ImgRaw&r=0"
                    }
                }
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
        culturalSignificance: [
            {
                heading: "Maternal Grief",
                description: "Lamia can be deeply tied to the themes of motherhood and loss. Her children were taken away from her by Hera, due to her secret affair with Zeus. Hera turned Lamia into a monstrous figure that preys on children. This transformation reflects the psychological and emotional trauma of losing a child. However, the idea that a grieving mother would then inflict such suffering on others is equally tragic, further highlighting the terrible tragedy of Hera's jealousy and Zeus' uncontrollable lust."
            },
            {
                heading: "Unchecked Desires",
                description: "The story of Lamia is also a cautionary tale of the destructive consequences of uncontrollable lust. Zeus' notorious tendency to have multiple affairs with different women, combined with Hera's jealously, leads to tragic punishments of the third parties, such as Lamia. There is a parallel between Lamia's affair with Zeus and her eventual transformation into a predatory creature that seduces men to their demise. The myth of Lamia highlights the importance of staying loyal and not giving in to lust or unchecked desires, as such decisions can ruin relationships and oneself."
            }
        ],
        thumbnail: "https://greekreporter.com/wp-content/uploads/2021/05/Lamia-696x605.jpg",
        sources: {
            ["Greek Reporter"]: "https://greekreporter.com/2024/11/04/lamia-the-man-devouring-goddess-of-greek-mythology/",
            ["The Story of Lamia"]: "https://www.gathertales.com/story/the-story-of-the-lamia/sid-812",
            ["Ancient Greece Reloaded"]: "https://www.ancientgreecereloaded.com/files/ancient_greece_reloaded_website/legendary_monsters/monsters_lamia.php",
            ["Lamia"]: "https://www.worldhistory.org/lamia/"
        }
    },
    {
        name: "Vetala",
        culturalOrigin: "India",
        timePeriod: "3rd Century BCE",
        description: {
            originDescription: [
                {
                    heading: "Vetala Panchvimshati",
                    description: `The origin of the Vetala lies in the Vetala Panchvimishati, or Twenty-Five Tales of the Vetala. It is a ancient Sanskrit literary work from India, a collection of tales and legends dating back to the 11th century (Wikipedia), with stories about King Vikramaditya who is tasked with capturing a vetala that is inhabiting a corpse and that resides in a tree, and bringing it to some location, usually a temple or shrine. At the end of each story, the Vetala poses him a riddle or some moral question. If the king answers correctly, he is able to capture the Vetala and have it remained captured. But if he answers incorrectly, the Vetala escapes and the king must capture it again.`
                },
                {
                    heading: "Bhavishya Purana",
                    description: `The Bhavishya Purana is another ancient text with mentions of the Vetala. This piece of literature "describes Vetala as a demon that can predict the future and has knowledge of the past and present" (mythical).`
                },
                {
                    heading: "Hindu Folklore",
                    description: `The Vetala is often shown as an evil spirit that haunts cemeteries and can possess corposes, with the purpose of driving people mad and inflicting all sorts of misfortunes, such as miscarriages and killing children (mythical).`
                }
            ],
            appearanceDescription: [
                {
                    heading: "Ghastly Appearance",
                    description: `Vetalas are usually depicted as "hanging upside down from trees" and described as very frightening looking, with "long, sharp teeth and claws, and...eyes...glowing red" (mythical).`,
                    img: {
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Vetal.jpg/330px-Vetal.jpg",
                        caption: "King Vikramaditya and a Vetala in the Vetala Panchavimshati" 
                    }
                },
                {
                    heading: "Varying Appearances",
                    description: `In some legends, they are described as "having bat-like wings" and in others, looking more human-like (mythical).`,
                    img: {
                        src: "https://th.bing.com/th/id/R.68709c51dbb76931bdc6b70a8b4259a9?rik=AXkxEI9iZdcN6g&riu=http%3a%2f%2f1.bp.blogspot.com%2f-KiCQb37KmK8%2fUUuo0DoQ7zI%2fAAAAAAAAHxg%2fdbouWyyw8kM%2fs1600%2fvetala_by_zurrak-d3ag631.jpg&ehk=CsSIQBX90GP7GWxwR3z%2bQVsmDuEPaSDx8hf8CWnNqy8%3d&risl=&pid=ImgRaw&r=0"
                    }
                }
            ],
            abilitiesDescription: [
                {
                    heading: "Necromancy",
                    description: "The Vetalas' most prominent ability is their ability to possess corpses, using them as vessels for their malevolent activites. They have complete control over these bodies.",
                    img: {
                        src: "https://th.bing.com/th/id/OIP.I2hgcyH-vS5wPS4eH7HsdwHaKe?rs=1&pid=ImgDetMain"
                    }
                },
                {
                    heading: "Great Knowledge and Wisdom",
                    description: `The Vetalas possess vast knowledge about the past, present, and future and use their abilities to manipulate and influence the actions of others. In the Vetala Panchvimishati, the Vetala tested King Vikramaditya with riddles and moral dilemmas, each carrying some lesson or insight to be learned (Hindu Blog).`,
                    img: {
                        src: "https://th.bing.com/th/id/OIP.f-cUZUIo-VZP6K1c-gWV2AHaEK?w=325&h=183&c=7&r=0&o=5&dpr=1.4&pid=1.7"
                    }
                },
                {
                    heading: "Immortality",
                    description: `The Vetala does not seem possible to kill, and instead, jumps from body to body if its current vessel gets destroyed (ancientpages).`,
                    img: {
                        src: "https://th.bing.com/th/id/OIP.ZKhwl2tnf2I2J1uHCWin0wHaKe?rs=1&pid=ImgDetMain",
                    }
                }
            ],
            weaknessesDescription: [
                {
                    heading: "Mantras",
                    description: "According to ancient beliefs, the Vetala can be repelled by chanting mantras (ancientpages), much like reciting Christian prayers.",
                }
            ],
        },
        thumbnail: "https://th.bing.com/th/id/OIP.MzwxlGARII0gSbsyzyJDrAHaEx?rs=1&pid=ImgDetMain",
        sources: {
            ["mythlok"]: "https://mythlok.com/vetala/",
            ["mythical"]: "https://mythicalencyclopedia.com/vetala/",
            ["Hindu Blog"]: "https://www.hindu-blog.com/2024/07/symbolism-of-vetal-baital-or-vetala-in.html",
            ["ancientpages"]: "https://www.ancientpages.com/2021/01/19/vetala-vampire-with-knowledge-of-the-past-present-and-future-in-hindu-mythology/",
            ["Wikipedia"]: "https://en.wikipedia.org/wiki/Vetala_Panchavimshati"
        },
        culturalSignificance: [
            {
                heading: "Life and Death",
                description: `The Vetalas' ability to inhabit corpses symbolizes the fine line between life and death. Its ability to jump from corpse to corpose reflects the Hindu concept of reincarnation and the perpetual cycle of birth, death, and rebirth. `
            },
            {
                heading: "Spiritual vs Physical",
                description: "Vetalas are wise beings and are often testing a person's character, their moral integrity and wisdom, highlighting the constant battle between the physical and spiritual, challenging the idea of what it means to be alive. This is further reflected in the Vetalas' ability to occupy corpses, animating their body in a spiritual sense, but which are not alive, biologically."
            },
        ]
    },
    {
        name: "Vrykolakas",
        culturalOrigin: "Greece",
        timePeriod: "9th Century",
        thumbnail: "https://supercurioso.com/wp-content/uploads/2018/07/vrykolakas-3.jpg",
        description: {
            originDescription: [
                {
                    heading: "The Undead of the Underworld",
                    description: "In ancient Greece, it was believed that the dead, when not properly laid to rest or dying with unfinished business, roamed the earth in the Underworld for eternity, forever lost and idle."
                },
                {
                    heading: "Byzantine Influence",
                    description: "The 9th century was a significant period in the Byzantine empire's history, and it's influence, along with the Eastern Orthodox Church teachings on afterlife, combined with the Greek's Underworld to form the foundation for the myth of the Vrykolakas (mythology)."
                },
                {
                    heading: "Vrykolakas",
                    description: `In Greek folklore, the Vrykolakas is a being that emerges after death due to a "sinful life, improper burial, or other factors", and then returns to life to cause harm, especially to its relatives (godsandmonsters). According to a common folklore belief, it is said that at night, a vrykolakas will sometimes knock on people's doors, calling out the names of those inside. "If there's no response from within, the creature will continue on its way—but if someone answers, that person becomes tainted by association and will die within several days" and become a vrykolakas themselves (fantasy). No one should answer unless you have a second knock.`
                },
                {
                    heading: "The Vyrkolakas' Bond to its Gravesite",
                    description: `Every Saturday, the Vrykolakas must return to their gravesite and rest buried in the earth for one day. During this time, it is completely vulnerable; this is the only time it can be destroyed (pathfinderwiki). As it follows, they make sure to hide their gravesite well.`
                }
            ],
            appearanceDescription: [
                {
                    heading: "Grotesque Appearance",
                    description: `The Vrykolakas is typically depicted as "having a bloated body, pale skin..." (mythology). It resembles a "hunched, hairless...with a withered visage and long fangs" and with its spine bent from death, a vrykolakas is usually 4'6" - 5'0 tall (pathfinderwiki).`,
                    img: {
                        src: "https://th.bing.com/th/id/R.9cbf1beda90315e0310e93db5ef4b22a?rik=z9GtNCCIjeegFQ&riu=http%3a%2f%2fimg4.wikia.nocookie.net%2f__cb20120620044115%2fwarriorsofmyth%2fimages%2f0%2f0b%2fYbxjejjf.jpg&ehk=WfdOrk7N9JaKw793lVPy0uOksXFcju1allKyKrkqsqs%3d&risl=&pid=ImgRaw&r=0"
                    }
                },
            ],
            abilitiesDescription: [
                {
                    heading: "Cannibalism",
                    description: `Instead of craving for blood, the Vrykolakas eats the flesh of their victims, much like zombies (Greek Reporter). They are more like cannibals than bloodsuckers, with a taste for human livers (Wikipedia).`,
                    img: {
                        src: "https://th.bing.com/th/id/OIP.5oObRCxmUYacSrclxbUQ4AHaFO?rs=1&pid=ImgDetMain"
                    }
                },
                {
                    heading: "Shapeshifting",
                    description: `In some versions of Greek folklore, the Vrykolakas posesses the supernatural power to disguise themselves to wander undetected in living communities (pathfinderwiki).`
                },
                {
                    heading: "Grows in Power",
                    description: `The Vrykolakas grow in power when left alone, so one should destroy its body before it becomes too powerful (Wikipedia).`
                }
            ],
            weaknessesDescription: [
                {
                    heading: "Death in its Grave",
                    description: `According to some accounts, the only way to destroy the Vrykolakas' body is on Saturday, which is the only day when it rests in its grave. The means of destruction include "exorcising, impaling, beheading, cutting into pieces, and...cremating" (Wikipedia).`,
                    img: {
                        src: "https://th.bing.com/th/id/R.0608ad8f0c4aedfcf33ec117a3099699?rik=cT9%2bEyWH%2bQDe5Q&riu=http%3a%2f%2f2e.aonprd.com%2fImages%2fMonsters%2fVampire_VrykolakasSpawn.png&ehk=b%2fwwZF6IhF34ohWI7vvB7DpW9w2HOYuGMYeEFWJv5EE%3d&risl=&pid=ImgRaw&r=0"
                    }
                }
            ],
        },
        culturalSignificance: [
            {
                heading: "A Cautionary Tale",
                description: "The acts of sacrilege that leads to one becoming a Vrykolakas—living a sinful life, improper burial, neglecting religious duties—serves as a warning to remind people to uphold their responsibilities, highlighting the importance of living a virtuous life and fulfilling all religious duties at the time."
            }
        ],
        sources: {
            ["Greek Reporter"]: "https://greekreporter.com/2023/06/03/vampires-in-greece-from-ancient-greek-creatures-to-the-vrykolakas/",
            ["mythology"]: "https://mythologyworldwide.com/from-vrykolakas-to-vampires-tracking-the-evolution-of-greek-vampire-lore/",
            ["godsandmonsters"]: "https://godsandmonsters.info/vrykolakas/",
            ["fantasy"]: "https://fantasy-faction.com/2013/fantastical-creatures-of-greco-roman-mythology-the-vrykolakas",
            ["Wikipedia"]: "https://en.wikipedia.org/wiki/Vrykolakas",
            ["pathfinderwiki"]: "https://pathfinderwiki.com/wiki/Vrykolakas"
        }
    },
    {
        name: "Penanggalan",
        culturalOrigin: "Southeast Asia",
        timePeriod: "11th-12th Century",
        thumbnail: "https://miro.medium.com/v2/resize:fit:640/1*58Q9A67eWaKJH5Ml1tS89g.jpeg",
        description: {
            originDescription: [
                {
                    heading: "Penanggalan",
                    description: `The story of the Penanggalan originates from Malaysian folklore. Its name comes from the word "tanggal", which means to be detached, removed, or to take off (mythlok). This word aptly describes the appearance of the Penanggalan as a floating detached woman's head with its organs still attached. `
                },
                {
                    heading: "Different Versions of the Penanggalan",
                    description: [
                        `There are mixed versions of how the Penanggalan came to be. In some legends, it was once a human woman who was cursed into a monster (mythicalencyclopedia), and in others, mortal women turn to a penanggal by practicing black magic.`,
                        `According to the version involving black magic, to become a penanggal, the "woman must meditate during a ritual bath in vinegar, with her whole body submerged except for the head" (Wikipedia). This form is only active at night, and to return back to its body, she must soak her organs in vinegar to shrink them so that they fit in her body (Wikipedia). Therefore, the Penanggal is easily distinguishable from an ordinary woman with its odor of vinegar.`,
                        `In another version, a woman, "in return for keeping a vegetarian diet for 40 days", is gifted exceptional beauty. But if she breaks that fast, she becomes cursed into a pananggalan with the insatiable thirst for pregnant women and newborns (atlas).`
                    ]
                },
                {
                    heading: "The Nature of the Penanggalan",
                    description: `In many versions of the myth, the Penanggalan works as a midwife, appearing as a normal woman and nuturing her victims by day, and preying on them by night, "using her invisible tongue to snatch...[infants] through the windows or using her intestines to reach up the floorboards" (atlas). And so, parents are encouraged to secure their homes at night to avoid a kidnapping.`
                }
                
            ],
            appearanceDescription: [
                {
                    heading: "A Creepy Flying Head",
                    description: `The Penanggalan is depicted as the detached head af a woman floating and flying, hair disheveled, and with its internal organs and entrails hanging below (mythicalencyclopedia). When she's not in her detached form, she appears as an ordinary human woman.`,
                    img: {
                        src: "https://cdna.artstation.com/p/assets/images/images/055/115/320/large/allison-wong-penanggalan.jpg?1666157589"
                    }
                }, 
                {
                    heading: "",
                    description: "",
                    img: {
                        src: "https://img.atlasobscura.com/eRRvw_71QKsYvltRBx1W3dFQM6oi8IbN8xBI5ngMbDc/rt:fit/w:1280/q:81/sm:1/scp:1/ar:1/aHR0cHM6Ly9hdGxh/cy1kZXYuczMuYW1h/em9uYXdzLmNvbS91/cGxvYWRzL2Fzc2V0/cy85MTgyZDlhMy1j/ZDdjLTQ4NTEtYTIw/Mi05NzA2NWEyNWE1/ZjExNzE3MDhjMWY0/ZWZjODA0OTZfUGVu/YW5uZ2dhbGFuIDIu/cG5n.png"
                    }
                },
                {
                    heading: "",
                    description: "",
                    img: {
                        src: "https://2e.aonprd.com/Images/Monsters/Penanggalen.png"
                    }
                }
            ],
            abilitiesDescription: [
                {
                    heading: "A Thirst for Blood",
                    description: `The Penanggalan is quite notorious for its feeding habits, which includes "drinking the blood of pregnant women and newborns" (mythicalencyclopedia).`,
                    img: {
                        src: "https://cdnb.artstation.com/p/assets/images/images/028/052/663/large/jorge-silva-penanggalan-lowres.jpg?1593360807",
                        caption: "Penanggalan",
                        author: "Jorge Silva"
                    }
                },
                {
                    heading: "Shapeshifting",
                    description: "The Penanggalan is able to transform between the form of an ordinary woman at day, and the hideous creature at night.",
                    img: {
                        src: "https://i.pinimg.com/originals/60/fa/ee/60faee61b57d07949d1ddb17e952141f.jpg"
                    }
                }
            ],
            weaknessesDescription: [
                {
                    heading: "Identifiable Odor",
                    description: "The Pananggalan smells of vinegar, which is a key giveaway of her monstrous form. Some might be ambitious enough to follow the scent of vinegar back to her headless body and kill her when she returns to it.",
                    img: {
                        src: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7f2feabd-e126-441e-ae3b-34d04ba47843/ddhd2t0-12f55665-b997-4307-8d8c-c7d0d4de2602.png/v1/fill/w_1024,h_1536,q_80,strp/the_penanggalan_by_garycadima_ddhd2t0-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTUzNiIsInBhdGgiOiJcL2ZcLzdmMmZlYWJkLWUxMjYtNDQxZS1hZTNiLTM0ZDA0YmE0Nzg0M1wvZGRoZDJ0MC0xMmY1NTY2NS1iOTk3LTQzMDctOGQ4Yy1jN2QwZDRkZTI2MDIucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.n9Cayy66blcVRUXYF-N1ft3mff7V0QXY9bePKOHrFsY"
                    }
                },
                {
                    heading: "Death by Glass",
                    description: `If you fill the monster's headless body with glass before her return, the Penanggalan will die as she tries to reattach herself to it (atlas).`,
                    img: {
                        src: "https://cdn.thecollector.com/wp-content/uploads/2023/01/penanggalan-print.jpg?width=1080&quality=55"
                    }
                },
            ]
        },
        culturalSignificance: [
            {
                heading: "Keep Your Children Safe",
                description: "The Penanggalan's tendency to prey on newborns and pregnant mothers serves as another cautionary tale, a warning for parents to safeguard their homes so that their babies are not kidnapped in the middle of the night, and for mothers to avoid being alone at night. It teaches people to remain vigilant of people who hide their true nature."
            },
            {
                heading: "A Moral Lesson",
                description: "Since the Penanggalan is often described as being cursed due to selfish or immoral actions, the myth also serves as a warning for women against vanity and participating in forbidden practices. No amount of beauty through vegetarianism or power through black magic is worth it."
            }
        ],
        sources: {
            ["mythlok"]: "https://mythlok.com/penanggalan/",
            ["mythicalencyloedia"]: "https://mythicalencyclopedia.com/penanggalan/",
            ["Wikipedia"]: "https://en.wikipedia.org/wiki/Penanggalan",
            ["atlas"]: "https://www.atlasobscura.com/articles/monster-mythology-penanggalan"
        }
    },
    {
        name: "Strigoi",
        culturalOrigin: "Romania and Eastern Europe",
        timePeriod: "1200s",
        thumbnail: "https://i.pinimg.com/736x/ec/ad/4f/ecad4f57ab7449b332b8ec896f4f46c4.jpg",
        description: {
            originDescription: [
                {
                    heading: "Romanian Folklore",
                    description: [
                        `The mythology of the Strigoi dates back to the Dacians, which goes back to between 1000 BCE to 1 BCE. According to oral stories, the strigoi are "evil spirits, the spirits of the dead whose actions made them unworthy of entering the kingdom of Zalmoxis (fandom).`,
                        `But naturally as time went on, these oral stories evolved, and as a result, the Strigoi evolved into bloodthirsty creatures (fandom).`,
                        `The Strigoi are believed to be corpses brought back to life, either due to unfinished business from their past or after being cursed by a witch (traditionallegends).`
                    ]
                },
                {
                    heading: "Different Types of Strigoi",
                    description: [
                        `Strigoi can be categorized into two main types: Strigoi Mort and Strigoi Viu.`,
                        `The Strigoi Mort (the dead strigoi) is "the most dangerous" and are souls who have risen from their graves in order to torment their families (Wikipedia); they feed on the blood of the living.`,
                        `The Strigoi Viu (the living strigoi) appear more as an orindary person but with supernatural powers, such as heightened senses (mythologyworldwide). They are usually witches or people born with certain traits, such as "being the seventh child of the same sex in a family or being born with a caul (a membrane that can cover a newborn's head and face)" (mythicalcreatures).`
                    ]
                },
                {
                    heading: "Evil Creatures",
                    description: "The Strigoi are often described as malevolent beings that prey on the living, especiallay at night, feeding on their victims' life force (mythologyworldwide)."
                }
            ],
            appearanceDescription: [
                {
                    heading: "Strigoi Mort",
                    description: `The Strigoi Mort type is often characterized by their pale skin, long claws, red eyes, and a strong thirst for human blood. They are usually portrayed as shapeshifters that are able to fly (traditionallegends). They appear very grotesque and decayed.`,
                    img: {
                        src: "https://img-s3.onedio.com/id-579297b2392f6feb0d28b2c5/rev-0/w-1200/h-909/f-jpg/s-ef4b0d6fe89fb5690965c4131cdcd58a53324530.jpg"
                    }
                },
                {
                    heading: "Strigoi Viu",
                    description: `The Strigoi Viu type resembles more of an orindary human, and can exhibit unique characteristics, such as "red hair, blue eyes, or a propensity for nocturnal activity" (mythicalcreatures). `,
                    img: {
                        src: "https://th.bing.com/th/id/OIP.15S0FFQO2BBDSWTlhpGS6AAAAA?rs=1&pid=ImgDetMain"
                    }
                }
            ],
            abilitiesDescription: [
                {
                    heading: "Shapeshifting and Flight",
                    description: "Strigoi are able to transform into various animals, such as wolves, bats, and owls, and according to some legends, they are also able to fly after transforming into a bat or bird (mythicalcreatures)",
                    img: {
                        src: "https://i.pinimg.com/originals/cd/d0/00/cdd00001aa59688421ce3f99df68780a.png"
                    }
                },
                {
                    heading: "Hynosis",
                    description: "Strogoi are able to place their victims into a trance-like state, making it easier for them to feed on them (mythicalcreatures).",
                    img: {
                        src: "https://pre00.deviantart.net/3760/th/pre/i/2015/191/3/f/strigoi_by_anariel27-d90pii6.jpg"
                    }
                },
                {
                    heading: "Invisibility",
                    description: `The Strigoi is able to become invisible, giving them the element of surprise and making it difficult for others to see them coming (mythicalcreatures).`
                },
            ],
            weaknessesDescription: [
                {
                    heading: "Garlic",
                    description: `The Strigoi is repelled by garlic. Hanging garlic around one's home or wearing it, such as as a necklace, can protect against the Strigoi. (mythicalcreatures).`,
                    img: {
                        src: "https://www.mashed.com/img/gallery/why-vampires-hate-garlic-according-to-folklore/to-repel-vampires-eat-wear-or-hang-garlic-1697745543.jpg"
                    }
                },
                {
                    heading: "Holy Symbols",
                    description: `Crosses, holy water, and other religious symbols are able to repel the Strigoi, causing them pain or driving them away (mythicalcreatures). It could also be repelled or even killed by "reciting certain biblical verses" (fandom).`,
                    img: {
                        src: "https://ae01.alicdn.com/kf/S9f9ec2ffda4e43d7b0afef80421ad9abU/Vintage-Gothic-Vampire-Bat-Cross-Necklace-For-Women-Man-Silver-Color-Crystals-Gothic-Crucifix-Symbol-Easter.jpg"
                    }
                },
                {
                    heading: "Stake Through the Heart",
                    description: `Like many other vampire myths, a classic wooden stake, stabbed right into the heart of the Strigoi is believed to kill them (mythicalcreatures).`,
                    img: {
                        src: "https://i.pinimg.com/originals/ef/77/96/ef7796db914bbaa4b4d31be6a974e782.jpg",
                    }
                },
                {
                    heading: "Fire",
                    description: `Burning the body of a Strigoi purifies and destroys its undead spirit, preventing them from rising again (mythicalcreatures).`,
                    img: {
                        src: "https://fthmb.tqn.com/61jCssjeqNgeqqSVS_ULLhqc6do=/3008x2000/filters:fill(auto,1)/close-up-of-flame-536940503-59b2b3de845b3400107a7f27.jpg"
                    }
                }
            ]
        },
        culturalSignificance: [
            {
                heading: "Unfinished Business",
                description: "The myth of the Strigoi reflects a connection to human concerns about unresolved matters in life, and how that may affect one in the afterlife. In Romanian folklore, the strigoi can emerge from its grave when it has died as a human with unfulfilled obligations, broken relationships, or grievances, which highlights the consequences of leaving a messed up and incomplete life. By looking at it from this perspective, the story of the Strigoi can be interpreted as a warning for people to live a kind and honorable life, not just for themselves, but for their community and loved ones as well."
            }
        ],
        sources: {
            ["mythologyworldwide"]: "https://mythologyworldwide.com/the-strigoi-romanian-vampire-folklore-rituals/",
            ["traditionallegends"]: "https://www.traditionallegends.com/post/the-strigoi-of-romania",
            ["fandom"]: "https://vampires.fandom.com/wiki/Strigoi",
            ["Wikipedia"]: "https://en.wikipedia.org/wiki/Strigoi",
            ["mythicalcreatures"]: "https://mythicalcreatures.info/characters/strigoi/"
        }
    },
    {
        name: "Upyr",
        culturalOrigin: "Slavs",
        timePeriod: "1300s",
        thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/%D0%A3%D0%BF%D0%B8%D1%80_-_%D1%96%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D1%96%D1%8F%2C_2022.jpg/375px-%D0%A3%D0%BF%D0%B8%D1%80_-_%D1%96%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D1%96%D1%8F%2C_2022.jpg",
        description: {
            originDescription: [
                {
                    heading: "Slavic Culture",
                    description: `In ancient Slavic culture, common beliefs indicated a distinction between the soul and body. The death, the soul goes out of its body and wanders about for 40 days before moving on to the afterlife. During this time, the soul was believed to have the ability of re-entering a corpse, and if the soul was unclean, it would become an upyr (Wikipedia).`
                },
                {
                    heading: "Unclean Spirit",
                    description: [
                        `The ways a spirit would become unclean is if it died as an unbaptized child, died a violent or untimely death, killed by a sinner, or if they were not given a proper burial (Wikipedia). Therefore, great emphasis is placed on proper burial rites to ensure the purity of the soul as it separates from the body. A body improperly buried would be suscpetible to posession by other unclean spirits (Wikipedia). As an upyr, the creature requires feasting on the blood of the living for sustenance and "is considered to be vengeful and jealous towards the living (Wikipedia).`,
                    ]
                },
                {
                    heading: "Unique Traits Are Not Safe",
                    description: [
                        `Those who were physically different were also believed to be potential upyr candidates, such as "redheads, the left-handed, those with a limp, unibrow...gray mark on their back...having a big head, or no armpit or pubic hair" (Wikipedia).`,
                        `Mothers who died during or after childbirth were also not safe; they woul dbe vulnerable to the transformation of an upyr (Wikipedia).`
                    ]
                },
                {
                    heading: "The Upyr's Grave",
                    description: [
                        `Like many other vampires, the upyr's grave is their weakness. When out of their grave, they are susceptible and can be stopped or killed through various methods. It was believed that the grave of an upyr could be identified by having an "innocent child ride a horse to a cemetery and have them indicate the grave..." (Wikipedia).`
                    ]
                }
            ],
            appearanceDescription: [
                {
                    heading: "Distorted Human-Like Appearance",
                    description: "The Upyr can appear like a man or a young woman with pale skin (fandom). Due to how an upyr arises, it can look decayed with discolored or mottled skin, reflecting its connection to the corposes it possesses",
                    img: {
                        src: "https://i.pinimg.com/originals/17/a4/74/17a4748e35598bbd953166f95b3a255a.jpg"
                    }
                },
                {
                    heading: "",
                    description: "",
                    img: {
                        src: "https://th.bing.com/th/id/OIP.KQdALax81o19qs6Vs9dMNgAAAA?rs=1&pid=ImgDetMain"
                    }
                }
            ],
            abilitiesDescription: [
                {
                    heading: "Sunlight Immunity",
                    description: `The Uypr can freely walk in broad daylight, without being burned (fandom).`
                },
                {
                    heading: "A Thirst for Human Blood",
                    description: `Like many vampires, the Upyr has a strong craving for human blood, perhaps even greater than that of conventional vampires (fandom).`
                }
            ],
            weaknessesDescription: [
                {
                    heading: "Corpse Possession",
                    description: `An unclean spirit is able to possess any vulnerable corpse (corpses that have been improperly buried; corpses with spiritual impurity) and become an upyr (Wikipedia).`,
                    img: {
                        src: "https://cdnb.artstation.com/p/assets/images/images/051/715/177/large/far-far-games-img-8555.jpg?1657991297"
                    }
                },
                {
                    heading: "Chores",
                    description: `To occupy an upyr, the coffin of the upyr can be sprinkled with poppy-seed so that they are forced to pick up all the seeds (Wikipedia). Little knots, nets, or other small things would also force the upyr to untangle them in the grave.`,
                    img: {
                        src: "https://th.bing.com/th/id/R.a8ad7c8dd65b17491d801fbc9219b208?rik=tx9bXr0Cido7ww&pid=ImgRaw&r=0"
                    }
                },
                {
                    heading: "Vampire Burial",
                    description: "The head can be cut off and placed between the leg. After which, the corpse would be burned, nailed to the coffin, or repositioned to lie facing down (Wikipedia). This ritual would neutralize or prevent the upyr from rising again.",
                    img: {
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/%22Le_Vampire%22.jpg/332px-%22Le_Vampire%22.jpg"
                    }
                },
                {
                    heading: "Garlic",
                    description: "Garlic can be placed in the mouths of corpses to prevent them from rising as upyrs (Wikipedia).",
                    img: {
                        src: "https://5aday.co.nz/assets/site/fruit-and-vegetables/_articleHero/Garlic.jpg"
                    }
                }
            ]
        },
        culturalSignificance: [
            {
                heading: "Proper Burials",
                description: `Similarly to the Strigoi and Vrykolakas, the story of the Upyr also emphasizes the importance of proper burial rituals and respect for the dead. Death without peace corrupts the soul, making it impure and unable to move on. The soul transforms into a malevolent force and turns it to the "unclean spirit" that possesses corpses and harms the living.`
            }
        ],
        sources: {
            ["Wikipedia"]: "https://en.wikipedia.org/wiki/Upi%C3%B3r",
            ["fandom"]: "https://monster.fandom.com/wiki/Upyr",
        }
    },
    {
        name: "Aswang",
        culturalOrigin: "Philippines",
        timePeriod: "16th Century",
        thumbnail: "https://mythology.net/wp-content/uploads/2016/10/Aswang-Image-1.jpg",
        description: {
            originDescription: [
                {
                    heading: "Etymology",
                    description: `The word "Aswang" in Tagalog encompasses a range of shapeshifting supernatural beings with shared traits, such as witches, weredogs, vampires, and ghouls (Wikipedia).`
                },
                {
                    heading: "Shapeshifting Monster",
                    description: `The Aswang is essentially a shapeshifting flesh-eating monster, with a preference for feasting on children and pregnant women (mythology).`
                },
                {
                    heading: "Spanish Influence",
                    description: [
                        `According to some historians, the story behind the Aswang is believed to be a product of Spanish colonization. The Aswang were "the most feared among the mythical creatures of the Philippines," as noted by Spanish colonists (Wikipedia).`
                    ]
                },
                {
                    heading: "Pure Evil",
                    description: `The nature of aswangs are described as inherent evil; one-dimensional monsters with no motives beyond inflicting harm on others and devouring creatures (Wikipedia).`
                },
                {
                    heading: "Explanations for the Aswang",
                    description: [
                        `Real life events may have inspired the stories of the Aswang. One theory is that the Aswang legend is used to explain the unsolved crimes in the Philippines, such as when a person is violently murdered (mythology). It's easier to attribute the crime to demon than another human.`,
                        `Another theory is that the "tik tik" and "wak wak" sounds it makes when hunting are similar to those of nocturnal forest wildlife, such as bats and Philippine flying lemurs (Wikipedia). The sounds resulted in the animals being hunted, believing them to be an Aswang in disguise with its shapeshifting.`,
                        `The Aswang is also attributed to the XDP (X-linked dystonia parkinsonism) disease, found mostly among males of Filipino descent, with a majority of cases today being located in Capiz (Wikipedia). Those with the disease exhibit "visible symptoms [that] have been interpreted as a major contribution to the prevalence of narratives surrounding Capiz as the home of the aswang" (Wikipedia). These symptoms include bodies twisting, tongues protruding from their mouths, and salivating.`,
                        `As a result, the afflicted are considered to be aswang and are casted out from their communities, preventing them from receiving medical treatment and forcing them into isolation (Wikipedia).`
                    ]
                }

            ],
            appearanceDescription: [
                {
                    heading: "Woman by Day, Creature by Night",
                    description: `The Aswang usually takes on the form of a regular women during the day, and appears in animal form at night.`,
                    img: {
                        src: "https://allthatsinteresting.com/wordpress/wp-content/uploads/2022/10/woman-turns-into-aswang.jpg"
                    }
                },
                {
                    heading: "",
                    description: `Their animal forms, however, differ from that of regular animals. Aswangs will have "long, proboscis-like tongues,...walking with their feed backward...being so thin that they can hide behind bamboo posts" (mythology). They also have bloodshot eyes, as a result of hunting all night (mythology).`,
                    img: {
                        src: "https://mythologyvault.com/wp-content/uploads/2024/01/terrifying_transformations_of_aswang.jpg"
                    }
                },
                {
                    heading: "",
                    description: "",
                    img: {
                        src: "https://allthatsinteresting.com/wordpress/wp-content/uploads/2022/10/aswang.jpg"
                    }
                }
            ],
            abilitiesDescription: [
                {
                    heading: "Shapeshifting",
                    description: `The Aswang is able to take the form of a human as well as the forms of different animals, such as cats, dogs, pigs, birds, and bats (aswangproject).`,
                    img: {
                        src: "https://mitosymas.com/content/images/size/w1000/2023/04/David_gar_aswang_a27764f0-f293-44fa-9d21-734b754543cc.png"
                    }
                },
                {
                    heading: "Mimicry",
                    description: `Aswangs have the ability lure their victims using vocal tricks, with each call getting quieter as the predator gets closer and closer to its victim, tricking its victim into thinking the voice is getting further away (mythology).`,
                    img: {
                        src: "https://i.pinimg.com/originals/7c/a4/9c/7ca49c05ac39743128231e028616afad.jpg"
                    }
                },
                {
                   heading: "Bloodsucker",
                   description: `The Aswang uses its proboscis-like tongue to suck the blood of its victims instead of its teeth (Wikipedia).`,
                    img: {
                        src: "https://i.pinimg.com/736x/ae/f0/31/aef031d9b26022da49701d966f90cc0b.jpg"
                    } 
                }
            ],
            weaknessesDescription: [
                {
                    heading: "Albularyos Oil",
                    description: "Albularyos oil is a special oil made from coconuts and holy plants, and can be used to identify an Aswang because it is believed to boil whenever an Aswang is near (mythology).",
                    img: {
                        src: "https://memorycherish.com/wp-content/uploads/v2-jyocs-7cgoi.jpg"
                    }
                },
                {
                    heading: "Decapitation",
                    description: `Severing the head from their body is a traditional way to kill an aswang (mythology).`,
                    img: {
                        src: "https://allthatsinteresting.com/wordpress/wp-content/uploads/2022/10/drawing-of-aswang.jpg"
                    }
                },
                {
                    heading: "Inverted Reflection",
                    description: `As aswang in disguise can be detected by looking into their eyes and seeing your reflection inverted (Wikipedia).`,
                    img: {
                        src: "https://atozdreammeaning.com/wp-content/uploads/2021/10/what-does-it-mean-when-you-dream-about-aswang-768x427.jpg"
                    }
                },
                {
                    heading: "Garlic, Salt, Stingray, and Religious Objects",
                    description: `An aswang can be repelled by garlic and religious symbols. They can also be killed if they are "struck with a whip made from a stingray's tail" (mythology).`,
                    img: {
                        src: "https://media.istockphoto.com/id/175602789/photo/stingray-with-tail-detail.jpg?s=612x612&w=0&k=20&c=UlpysgWx_c4Hj_6XSw99aATJPVOQxqzz0fGKqMmF0pc="
                    }
                }
            ],
        },
        culturalSignificance: [
            {
                heading: "Fear of the Unknown",
                description: `The Aswang can be seen as a cultural reflection of the fear of the unknown in the Philippines during this time. It is a fear stemming from the challenges face by rural communities when dealing with unexplainable phenomena, such as unsolved murders and illnesses. Without modern science, myths such as the Aswang filled in the gap of knowledge and was used as an explanation for these misfortunes. The Aswang's ability to shapeshift also represents the unpredictability and dangers of life, which reinforces societal anxieties, especially during the time of Spanish colonization, when its indigenous culture was being challenged by foreign entities.`
            },
            
        ],
        sources: {
            ["aswangproject"]: "https://www.aswangproject.com/what-is-an-aswang/",
            ["Wikipedia"]: "https://en.wikipedia.org/wiki/Aswang",
            ["mythology"]: "https://mythology.net/monsters/aswang/"
        }
    },
    {
        name: "Nure-onna",
        culturalOrigin: "Japan",
        timePeriod: "16th Century, Edo Period",
        thumbnail: "https://images.saymedia-content.com/.image/t_share/MTc0NjM5ODQ3NjAyOTIzNTEw/east-asian-vampires.jpg",
        description: {
            originDescription: [
                {
                    heading: "Wet Woman",
                    description: `The Nure-onna, in japanese, translates to "wet woman." She is a creature with the body of a snake and appears often near bodies of water, luring unsuspecting travelers. In many legends, she is a powerful monstrous being that is able to crush trees with her snake-like tail and feeds on humans (Wikipedia). She carries with her a small, childlike bundle that mimics a baby, which she uses to lure potential victims. A kind person falls into the trap as the bundle becomes heavy, preventing the victim from fleeing, after which shows her true form and she sucks all the blood from her victim's body with her long snake-like tongue (Wikipedia). Some stories also say that she simply eats her victims whole (mythicalencyclopedia).`
                },
                {
                    heading: "Mysterious Origins",
                    description: [
                        `The origins of the Nure-onna are as elusive as her enigmatic nature. Some stories suggest she was a mortal woman who was cursed due to some tragic fate, while others say she is a manifestation of nature itself, born from water and earth, and "entwined in an eternal dance of creation and destruction" (godsandmonsters).`,
                        `Nonetheless, the Nure-onna has been a very popular figure in Japanese folklore throughout the centuries and in parts of Japan, she is "believed to be a symbol of fertility and prosperity" (mythicalencyclopedia).`,
                    ]
                },
                {
                    heading: "Complexity of the Nure-onna",
                    description: `Depsite her predatory and deceptive nature, some legends also describe the Nure-onna as having a capacity for mercy, particularly when she perceives that her child is treated with care and compassion by her victims (godsandmonsters).`
                }
            ],
            appearanceDescription: [
                {
                    heading: "Half Woman, Half Snake",
                    description: `The Nure-onna appears as a terrifying giant snake, with her upper half resembling the head of a normal woman with long, flowing hair, and her lower half resembling a serpent tail. She is described being near rivers, lakes or seashores, often in a wet state, which aligns with the meaning of her name (worldhistory).`,
                    img: {
                        src: "https://vignette.wikia.nocookie.net/mythology/images/e/ec/Nure_onna.jpg/revision/latest?cb=20180814183929"
                    }
                }
            ],
            abilitiesDescription: [
                {
                    heading: "Shapeshifting",
                    description: `The Nure-onna is able to take on the form of an ordinary human woman to deceive and lure in her victims, transforming into her monstrous serpent-like form when they fall into her trap.`,
                    img: {
                        src: "https://th.bing.com/th/id/OIP.wluUJp7Z32ydGQS8u2CaVgHaKV?rs=1&pid=ImgDetMain"
                    }
                },
                {
                    heading: "Hypnotic Gaze",
                    description: `The Nure-Onna also possesses some form of hypnotic power, helping her to lure her victims close (mythicalencyclopedia), which works with her deceptive appearance of a beautiful woman in need of help.`,
                    img: {
                        src: "https://img00.deviantart.net/e8b8/i/2018/118/2/1/chapter_xix___iso_onna_by_hallowie29-dca260n.jpg"
                    }
                },
                {
                    heading: "Deadly Tongue",
                    description: `The Nure-onna uses her tongue to suck the blood of her victims.`,
                    img: {
                        src: "https://historyofjapan.co.uk/wp-content/uploads/2019/05/Sushi-Nureonna-300x297.jpg"
                    }
                },
                {
                    heading: "Affinity for Water",
                    description: `Like her name, the Nure-onna is closely linked to water, and in some legends, also has the ability to control water and storms to drown her victims (mythicalencyclopedia).`,
                    img: {
                        src: "https://th.bing.com/th/id/R.e4ab062c51c9c47bb193537d4a052b82?rik=muHC2UXtjFBmAA&riu=http%3a%2f%2fmatthewmeyer.net%2fwordpress%2fwp-content%2fuploads%2f2010%2f10%2fNure-onna.png&ehk=VZ7t%2f66wTSsDyYxGJhz37p8%2f7WLz5%2fqqsEdxnQ7L0q8%3d&risl=&pid=ImgRaw&r=0"
                    }
                }
            ],
            weaknessesDescription: [
                {
                    heading: "Sound of Bells",
                    description: `Some stories say that the Nure-onna is repelled by the sound of bells, which keeps her at bay (mythicalencyclopedia).`,
                    img: {
                        src: "https://th.bing.com/th/id/OIP.En2lcefDMqzyUSvOQDtfzAHaE7?rs=1&pid=ImgDetMain"
                    }
                },
                {
                    heading: "Omamori (お守り)",
                    description: `The omamori is a japanese amulet traditionally given for good luck and protection, which can be purchasesd as shrines and temples throughout Japan. It is said that the omamori will help protect you against the attacks from the Nure-onna (mythicalencyclopedia).`,
                    img: {
                        src: "https://th.bing.com/th/id/R.27385a8af091f7e3bb24806ec024b255?rik=V5NvNw%2bw%2fS95kg&pid=ImgRaw&r=0"
                    }
                },
            ]
        },
        culturalSignificance: [
            {
                heading: `Warning About Deception`,
                description: `The Nure-onna's way of deceiving her victims in order to lure them into her trap serves as an important reminder, a warning that one should not always trust appearances and judge superficially. Vigilance is important`
            },
            {
                heading: `Interplay of Forces`,
                description: `The Nure-onna's deceptive nature and her capacity for mercy brings to light an interesting dynamic between the horrifying monster and alluring beauty. She symbolizes the fine line between the natural and supernatural world, highlighting our limited understanding of the world. This lack of knowledge and awareness is reflected by the Nure-onna's ability to shapeshift and trick people with her seemingly innocent charms, reminding us of the dangers of the unknown; the dangers of being too trusting or too curious. Her story is a reminder to approach the unfamiliar with both respect and caution.`
            }
        ],
        sources: {
            ["worldhistory"]: "https://worldhistoryedu.com/nure-onna/",
            ["Wikipedia"]: "https://en.wikipedia.org/wiki/Nure-onna",
            ["mythicalencyclopedia"]: "https://mythicalencyclopedia.com/nure-onna/",
            ["godsandmonsters"]: "https://godsandmonsters.info/nure-onna/"
        }
    },
    {
        name: "Jiangshi",
        culturalOrigin: "China",
        timePeriod: "17th Century",
        thumbnail: "https://assetstorev1-prd-cdn.unity3d.com/package-screenshot/d7659dce-2332-473c-869b-602f7fe89d67_scaled.jpg",
        description: {
            originDescription: [
                {
                    heading: "A Cautionary Tale",
                    description: [
                        `The Jiangshi ("stiff corpse") can be traced back to Ancient China, between 206 BC - 220 AD, with mentions of reanimated corposes hinting at the start of the concept of the Jiangshi (chinesemythology). During the Qing dynasty, the stories of the Jiangshi became more developed and well established; they were used as a cautionary tale against neglecting ancestral rites and emphasizing the importance of proper burial rites (chinesemythology).`
                    ]
                },
                {
                    heading: "Jiangshi and Symbolism",
                    description: `The Jiangshi are usually associated with death and the afterlife, and they "are said to be created when a person dies under unusual circumstances, such as suicide or murder" (mythicalencyclopedia).`
                },
                {
                    heading: "Contemporary Interpretations",
                    description: "In modern Chinese culture, the Jiangshi is often depicted in a comedic and lighthearted manner in entertainment, such as movies, TV shows, and video games (mythicalencyclopedia). "
                },
                {
                    heading: "Becoming a Jiangshi",
                    description: [
                        `The Jiangshi can be categorized into two groups: a deceased returning to life, or a corpse that has been buried but hasn't decomposed (chinaunderground).`,
                        `There are multiple ways a person can turn into a Jiangshi: being injured and infected by a Jiangshi, dying a violent death, suicide, being buried alive, not being buried after the funeral, in which the corpse comes to life after being struct by lightning or when a pregnant cat leaps across the coffin (Wikipedia).`,
                        `A corpse can also turn into a Jiangshi if it had consumed too much yang qi (positive energy) or yin qi (negative energy) during its lifetime (chinaunderground).`,
                    ]
                },
                {
                    heading: "Life as a Jiangshi",
                    description: [
                        `During the day, the Jiangshi rests in its coffin or hides in dark places, and then wanders at night to find its next victim (Wikipedia). The Jiangshi must consume qi, or life force, from the living in order to sustain itself and survive. Without it, it will eventually decay or become dormant (chinesemythology).`
                    ]
                }
            ],
            appearanceDescription: [
                {
                    heading: "Corpse",
                    description: `The Jiangshi is usually depicted as a corpse wearing ancient Chinese clothing, with pale skin that is often describe as greenish or gray, sunken eyes, and messy hair (chinesesmythology). They also bear red eyes with sharp claws (chinaunderground).`,
                    img: {
                        src: "https://cdnb.artstation.com/p/assets/images/images/058/157/449/large/matheus-calza-05-44-hopping-vampire-02.jpg?1673517020"
                    }
                },
                {
                    heading: "",
                    description: "The Jiangshi is typically portrayed wearing official Chinese robes from the Qing dynasty.",
                    img: {
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Qing_Dynasty_Mandarin.jpg/330px-Qing_Dynasty_Mandarin.jpg",
                    }
                },
                {
                    heading: "The Hopping Vampire",
                    description: `The Jiangshi is also described to have a "stiff, rigor mortis-ridden body", causing it to move by hopping or leaping forward rather than walking (chinesemythology), giving it the nickname the "the Hopping Vampire". They are also often depicted with their arms stretched out in from of them as they hop around (mythicalencyclopedia).`,
                    img: {
                        src: "https://vignette.wikia.nocookie.net/mythology/images/e/e8/Jiangshi.jpg/revision/latest?cb=20180816202151"
                    }
                }
            ],
            abilitiesDescription: [
                {
                    heading: "Life Drain",
                    description: `They drain the life force from their living victims, which are usually the young and healthy individuals (chinesemythology).`,
                    img: {
                        src: "https://lovethynerd.com/wp-content/uploads/2020/08/jiangshi-hopping-vampire-768x994.png"
                    }
                },
                {
                    heading: "Aggressive Creature",
                    description: `The Jiangshi is often described as being very vicious and ravenous beings, "ripping the heads and limbs from their victims" (mythicalencyclopedia).`,
                    img: {
                        src: "https://preview.redd.it/d4qq8dy930681.jpg?width=640&crop=smart&auto=webp&s=54a46a2caee7053ca0f5022b95fef91b094888d6"
                    }
                }
            ],
            weaknessesDescription: [
                {
                    heading: "Mirrors",
                    description: "Jianshi are said to be terried by their own reflections (Wikipedia). It is believed that hanging a mirror in front of one's door can prevent them from entering one's house (mythicalencyclopedia).",
                    img: {
                        src: "https://cdn.pixabay.com/photo/2017/02/19/18/24/vampire-2080531__340.jpg"
                    }
                },
                {
                    heading: "Taoism",
                    description: `In Jiangshi lore, Taoist preists can perform rituals to exorcise or calm the spirit (chinesemythology). Special talismans inscribed with spells are also believed to protect people from the Jiangshi (chinesemythology). Writing a Taoist spell on a yellow piece of paper and sticking it to the Jiangshi's forehead can also immobilize it (mythicalenyclopedia); this is talisman is called "Fulu."`,
                    img: {
                        src: "https://cdnb.artstation.com/p/assets/images/images/030/088/365/large/thouchapon-singhavejsakul-jiangshi.jpg?1599576107"
                    }
                },
                {
                    heading: "Sticky Rice",
                    description: `Throwing sticky rice at the Jiangshi can draw the evil out, banishing the hopping vampire (Wikipedia).`,
                    img: {
                        src: "https://th.bing.com/th/id/OIP.1IoRH2BOy3fho4iv7JjXRgHaE-?rs=1&pid=ImgDetMain"
                    }
                },
                {
                    heading: "Distraction with Coins",
                    description: `Dropping a bag of coins in front of the Jiangshi can force them into counting the coins (Wikipedia).`,
                    img: {
                        src: "https://imgix-prod.ebth.com/2023/12/22/13/06/08/18f7ed7c-7432-437a-be2c-eff378b0cf81/1703268303161-16979a2e290dbc29934ea8a828faae546c94eb5cef19cac0c95c6a1ebc57e366.JPG?ixlib=rb-3.1.0&w=880&h=880&fit=max&crop=&auto=format"
                    }
                }
            ],
        },
        culturalSignificance: [
            {
                heading: "Improper Death",
                description: `The myth of the Jiangshi is another story that once agains stresses the importance of proper burials and unresolved spiritual matters. Improper rituals and mispractices disturbs or corrupts the soul, leading to the transformation of the deceased into a jiangshi. The Jiangshi serves as another reminder for respect toward ancestral traditions and the spiritual world.`
            },
            {
                heading: "Balance",
                description: `A corpse arising as a jiangshi from an excessive amount of qi also reflects the meaning of yin and yang, highlighting the importance of maintaining balance in both life and death.`
            }
        ],
        sources: {
            ["chinesemythology"]: "https://chinese.mythologyworldwide.com/the-legendary-jiangshi-the-chinese-hopping-vampire/",
            ["chinaunderground"]: "https://china-underground.com/2016/04/09/demons-monsters-ghosts-of-the-chinese-folklore/",
            ["Wikipedia"]: "https://en.wikipedia.org/wiki/Jiangshi",
            ["mythicalencyclopedia"]: "https://mythicalencyclopedia.com/jiangshi/"
        }
    },
    {
        name: "Asanbosam",
        culturalOrigin: "West Africa",
        timePeriod: "late 19th Century",
        thumbnail: "https://www.ronelthemythmaker.com/wp-content/uploads/2023/03/d5k4zp0-2d4a0019-2893-48dd-802c-c29e5002a0f4.jpg",
        description: {
            originDescription: [
                {
                    heading: "Ashanti Culture",
                    description: `The Asanbosam is a vampire-like being originating from the Akan people, which are a Kwa group living mostly in present-day Ghana and in parts of Ivory Coast and Togo in West Africa (Wikipedia). More specifically, the Asanbosam is closely associated to a subgroup of the Akan ethnic group, called the Ashanti.`
                },
                {
                    heading: "Tree Dweller",
                    description: `The Asanbosam resides in dense forests, waiting silently from atop the trees to pounce on the next victim that wanders into its territory (vampires.com). It's best to avoid the trees if you can because they are always waiting for their next meal.`
                },
                {
                    heading: "Unknown Origins",
                    description: `While there are no definitive stories behind the origins of the Asanbosam, they are often considered to be "the results of a curse or malevolent magic" (godsandmonsters).`
                }
            ],
            appearanceDescription: [
                {
                    heading: "Grotesque Form",
                    description: `The Asanbosam has a disturbing humanoid-like form with elongated limbs (mythlok). It is said to have "iron teeth, pink skin, long red hair and iron hooks for feet and lives in trees, attacking from above" (Wikipedia). But in other depictions, the creature can also have fur or scales, instead of hairless, pale, pink skin (mythlok).`,
                    img: {
                        src: "https://th.bing.com/th/id/R.163863ed04e7fd3df3a72d48eb01b21a?rik=5u182lYh7lwxSQ&riu=http%3a%2f%2f4.bp.blogspot.com%2f-7oJk8yUWMcE%2fWx2tJiIKJ2I%2fAAAAAAAAPnc%2fDf_cpmwQw3UQ8SjS-Y5fYWz0j_95kAykACK4BGAYYCw%2fs1600%2fa8bdb567e7160b491aa03b26f7acbf1c.jpg&ehk=4%2bPIBC7AuR1W0zzLIKU9fYGVMy%2fye9AYDdoc1GKHtQw%3d&risl=&pid=ImgRaw&r=0"
                    }
                },
                {
                    heading: "",
                    description: `The Asanbosam stands at about 5ft tall, and with its disproportionate limbs, gives off a horrifying appearance. With its long limbs, the creature is easily able to catching their prey from up the trees.`,
                    img: {
                        src: "https://th.bing.com/th/id/R.dcefb64c5f55017b9ffd55d593785739?rik=BO9VtpbDlYuPrQ&riu=http%3a%2f%2fwww.bestiary.us%2ffiles%2fimages%2f29103231_1491969154258369_7076306460971368448_o.jpg&ehk=LvpLzB8%2btG9w3LgvWhBo%2by4JYAlsSVna%2fqhhuU0fNL0%3d&risl=&pid=ImgRaw&r=0"
                    }
                },
            ],
            abilitiesDescription: [
                {
                    heading: "Enhanced Physicality",
                    description: `The Asanbosam can easily overpower their prey with its superhuman strength and is a very elusive and agile creature, escaping capture. Additionally, it has heightened senses, allowing it to detect the tiniest disturbances within its domain (mythlok).`,
                    img: {
                        src: "https://th.bing.com/th/id/OIP.Dht0IjlpUUeN292c83GsXQHaLY?rs=1&pid=ImgDetMain"
                    }
                },
                {
                    heading: "Long Limbs",
                    description: `With its enormously long limbs, the Asanbosam is able to snatch their victims from the ground and up into the trees, sucking their blood and ripping their throats with its iron teeth and finishing them off with their sharp claws`,
                    img: {
                        src: "https://th.bing.com/th/id/OIP.o4JauxyYIrhBt7stW59SyQHaFj?rs=1&pid=ImgDetMain"
                    }
                },
            ],
            weaknessesDescription: [
                {
                    heading: "Sunlight",
                    description: `Direct sunlight is said to weaken the Asanbosam, and maybe even kill them (godsandmonsters).`,
                    img: {
                        src: "https://wallpaperbat.com/img/420298-jungle-sunset-wallpaper-nautre-jungle-sunset-wallpaper.jpg"
                    }
                },
                {
                    heading: "Avoiding Certain Trees",
                    description: `Local folklore describes clever individuals who have identified and avoided particular types of trees where the Asanbosam resides in, allowing them to avoid a certain deadly fate (godsandmonsters).`,
                    img: {
                        src: "https://2e.aonprd.com/Images/Monsters/Asanbosam.png"
                    }
                }
            ]
        },
        culturalSignificance: [
            {
                heading: "Careful Where You Step",
                description: "The Asanbosam patiently waits atop a tree, lurking silently, ready to snatch the next prey that trespasses its territory. This nature of the creature embodies the dangers of wandering into the deep unknown, and emphasizes the need to respect boundaries. Ultimately, the story of the Asanbosam serves as another cautionary tale, warning against straying too far from the known world. When someone warns you not to wander into the dangerous place, it might be wise to listen."
            }
        ],
        sources: {
            ["Wikipedia"]: "https://en.wikipedia.org/wiki/Sasabonsam",
            ["mythlok"]: "https://mythlok.com/sasabonsam/",
            ["vampires.com"]: "https://www.vampires.com/asanbosam-and-sasabonsam/",
            ["godsandmonsters"]: "https://godsandmonsters.info/asanbosam/"
        }
    },
    {
        name: "Chupacabra",
        culturalOrigin: "Puerto Rico and Latin America",
        timePeriod: "1990s",
        thumbnail: "https://assets.bigcartel.com/product_images/331830135/VAMPIRE+BEAST+02.jpg?auto=format&fit=max&w=1500",
        description: {
            originDescription: [
                {
                    heading: "Livestock Killer",
                    description: [
                        `The legend of the Chupacabra first arose in the mid 1990s in Puerto Rico, after a series of mysterious livestock killings (mythologyworldwide). In fact, "chupacabra" is translated literally to "goat-sucker" in Spanish (Wikipedia).`,
                        `The first reported incident occured in March 1995 in Puerto Rico, when eight sheep were discovered dead with "three puncture wounds in the chest area and reportedly completely drained of blood" (Wikipedia).`,
                        `In another case a few months later, in August, an eyewitness named Madelyne Tolentino claimed to have seen the creature in the town of Canóvanas, "where as many as 150 farm animals and pets were reportedly killed" (Wikipedia).`,
                        `Later, more reports of dead livestock occurred throughout the island, and then in other Latin American countries such as Argentina, Brazil, Colombia, and El Salvador, to name a few (Wikipedia). It is believed that its origins "are influenced by a combination of historical events, including ecological changes, agricultural stress, and the socio-political climate of the time" (mythologyworldwide).`
                    ]
                },
                {
                    heading: "Bloodsucking Beast",
                    description: `The Chupacabra is often described as a blood-sucking beast and has been connected with fear and the unknown, especially throughout Latin American rural communities (mythologyworldwide).`
                },
                {
                    heading: "Lack of Plausability",
                    description: `Because of the varying descriptions of the creature, the chupacabra's existence is often questioned, making it hard to believe if all the sightings are of the same creature (Wikipedia). One possible explanation is a distorted or confused human perception from witnesses, which could be the brain's way of making sense of things. Some scientists think the chupacabra could actually just be "a wild or domestic dog affected by mange" (Wikipedia).`
                }
            ],
            appearanceDescription: [
                {
                    heading: "Dog-like or Humanoid",
                    description: `Common characteristics generally describe it as a "small, reptilian creature, often with spikes or quils along its back, glowing red eyes, and a pronounced snout" (mythologyworldwide). But, the Chupacabra can have varying appearances depending on the stories. 
                    Some "depict it as a dog-like creature, resembling a coyote with mange" (mythologyworldwide).`,
                    img: {
                        src: "https://3.bp.blogspot.com/-dC05slh45F0/VU1XhS7vkSI/AAAAAAABpME/SjGPWiszLkg/s1600/chupacabra21.jpg"
                    }
                },
                {
                    heading: "",
                    description: "",
                    img: {
                        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/African_wild_dog_with_mange_-_Serengeti_%285468632138%29.jpg/1280px-African_wild_dog_with_mange_-_Serengeti_%285468632138%29.jpg"
                    }
                },
                {
                    heading: "",
                    description: `Others say it is a "more humanoid figure, standing upright with claws and fangs" (mythologyworldwide). It can be around 3 to 4 feet tall (Wikipedia).`,
                    img: {
                        src: "https://i.pinimg.com/originals/6a/f2/2e/6af22e2ee20cfd82a3c7829f9a0864ed.jpg"
                    }
                },
                {
                    heading: "",
                    description: "",
                    img: {
                        src: "https://cdnb.artstation.com/p/assets/images/images/011/959/633/large/ramon-benitez-chupacrabra-redsigned.jpg?1532321460"
                    }
                }
            ],
            abilitiesDescription: [
                {
                    heading: "Penchant for Animal Blood",
                    description: `The Chupacabra is known for draining all the blood of livestock, particularly goats and chickens, leaving behind small puncture wounds on its victims (mythicalcreatures).`,
                    img: {
                        src: "https://s.hdnux.com/photos/07/01/46/1841541/7/1200x0.jpg"
                    }
                }
            ],
            weaknessesDescription: [
                {
                    heading: "Sunlight",
                    description: `The Chupacabra is said to be sensitive to sunlight, and even weakened or harmed if exposed for too long (godsandmonsters).`,
                    img: {
                        src: "https://2.bp.blogspot.com/-irwAoC0U9l0/VU01LCWm5pI/AAAAAAABpKc/vLjM4QAlkMM/s1600/Chupacabra_by_kodriak.jpg"
                    }
                },
                {
                    heading: "Discoverability",
                    description: `The Chupacabra is drawn to livestock and other animals, making it easy for people to setup traps to confront or capture the creature`,
                    img: {
                        src: "https://i.natgeofe.com/n/7dc8c935-d7be-4af4-a9a6-c2970202428d/27973_3x2.jpg"
                    }
                }
            ]
        },
        culturalSignificance: [
            {
                heading: "Rural Anxieties",
                description: `The rise of the Chupacabra is linked to various killings of livestock, which is a significant part of agriculture. Rural communities rely on livestock for sustenance and income and when their resources began to be destroyed, many feared of losing their means of survival. The Chupacabra became the scapegoat, the reason for the unexplained livestock deaths. The Chupacabra became a symbol of the struggles of rural communities, serving as a reflection of how communities cope with fear and uncertainty. `
            }
        ],
        sources: {
            ["mythologyworldwide"]: "https://mythologyworldwide.com/the-chupacabra-in-folklore-a-symbol-of-fear-and-the-unknown/",
            ["Wikipdia"]: "https://en.wikipedia.org/wiki/Chupacabra",
            ["mythicalcreatures"]: "https://mythicalcreatures.info/characters/el-chupacabras/",
            ["godsandmonsters"]: "https://godsandmonsters.info/chupacabra/"
        }
    },
    {
        name: "Count Dracula",
        culturalOrigin: "US",
        timePeriod: "2004",
        thumbnail: "https://th.bing.com/th/id/R.ad24f6c1050bd801ee3675e6a7a5b1a5?rik=%2f04xcu8n8ocx4g&pid=ImgRaw&r=0",
        description: {
            originDescription: [
                {
                    heading: "Count Dracula",
                    description: [
                        `Count Dracula is a character in the 2004 film, "Van Helsing", where he is the main antagonist and fights against Van Helsing, a vampire hunter.`,
                        `In 1462, Count Vladislaus Dragulia, or Count Dracula, was killed by the left hand of God, the archangel Gabriel. After being killed, Dracula made a deal with the devil: gaining powers and eternal life in exchange for feeding on the blood of the living (vanhelsingmovie).`,
                        `After returning from Hell, Dracula's father was horrified by what his son had become, but could not go through with killing him. So instead, he banished him to an icy fortress from which he could not escape (vanhelsingmovie). Unfortunately, the devil then granted him wings, allowing him to escape and fly the skies.`,
                        `Dracula's father promised God that his family would never rest nor enter heaven until they had vanquished Dracula from the world (vanhelsingmovie). He left instructions for future generations on where to find him and how to kill him (Van Helsing Movie Explained, 3:58).`
                    ]
                },
                {
                    heading: "Dracula's Brides",
                    description: `Dracula has three loyal vampiric consorts. They possess an ethereal, youthful beauty that lures men but have a predatory and sexual nature, making them dangeorus beasts. These three brides are named Verona, Aleera, and Marishka. Each bride has their own distinct traits and are also required to drink the blood of the living to maintain their youth and immortality.`
                },
                {
                    heading: "Undead Life",
                    description: "Throughout the film, Dracula's goal has been to create more of himself, children that were just like him. But he could not because he was undead. So, Dracula planned on using the work of Dr. Frankenstein and his monster to give life to his vampire children, but not before Frankenstein's monster went into hiding."
                },
                {
                    heading: "Van Helsing",
                    description: `It's revealed in the movie that Van Helsing is in fact the archangel Gabriel that killed Dracula in 1462, and ever since losing his memories, Van Helsing has been slaying monsters and evil creatures in the name of God. In 1888, Dracula detects the presence of Van Helsing after his bride, Marishka, had just been killed (vanhelsingmovie).`
                },
                {
                    heading: "Werewolf Curse",
                    description: [
                        `Van Helsing, along with his lover, Anna, and his partner, Carl, discover Frankenstein and team up. In an effort to try and keep Frankenstein's monster away from Dracula, they manage to kill another one of Dracula's bride, Verona. However, Van Helsing gets bitten by one of Dracula's enslaved werewolves. Eventually Van Helsing's lover gets taken by Dracula's bride, Aleera, in exchange for Frankenstein's monster. Van Helsing also begins to experience the effects of the werewolf curse.`,
                        `Soon after, Van Helsing and Carl save Anna. Later, they discover that Dracula has a cure for the werewolf curse at his lair, the icy fortress that he was imprisoned in, which Van Helsing must take before the next apex of the full moon, lest he becomes a fully transformed werewolf forever. At the same time, they also learn that only a werewolf willful and strong enough can kill Dracula.`
                    ]
                },
                {
                    heading: "Werewolf Cure",
                    description: [
                        "In a final battle, Van Helsing shifts between human and werewolf form as he fights against Dracula, while Anna and Carl retrieve the cure, but not before facing Aleera. As Dracula and Van Helsing fight, Dracula is trying to remind him of his past and invite Van Helsing to join him. Van Helsing remains strong, and in his werewolf form, manages to defeat and kill Dracula, a death which kills of his vampire children as well.",
                        `Eventually, Anna is able to kill Aleera, and with Carl, they make their way to deliver the cure to Van Helsing. Right after Dracula has died, Anna and Carl arrive just in the nick of time to deliver the cure.`
                    ]
                }
            ],
            appearanceDescription: [
                {
                    heading: "Human Appearance",
                    description: "When not in his vampire form, Dracula appears as a regular human man, with long black hair, tied in the back, and a few strands of hair over his face.",
                    img: {
                        src: "https://i.pinimg.com/originals/5d/e6/af/5de6af8053b80b508d2f290c68d76246.jpg"
                    }
                },
                {
                    heading: "Bat-like Demon",
                    description: "But, when he shapeshifts into his demonic vampire form, he transforms into a devilish bat-like creature with wings. He completely transform in this demonic creature with sharp teeth, pointed ears, with a horrifying face altogether.",
                    img: {
                        src: "https://th.bing.com/th/id/R.01afd2a27abfdb7ce0c0e646eb9854a3?rik=nY5xykVHwl2n2Q&riu=http%3a%2f%2fvignette3.wikia.nocookie.net%2fantagonists%2fimages%2f8%2f87%2fVampir-drakula-van-helsing.jpg%2frevision%2flatest%3fcb%3d20150225023902&ehk=jwH%2fzNQGZVn4z5FQwCnjZVGe5cdJxQl8KzFnM8lMTFE%3d&risl=&pid=ImgRaw&r=0"
                    }
                },
                {
                    heading: "",
                    description: "",
                    img: {
                        src: "https://i.pinimg.com/originals/4c/c9/fc/4cc9fc1422647e4e2cbecb11b7fdb55d.jpg"
                    }
                },
            ],
            abilitiesDescription: [
                {
                    heading: "Immortality",
                    description: "According to the deal made with the Devil, Dracula is able to live forever but must feast on human blood to maintain his immortality (vanhelsingmovie)."
                },
                {
                    heading: "Flight",
                    description: "With his bat-like wings, Dracula can fly across the skies (vanhelsingmovie)."
                },
                {
                    heading: "Shapeshifting",
                    description: "Dracula is able to shapeshift into his demonic vampire form (vanhelsingmovie).",
                    img: {
                        src: "https://gyazo.com/876321a7fdea9ba450911592d5a2556f.gif",
                        caption: "Dracula shapeshifting into his demonic vampire form"
                    }
                },
                {
                    heading: "Enhanced Physicality, Healing, and Senses",
                    description: "Dracula possesses superhuman strength and stamina. He also has heightened senses, allowing him to see and detect heatbeats, and can also heal quickly from injuries (vanhelsingmovie)."
                },
                {
                    heading: "Resistance Against Holy Symbols",
                    description: "Dracula is able to withstand the effects of holy objects, enduring some pain but coming out unscatched in the end.",
                    img: {
                        src: "https://gyazo.com/de56f6b3a5abdd511e0770cffcf12640.gif",
                        caption: "Dracula resisting a crucifix, and melting it."
                    }
                }
            ],
            weaknessesDescription: [
                {
                    heading: "Werewolf",
                    description: "A werewolf is the only thing that can kill Dracula. The claws of a werewolf is able to slow or weaken Dracula's healing factor, whereas the venomous bite of a werewolf is able to kill him.",
                    img: {
                        src: "https://gyazo.com/a9ede37d66332576f16b94f65d4cb658.gif",
                        caption: "Dracula slowly dying from the venom of a werewolf bite"
                    }
                }
            ]
        },
        culturalSignificance: [
            {
                heading: "Modern Adaptation",
                description: "The Van Helsing film shifts away from Bram Stoker's intellectual story of Van Helsing, presenting him as a monster-hunting action hero, contrasted with Count Dracula, who still retains that demonic characteristics of Bram Stoker's Dracula. This film is an example of filmaking being evolved and influenced by modern trends, reflecting the way traditional stories evolve to fit the values and preferences of the current time."
            },
            {
                heading: "Good vs Evil",
                description: "The fight betwen Van Helsing and Dracula is classic good vs evil story, a concept that mirrors real-world stories and myths that have been passed down through generations, each teaching their own lessons about morality and societal values through the use of heroes and monsters."
            }
        ],
        sources: {
            ["vanhelsingmovie"]: "https://vanhelsingmovie.fandom.com/wiki/Count_Dracula",
            ["Van Helsing Movie Explained"]: "https://www.youtube.com/watch?v=eYlNqyqS9Ok"
        }
    },
    {
        name: "The Originals",
        culturalOrigin: "US",
        timePeriod: timePeriodToString([2011, 2018]),
        thumbnail: "https://th.bing.com/th/id/R.289e30c332449a03a80d434afc7e51dc?rik=YGGMAcDno%2fRGDg&riu=http%3a%2f%2fvignette3.wikia.nocookie.net%2fthe-originels%2fimages%2f2%2f2b%2fTvd0302-0294.jpg%2frevision%2flatest%3fcb%3d20130529160429%26path-prefix%3dfr&ehk=%2bdBSVxpqNLM6Nd2ozLJEJV0wP4Ba2L0r%2f4TS%2fSoClFE%3d&risl=&pid=ImgRaw&r=0",
        description: {
            originDescription: [
                {
                    heading: "TV Entertainment",
                    description: `The story of the Originals originates from the popular TV CW show called "The Vampire Diaries" (TVD). TVD was originally based on The Vampire Diaries novels written by L. J. Smith, but later diverged from the books and developed into its own unique story. The story of the Originals is further explored in a spinoff of TVD, called "The Originals" (TO).`
                },
                {
                    heading: "Creation of the Originals",
                    description: [
                        `Over a thousand years ago, during the Viking era, the Mikaelson family—Mikael, Esther, Finn, Elijah, Klaus, Kol, Rebekah, and their youngest son, Henrik—lived in a time of danger and strife. One fateful full moon, tragedy struck when Henrik was killed by a werewolf. Devastated by the loss and fearing for the lives of her remaining children, Esther, a powerful witch and the mother of the family, crafted a version of an immortality spell to grant her children and husband immortality, hoping to make them strong enough to survive the perils of the world (vampirediaries).`,
                        `However, the spell’s power had unforeseen consequences. Instead of protecting her loved ones, it turned them into bloodthirsty, uncontrollable monsters—immortal beings who burned in the sunlight but could not die from fire. They were unable to enter homes without an invitation and they could only be killed by the rare and sacred White Oak tree, which was used in the spell to give them life (vampirediaries).`
                    ]
                },
                {
                    heading: "A Cursed Life",
                    description: `Many tragic events later, with Esther dead, the Mikaelson family lived on the run from their father for centuries, as he hated the nature of vampires, but hated his non-biological son, Klaus, even more; a son who had werewolf blood and it was werewolves that killed Henrik, his beloved son. The Mikaelson family traveled all across the world, making enemies whereever they go and building notoriety. They killed innocent people, destroyed villages and cities, and schemed for power, but also tried to find love, just to have it be taken by family.`
                },
                {
                    heading: "Bloodline",
                    description: `During the beginning of their cursed life, they also discovered that each of them could create beings just like them—vampires, but weaker versions of themselves—forming their own bloodline. Soon, they were all over the world.`
                },
                {
                    heading: "Redemption",
                    description: `Lifetimes later, during the 21st Century, strange events occurred that brought a new magical child into the Mikaelson family, a daughter of Klaus, named Hope, who had immense power, power that was feared by all in the supernatural community. Hope gave the Mikaelsons a chance of being a family and getting the life they've always wanted. Battles were fought to protect her and along the way, relationships were strengthed and love was found. In the end, the Mikaelson family got a happy ending.`
                }
            ],
            appearanceDescription: [
                {
                    heading: "Ordinary",
                    description: "The Originals look like any regular human being, making them practically impossible to be identified by sight.",
                },
                {
                    heading: "",
                    description: "",
                    img: {
                        src: "https://th.bing.com/th/id/OIP.GfnI-pRxTyWx9FYmDbQFqwHaJu?rs=1&pid=ImgDetMain",
                        caption: "Mikael"
                    }
                },
                {
                    heading: "",
                    description: "",
                    img: {
                        src: "https://i.pinimg.com/736x/0f/81/a1/0f81a1cfc5cf6229770818f5faeb451f--history-season-.jpg",
                        caption: "Finn"
                    }
                },
                {
                    heading: "",
                    description: "",
                    img: {
                        src: "https://tv-fanatic-res.cloudinary.com/iu/s--9WkbIpfZ--/t_full/cs_srgb,f_auto,fl_strip_profile.lossy,q_auto:420/v1493730803/elijah-in-trouble-the-originals-s4e7.png",
                        caption: "Elijah"
                    }
                },
                {
                    heading: "",
                    description: "",
                    img: {
                        src: "https://static.gomovies.tube/img/movies/3j1hCAKj9tCoEiCvWusHx9u1LliUEgP36SjzZ1VEofOwZg8YuXsA15Ikx9CVMPDh2tYOyS_Ul9c5QNpKGCp8RuePSIflpbQ_OJrDSWTFidG69cvPx_JdHky3rUCkG4Uh.jpg",
                        caption: "Klaus"
                    }
                },
                {
                    heading: "",
                    description: "",
                    img: {
                        src: "https://th.bing.com/th/id/OIP.7hNTN-jyh7hAsMhu4RGBUQHaL_?rs=1&pid=ImgDetMain",
                        caption: "Kol"
                    }
                },
                {
                    heading: "",
                    description: "",
                    img: {
                        src: "https://th.bing.com/th/id/R.5c339d0cac29aa1d94db61a06fbb5111?rik=ngSD7%2bOWRtNqew&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fphotos%2f44800000%2fRebekah-Mikaelson-the-originals-44877486-1212-1210.jpg&ehk=ec0IYpbjF1lH0kxtKirVGIgb0P62%2bBFVdyHF0tDjVnI%3d&risl=&pid=ImgRaw&r=0",
                        caption: "Rebekah"
                    }
                },
                {
                    heading: "Vampiric Form",
                    description: "They are also able to take on a more monstrous and demonic look. In this vampiric state, the scelera of their eyes become bloodshot red with black pulsing veins just underneath their eyes, as if blood is rushing into their eyes. Their canines also become longer and sharper, turning into fangs.",
                    img: {
                        src: "https://vignette.wikia.nocookie.net/the-originels/images/4/4e/Vampire.png/revision/latest?cb=20180106081824&path-prefix=fr",
                        caption: "Elijah in his vampiric state"
                    }
                },
                {
                    heading: "",
                    description: "",
                    img: {
                        src: "https://th.bing.com/th/id/R.289e30c332449a03a80d434afc7e51dc?rik=YGGMAcDno%2fRGDg&riu=http%3a%2f%2fvignette3.wikia.nocookie.net%2fthe-originels%2fimages%2f2%2f2b%2fTvd0302-0294.jpg%2frevision%2flatest%3fcb%3d20130529160429%26path-prefix%3dfr&ehk=%2bdBSVxpqNLM6Nd2ozLJEJV0wP4Ba2L0r%2f4TS%2fSoClFE%3d&risl=&pid=ImgRaw&r=0",
                        caption: "Klaus in his vampiric state"
                    }
                },
                {
                    heading: "",
                    description: "",
                    img: {
                        src: "https://i.pinimg.com/originals/96/1d/f1/961df181905062981774dc1a73d53dcd.png",
                        caption: "Rebekah in her vampiric state"
                    }
                },
                {
                    heading: "",
                    description: "",
                    img: {
                        src: "https://i.pinimg.com/736x/79/f6/34/79f6346e568245cd0a7866441187e4c1.jpg",
                        caption: "Kol in his vampiric state"
                    }
                }
            ],
            abilitiesDescription: [
                {
                    heading: "Enhanced Physicality and Senses",
                    description: "Original Vampires are much stronger, faster, more durable, and more agile than humans, werewolves, and ordinary vampires, and also have heightened senses (vampirediaries)."
                },
                {
                    heading: "Healing Factor",
                    description: "Original Vampires are able to heal insanely quick and recover from any injuries within seconds (vampirediaries)."
                },
                {
                    heading: "Immortality",
                    description: "Original vampires are immortal; they do not age and are immune to all diseases, illnesses, and conditions that may befall an ordinary human (vampirediaries).",
                },
                {
                    heading: "Mind Compulsion",
                    description: `Original vampires are able to manipulate and control the emotions, actions, thoughts, and memories of humans and regular vampires (vampirediaries).`,
                    img: {
                        src: "https://media1.tenor.com/m/4uu9PQuw8i8AAAAC/damon-salvatore-compulsion.gif"
                    }
                },
                {
                    heading: "Telepathy",
                    description: "Original vampires are able to enter the mind of others with physical contact, allowing them to search memories and create illusions in the minds of regular vampires or humans. They are also able to manipulate and modify dreams (vampirediaries)."
                }
            ],
            weaknessesDescription: [
                {
                    heading: "Invitation",
                    description: "An Original cannot enter someone's house unless invited in by the owner of the house (vampirediaries)."
                },
                {
                    heading: "Sunlight",
                    description: "Sunlight will burn an Original and it will hurt, but it won't kill them. To combat this, the Mikaelson family wear magical rings, made specifically from lapis lazuli, that makes them immune to sunlight",
                    img: {
                        src: "https://i.etsystatic.com/14408104/r/il/116386/1669999684/il_794xN.1669999684_8h8b.jpg"
                    }
                },
                {
                    heading: "Vervain",
                    description: "Vervain is a plant that burns vampires on touch and also prevents compulsion when ingested or worn",
                    img: {
                        src: "https://th.bing.com/th/id/OIP.ceyzj_RBPPf7PFC5C6NHIwHaGt?rs=1&pid=ImgDetMain"
                    }
                },
                {
                    heading: "Magic",
                    description: "The Originals are susceptible to magic. A witch with enough power can do serious damage and even kill an Original (vampirediaries).",
                    img: {
                        src: "https://th.bing.com/th/id/R.3292f5a9fc6bdc30cd1f1cdd5cb8001d?rik=WZuuSm%2bW6n5VJg&riu=http%3a%2f%2fvignette1.wikia.nocookie.net%2fvampirediaries%2fimages%2fe%2fe7%2fDesiccation.png%2frevision%2flatest%2fzoom-crop%2fwidth%2f480%2fheight%2f480%3fcb%3d20150425112856&ehk=FCnpJrYZiBMBdh5gYSaUKPo8cXmLeI9uxIu%2bg9hcmrM%3d&risl=&pid=ImgRaw&r=0",
                        caption: "Mikael after being desiccated by a witch"
                    }
                },
                {
                    heading: "Regular Wooden Stake",
                    description: `A regular wooden stake into the heart will desiccate an Original, killing them temporarily. Any ordinary vampire would be dead from this.`,
                    img: {
                        src: "https://static.wixstatic.com/media/f8089d_48abc5cf144259954b277aecb1371480.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
                    }
                },
                {
                    heading: "White Oak Stake",
                    description: `A White Oak was used in the spell that created the Originals, and it can also be used to take their life. A White Oak stake stabbed right into the heart of an Original vampire will ignite their bodies and the magical flames from the White Oak burns them to death (vampirediaries).`,
                    img: {
                        src: "https://th.bing.com/th/id/R.116655921002ee1a9b4e5aa859aa4bbe?rik=wTF1U4h1RjCoLw&riu=http%3a%2f%2fvignette1.wikia.nocookie.net%2fvampirediaries%2fimages%2fd%2fde%2fStake1.png%2frevision%2flatest%3fcb%3d20150327102932&ehk=dQRV8ryU0LiRUdjnu%2fWHGV1XiKqrjiI34Wz1DFJaAF8%3d&risl=&pid=ImgRaw&r=0"
                    }
                },
                {
                    heading: "White Oak Ash Silver Daggers",
                    description: "A silver dagger dipped in the ash of the White Oak tree can neutralie an Original vampire when stabbed through the heart, and will neutralize them for as long as the dagger remains in their heart (vampirediaries).",
                    img: {
                        src: "https://th.bing.com/th/id/R.d54d27bb1a40d6d8578903fef30f03d9?rik=NXWtvUQ4%2bDJNMA&riu=http%3a%2f%2fvignette4.wikia.nocookie.net%2fvampirediaries%2fimages%2fd%2fdb%2fDagger2.png%2frevision%2flatest%3fcb%3d20150327135942&ehk=SeML7MAqApw1dZvv3g0yWh03Rrcx4qgIOV2vDsJj9rU%3d&risl=&pid=ImgRaw&r=0"
                    }
                }
            ]
        },
        culturalSignificance: [
            {
                heading: "The Curse of Immortality",
                description: "The Original Vampires lived for over a millenium, facing great challenges and expericing loss over and over a gain. This way of living is a cursed existence and it highlights the dangers of living forever. Seeing someone close to you, who isn't immortal, die, and having to relive that for each new companion is emotional torture. It serves as a reminder for us to cherish out short human life and to live in the moment."
            },
            {
                heading: "The Importance of Family",
                description: "The story of the Mikaelsons is deeply rooted in the idea of family. Through centuries of conflict, betrayal, and rivalry, it was family that bound the Mikaelsons together, always and forever. Family is what kept them going. In the real world, family is the same. It is one's support and anchor; it makes us who we are. The strained relationship between Mikael and Klaus also shows us the lasting effect of parental mistreatment. The story of the Mikaelson family demonstrates how family can leave deep scars, but can also help us heal and grow as a person. Family is important."
            }
        ],
        sources: {
            ["vampirediaries"]: "https://vampirediaries.fandom.com/wiki/Original_Vampire"
        }   
    }
]