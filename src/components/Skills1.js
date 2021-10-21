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

const Skills1 = [
  {
    id: "skill1-1-1",
    title: "Might of the Many",
    icon: "icons/autocrit.jpg",
    tooltip: {
      content:
        "Your bonded souls have allowed you to access a reserve of power, which you can access in times of great need. Once per long rest, when you make a weapon (or unarmed/natural) attack, you can automatically crit bypassing the need for a roll. You can use this feature once per long rest.",
      direction: "left",
    },
    children: [
      {
        id: "skill1-2-1",
        title: "Overwhelming Might",
        icon: "icons/red_01.jpg",
        tooltip: {
          content:
            "When you use your Strength of the Many feature, you can cause the creature to fall prone if it is large or smaller.",
          direction: "left",
        },
        children: [
          {
            id: "skill1-3-1",
            title: "Tremor",
            icon: "icons/yellow_14.jpg",
            tooltip: {
              content:
                "Your Strength of the Many strikes with such power that the very earth beneath your enemy tremors, reducing their walking speed to 0 ft. until the end of your next turn.",
              direction: "left",
            },
            children: [],
          },
          {
            id: "skill1-3-2",
            title: "Bond-Fueled Weaponry",
            icon: "icons/weapon_30.jpg",
            tooltip: {
              content:
                "Your weapon attacks count as magical for the purposes of damage reduction. Futhermore, at the end of a short rest you can choose to attune your weapon to a specific type of damage reduction and it gains the ability to bypass it.",
              direction: "left",
            },
            children: [
              {
                id: "skill1-4-1",
                title: "Bond-Fueled Strength",
                icon: "icons/red_05.jpg",
                tooltip: {
                  content:
                    "Channeling your bond directly into your muscles, you can give yourself advantage on your next weapon attack. You can produce this effect once per short rest.",
                  direction: "left",
                },
                children: [
                  {
                    id: "skill1-5-1",
                    title: "Channeled Bond",
                    icon: "icons/weapon_31.jpg",
                    tooltip: {
                      content:
                        "You have a deeper understanding of the bond between you and your soulbinds such that you can produce an effect similar to a first level divine smite once per long rest.",
                      direction: "left",
                    },
                    children: [
                      {
                        id: "skill1-6-1",
                        title: "Martial Expert",
                        icon: "icons/weapon_26.jpg",
                        tooltip: {
                          content:
                            "You gain the benefits of the Fighting Initiate or martial adept feat, your choice.",
                          direction: "left",
                        },
                        children: [
                          {
                            id: "skill1-7-1",
                            title: "Reliable Strikes",
                            icon: "icons/weapon_06.jpg",
                            tooltip: {
                              content:
                                "You no longer automatically miss on a natural 1.",
                              direction: "left",
                            },
                            children: [
                              {
                                id: "skill1-8-1",
                                title: "Execute",
                                icon: "icons/violet_03.jpg",
                                tooltip: {
                                  content:
                                    "Once per day, you can attempt to finish off a wounded foe. When you hit creature that has less than maximum hit points, you can make them attempt a CON save or die, if they have fewer than 100 hit points. Creatures with over 100 hit points instead take 12d10 necrotic damage.",
                                  direction: "left",
                                },
                                children: [],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        id: "skill1-6-2",
                        title: "Soul Conduit",
                        icon: "icons/blue_22.jpg",
                        tooltip: {
                          content:
                            "When another creature you are bonded with hits with a weapon attack, you can provide them the benefits of the Channeled Bond feature. This consumes a use, as normal.",
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
        ], // No children, but must be declared as empty array.
      },
      {
        id: "skill1-2-2",
        title: "Covered in Blood",
        icon: "icons/blood_10.jpg",
        tooltip: {
          content:
            "When you use your Strength of the Many feature, you can gain temporary hit points equal to the amount of weapon damage done.",
          direction: "left",
        },
        children: [
          {
            id: "skill1-3-3",
            title: "Flourishing Strike",
            icon: "icons/weapon_24.jpg",
            tooltip: {
              content:
                "When you hit a creature with a weapon attack, you can gain the effects of the dodge action. You can produce this effect once per short rest.",
              direction: "left",
            },
            children: [
              {
                id: "skill1-4-2",
                title: "Increased Fortitude",
                icon: "icons/red_15.jpg",
                tooltip: {
                  content:
                    "You have advantage on constitution and death saving throws.",
                  direction: "left",
                },
                children: [
                  {
                    id: "skill1-5-2",
                    title: "Health Funnel",
                    icon: "icons/blood_05.jpg",
                    tooltip: {
                      content:
                        "Whenever you receive healing, you can share a portion of it with a bonded soul. When an effect restores hit points, you can sacrifice half of that healing and provide it to a bonded soul you can see within 30 ft.",
                      direction: "left",
                    },
                    children: [
                      {
                        id: "skill1-6-3",
                        title: "Shared Healing",
                        icon: "icons/blood_04.jpg",
                        tooltip: {
                          content:
                            "You no longer reduce the healing you receive, instead healing for the full amount and sharing half of that healing with the chosen bonded soul.",
                          direction: "left",
                        },
                        children: [],
                      },
                      {
                        id: "skill1-6-4",
                        title: "Thick Skin",
                        icon: "icons/blood_01.jpg",
                        tooltip: {
                          content:
                            "At the end of each long rest, you gain resistance to one damage type of your choice.",
                          direction: "left",
                        },
                        children: [
                          {
                            id: "skill1-7-2",
                            title: "Shrug it Off",
                            icon: "icons/blue_35.jpg",
                            tooltip: {
                              content:
                                "Once per long rest, you can shrug off an otherwise deadly blow, turning a critical hit against you into a normal hit.",
                              direction: "left",
                            },
                            children: [
                              {
                                id: "skill1-8-2",
                                title: "Undying",
                                icon: "icons/blood_12.jpg",
                                tooltip: {
                                  content:
                                    "Channeling your soulbind into your very life essence, you can help stave off death itself. Once per long rest, when you would fall to zero you can choose to remain conscious. Your health can go into the negative. You can still receive healing and if by the end of your next turn, your health is in the positive, you do not fall unconscious.",
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
            id: "skill1-3-4",
            title: "Blood Frenzy",
            icon: "icons/blood_13.jpg",
            tooltip: {
              content:
                "If you are under 50% health when you use your Strength of the Many feature, you immediately heal for half the temporary hit points gained. At the start of your next turn, you heal for the remaining amount of temporary hit points gained.",
              direction: "left",
            },
            children: [],
          },
        ], // No children, but must be declared as empty array.
      },
      {
        id: "skill1-2-3",
        title: "Leg Day",
        icon: "icons/beast_01.jpg",
        tooltip: {
          content:
            "When you use your Strength of the Many feature, you can dash as a free action for the rest of this turn. If you dash using this feature, your movement does not provoke opportunity attacks. If you don't dash, you gain advantage on your next attack during your next turn.",
          direction: "left",
        },
        children: [
          {
            id: "skill1-3-5",
            title: "Never Miss a Day",
            icon: "icons/yellow_17.jpg",
            tooltip: {
              content:
                "Gain both effects of Leg Day when you use your Strength of the Many feature. Furthermore, your next advantage attack can be on the same turn.",
              direction: "left",
            },
            children: [],
          },
          {
            id: "skill1-3-6",
            title: "Bounding Strides",
            icon: "icons/armor_01.jpg",
            tooltip: {
              content:
                "Your walking speed increases by 10 ft. Outside of combat, this increases by a further 5 ft.",
              direction: "left",
            },
            children: [
              {
                id: "skill1-4-3",
                title: "Muscular",
                icon: "icons/blue_32.jpg",
                tooltip: {
                  content:
                    "You can carry and lift twice the normal weight for your strength. Furthermore, you can make a long jump without needing a running start.",
                  direction: "left",
                },
                children: [
                  {
                    id: "skill1-5-3",
                    title: "Peerless Techniques",
                    icon: "icons/red_23.jpg",
                    tooltip: {
                      content:
                        "You can grapple a creature as a bonus action, which you can use either your athletics or acrobatics for.",
                      direction: "left",
                    },
                    children: [
                      {
                        id: "skill1-6-5",
                        title: "Quick Hands",
                        icon: "icons/gray_08.jpg",
                        tooltip: {
                          content:
                            "You can swap between any number of weapons without spending an action on your turn.",
                          direction: "left",
                        },
                        children: [
                          {
                            id: "skill1-7-3",
                            title: "Coordinated Strikes",
                            icon: "icons/weapon_34.jpg",
                            tooltip: {
                              content:
                                "Your leadership in battle commands immediate response. Immediately after hitting with a weapon attack, you can command an ally to make a weapon attack, which uses their reaction. You can use this feature once per short rest.",
                              direction: "left",
                            },
                            children: [
                              {
                                id: "skill1-8-3",
                                title: "Commanding Presence",
                                icon: "icons/yellow_13.jpg",
                                tooltip: {
                                  content:
                                    "Your presence on the battlefield is always known, to both friend and foe. Once per long rest, you can use your action to exude an aura of commanding authority. For the next minute, you can use the cast the command spell as a bonus action, your movement does not provoke opportunity attacks, and you can use Coordinated Strikes without consuming any uses.",
                                  direction: "left",
                                },
                                children: [],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        id: "skill1-6-6",
                        title: "Grip Strength",
                        icon: "icons/yellow_08.jpg",
                        tooltip: {
                          content:
                            "Any creature you have grappled is also considered to be restrained, if you choose.",
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
        ], // No children, but must be declared as empty array.
      },
    ],
  },
];
export default Skills1;
