/*
{
  id: "skill1-3-1",
  title: "Fireblast",
  icon: "icons/yellow_14.jpg",
  tooltip: {
    content: "It's okay, I guess",
    direction: "left",
  },
  children: [],
},
*/

const Skills3 = [
  {
    id: "skill3-1-1",
    title: "Knowledge of the Many",
    icon: "icons/book-folder.jpg",
    tooltip: {
      content:
        "Choose either Skillful or Knowledgeable. Skillful - You gain one skill, one tool, and one language profifiency. If you already have proficiency in that skill or tool, you instead gain expertise. Knowledgeable - You gain one extra spell slot of your highest available spell slots. This changes as you level and only grants a single spell slot.",
      direction: "left",
    },
    children: [
      {
        id: "skill3-2-1",
        title: "Sure Skill",
        icon: "icons/skill_3.png",
        tooltip: {
          content:
            "Whenever you roll a skill or tool check, you can pull help from your soulbinds in order to grant a greater chance of success. Roll a 1d6 and add it to the roll. You can use this feature after the roll but before knowing the outcome of the roll. You can use this feature once per short rest.",
          direction: "left",
        },
        children: [
          {
            id: "skill3-3-1",
            title: "Keen Eyes, Steady Hands",
            icon: "icons/skill_4.png",
            tooltip: {
              content:
                "You are exceptionally good at spotting and obtaining useful items during your travels. Whenever you would harvest, gather, or otherwise obtain crafting materials (except from finite sources such as a crate), you instead gain twice the amount.",
              direction: "left",
            },
            children: [
              {
                id: "skill3-4-1",
                title: "Reliable Speed",
                icon: "icons/unique-7.jpg",
                tooltip: {
                  content:
                    "You can apply poisons, oils, and other effects to your sword as part of your attack action, which still only applies a single dose. Furthermore, you can consume a single potion as a free action on your turn, assuming you have a hand free to do so.",
                  direction: "left",
                },
                children: [
                  {
                    id: "skill3-5-1",
                    title: "Who Better Than Me?",
                    icon: "icons/skill_8.png",
                    tooltip: {
                      content:
                        "When a creature you can see makes a check involving an ability score, you can lash out with your soulbind to disrupt their efforts. You can now use your Sure Skill feature to instead subtract from a creature you can see within 60 ft. of you. Using the feature in this manner has it's own pool of dice, and any enhancements to Sure Skill also enhance this skill.",
                      direction: "left",
                    },
                    children: [
                      {
                        id: "skill3-6-1",
                        title: "No One",
                        icon: "icons/skill_38.png",
                        tooltip: {
                          content:
                            "When you use your Sure Skill feature to subtract from a roll, that creature suffers the effects of that roll until the end of their next turn.",
                          direction: "left",
                        },
                        children: [],
                      },
                      {
                        id: "skill3-6-2",
                        title: "Frugal",
                        icon: "icons/major-red.jpg",
                        tooltip: {
                          content:
                            "You are careful not to waste a single drop, crumb, or morsel of anything you consume. Consumables have a 50% chance to not be consumed when you use them. This effect can only happen once per consumable.",
                          direction: "left",
                        },
                        children: [
                          {
                            id: "skill3-7-1",
                            title: "Exceptional Crafting",
                            icon: "icons/cauldron.jpg",
                            tooltip: {
                              content:
                                "You crafting is such that others envy its elegance. Whenever a creature would roll a die in relation to a consumable you have crafted, they instead consider it to be rolled at maximum value. If there are no dice associated with the roll, instead it's duration is increased by one stage. 1min>10min>1hour>1day.",
                              direction: "left",
                            },
                            children: [
                              {
                                id: "skill3-8-1",
                                title: "Master of All, Jack of None",
                                icon: "icons/trophy.jpg",
                                tooltip: {
                                  content:
                                    "You have advantage on any check that uses an ability score.",
                                  direction: "left",
                                },
                                children: [],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: "skill3-3-2",
            title: "Growing Talent",
            icon: "icons/Update_07.png",
            tooltip: {
              content:
                "The die from your Sure Skill feature now grows with your soulbind strength. At level 5 it increases to a d8, and further to a d10 at 11 and a d12 at 17.",
              direction: "left",
            },
            children: [],
          },
        ], // No children, but must be declared as empty array.
      },
      {
        id: "skill3-2-2",
        title: "Deepening Well",
        icon: "icons/Paladinskill_39.png",
        tooltip: {
          content:
            "As an action, you can spend two spells slots of a lower level to replenish a spell slot one level higher. The replenished spell can be of no higher level than 5th.",
          direction: "left",
        },
        children: [
          {
            id: "skill3-3-3",
            title: "Greater Control",
            icon: "icons/Shamanskill_29.png",
            tooltip: {
              content:
                "When you use Deepening Well, there is a 25% chance that only one spell slot is consumed.",
              direction: "left",
            },
            children: [],
          },
          {
            id: "skill3-3-4",
            title: "Shared Knowledge",
            icon: "icons/Warlock_24.png",
            tooltip: {
              content:
                "Your soulblinds help increase your spellcasting capacity, increasing the number of spells you can prepare by an amount equal to your proficiency bonus.",
              direction: "left",
            },
            children: [
              {
                id: "skill3-4-1",
                title: "Soulbound Ritual",
                icon: "icons/Warlock_35.png",
                tooltip: {
                  content:
                    "Any creature you are soulbound with can assist you in casting a ritual spell. Doing so reduces the ritual time by 2min per additional creature.",
                  direction: "left",
                },
                children: [
                  {
                    id: "skill3-5-1",
                    title: "Soulshared Magic",
                    icon: "icons/Mageskill_27.png",
                    tooltip: {
                      content:
                        "Whenever you target a creature with a spell, you can choose a second creature to also be affected by the spell, so long as they are soulbound with the first creature. You can use this feature once per short rest.",
                      direction: "left",
                    },
                    children: [
                      {
                        id: "skill3-6-1",
                        title: "Drained Magic",
                        icon: "icons/Priestskill_02.png",
                        tooltip: {
                          content:
                            "Successfully dispelling or counterspelling a spell instead drains the magic used to cast it, replenishing your lowest level spell slot, up to the level of the spell.",
                          direction: "left",
                        },
                        children: [
                          {
                            id: "skill3-7-1",
                            title: "Borrowed Magic",
                            icon: "icons/Paladinskill_48.png",
                            tooltip: {
                              content:
                                "Any creature you are soulbound with can freely give you spell slots as an action and vice versa.",
                              direction: "left",
                            },
                            children: [
                              {
                                id: "skill3-8-1",
                                title: "Paragon of Magic",
                                icon: "icons/Warlock_36.png",
                                tooltip: {
                                  content:
                                    "You have gained the ability to control your own aether with such precision that you can split higher level spell slots to regenerate lower level spell slots whose sum is equal to or less than the higher level spell. A 9th level spell could regenerate an 8th and a 1st, for example.",
                                  direction: "left",
                                },
                                children: [],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        id: "skill3-6-4",
                        title: "Selfish Casting",
                        icon: "icons/Warlock_28.png",
                        tooltip: {
                          content:
                            "You also gain the benefits of Soulshared Magic, regardless of the two inital targets, but only at half effectiveness or duration.",
                          direction: "left",
                        },
                        children: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "skill3-2-3",
        title: "Eyes of the Rune Keeper",
        icon: "icons/shadow_12.jpg",
        tooltip: {
          content: "You can read all writing.",
          direction: "left",
        },
        children: [
          {
            id: "skill3-3-5",
            title: "Mouth and Ears of the Orator",
            icon: "icons/emerald_06.jpg",
            tooltip: {
              content:
                "You can understand the literal meaning and speak all languages, assuming a creature is capable of speaking intelligibly.",
              direction: "left",
            },
            children: [],
          },
          {
            id: "skill3-3-6",
            title: "Allspeak",
            icon: "icons/light_07.jpg",
            tooltip: {
              content:
                "You are able to channel your soulbind into things other than yourself. You can cast the speak with plants and speak with animals spell once per day each.",
              direction: "left",
            },
            children: [
              {
                id: "skill3-4-3",
                title: "Mind Trap",
                icon: "icons/light_01.jpg",
                tooltip: {
                  content:
                    "You have a knack for remembering things. You have a perfect memory and recall information, numbers, codes, and sequences that you have seen, read, or heard indefinitely.",
                  direction: "left",
                },
                children: [
                  {
                    id: "skill3-5-3",
                    title: "Glib Tongue",
                    icon: "icons/shadow_20.jpg",
                    tooltip: {
                      content:
                        "You can cast the charm monster spell once per short rest requiring no components, targeting a number of creatures equal to your proficiency bonus, but only after speaking with the creature(s) for at least 1 minute. The save DC for this spell is equal to 8 + twice your proficiency bonus.",
                      direction: "left",
                    },
                    children: [
                      {
                        id: "skill3-6-3",
                        title: "Friends in High Places",
                        icon: "icons/blue_02.jpg",
                        tooltip: {
                          content:
                            "You have garnered such an influential network that people who are inclined to be lawful automatically respect you. You have advantage on any social interaction with someone of lawful or good standing.",
                          direction: "left",
                        },
                        children: [
                          {
                            id: "skill3-7-3",
                            title: "Friends in Low Places",
                            icon: "icons/emerald_07.jpg",
                            tooltip: {
                              content:
                                "Your influence goes beyond even the overworld. You gain advantage on any social interaction with someone of chaotic or non-good alignment.",
                              direction: "left",
                            },
                            children: [
                              {
                                id: "skill3-8-3",
                                title: "Mover of Hearts and Minds",
                                icon: "icons/wind-grasp-magenta-3.jpg",
                                tooltip: {
                                  content:
                                    "You have gained such control of your soulbind that you can temporarily link it to another creature, controlling them like a puppet. Target one creature that can hear you, whereupon you cast the Dominate Monster spell on them. They have disadvantage on this saving throw, and if they are charmed by you, they automatically fail. The save DC for this spell is equal to 8 + twice your proficiency bonus. You can use this feature once per long rest.",
                                  direction: "left",
                                },
                                children: [],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        id: "skill3-6-6",
                        title: "Force of Personality",
                        icon: "icons/red_02.jpg",
                        tooltip: {
                          content:
                            "While you have a creature charmed, you can influence them with the excess aether in your soulbind. You can cast the mass suggestion spell once per long rest, so long as the creature is charmed by you. The save DC for this spell is equal to 8 + twice your proficiency bonus.",
                          direction: "left",
                        },
                        children: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
export default Skills3;
