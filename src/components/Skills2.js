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

const Skills2 = [
  {
    id: "skill2-1-1",
    title: "Power of the Many",
    icon: "icons/skill_64.png",
    tooltip: {
      content:
        "When you roll damage or healing for a spell, you can reroll a number of the dice up to your spellcasting modifier (minimum of one). You can use either of these rolls. You can use this feature once per short rest.",
      direction: "left",
    },
    children: [
      {
        id: "skill2-2-1",
        title: "Reliable Power",
        icon: "icons/skill_123.png",
        tooltip: {
          content:
            "When you use the Power of the Many feature, you can roll an additional die, which is added to the final roll.",
          direction: "left",
        },
        children: [
          {
            id: "skill2-3-1",
            title: "School Specialization",
            icon: "icons/01_fire_arrow.png",
            tooltip: {
              content:
                "Choose one school of magic. When you cast a spell from that school, its spell level increases by one for that casting, up to a maximum of fifth level.",
              direction: "left",
            },
            children: [
              {
                id: "skill2-4-1",
                title: "Shockwave",
                icon: "icons/emerald_01.jpg",
                tooltip: {
                  content:
                    "Spells you cast from your chosen school of specialization or mastery, are cast with such force that you can erupt with energy, forcing all creatures within 15 feet to make a strength saving throw or be pushed out of the area of effect and be knocked prone. A save causes the creature to suffer no ill effects. You can use this feature once per short rest.",
                  direction: "left",
                },
                children: [
                  {
                    id: "skill2-5-1",
                    title: "Focused Casting",
                    icon: "icons/Druideskill_48.png",
                    tooltip: {
                      content:
                        "When you cast a spell that forces a creature to make a saving throw to resist its effects, you can give one target of the spell disadvantage on its first saving throw made against the spell. You can use this feature once per long rest.",
                      direction: "left",
                    },
                    children: [
                      {
                        id: "skill2-6-1",
                        title: "Magnified Casting",
                        icon: "icons/skill_177.png",
                        tooltip: {
                          content:
                            "When you use the Focused Casting feature, you can increase the save DC of the spell by 2.",
                          direction: "left",
                        },
                        children: [],
                      },
                      {
                        id: "skill2-6-2",
                        title: "School Mastery",
                        icon: "icons/10_magic_bolt2.png",
                        tooltip: {
                          content:
                            "Choose a second school of magic, as with School Specialization, or you can enhance your specialized school to allow level increases beyond fifth level.",
                          direction: "left",
                        },
                        children: [
                          {
                            id: "skill2-7-1",
                            title: "Lingering Effects",
                            icon: "icons/Skill_303.png",
                            tooltip: {
                              content:
                                "When you damage or heal a creature with a spell, you can apply a lasting effect that lingers. When you cast a spell that deals damage, a single creature suffers an additional 1d4 of the intital damage type per level of spell slot used for the next minute, or until they use their action to end the effect on themselves. Healing provides a similar effect, but for only one round. You can use this feature once per long rest.",
                              direction: "left",
                            },
                            children: [
                              {
                                id: "skill2-8-1",
                                title: "Overpowered",
                                icon: "icons/Skill_275.png",
                                tooltip: {
                                  content:
                                    "Drawing from the power of your bonded allies, you are able to enhance your spellcasting. When you cast a spell of 1st through 5th level that deals damage or heals, you can deal maximum damage or healing with that spell. You can use this feature once per long rest.",
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
            id: "skill2-3-2",
            title: "Power Overwhelming",
            icon: "icons/04_fire_rain.png",
            tooltip: {
              content:
                "Choose one creature struck by your Power of the Many feature. That creature must make a constitution saving throw or be overwhelmed by your magic until the start of your next turn, suffering the effects of the stunned condition.",
              direction: "left",
            },
            children: [],
          },
        ],
      },
      {
        id: "skill2-2-2",
        title: "Soul-Etched Armor",
        icon: "icons/20_shadowKnight.png",
        tooltip: {
          content:
            "You permanently gain the benefits of the mage armor spell, while you are unarmored.",
          direction: "left",
        },
        children: [
          {
            id: "skill2-3-3",
            title: "Your Soul is Mine!",
            icon: "icons/Warlock_02.png",
            tooltip: {
              content:
                "Dispelling magic and countering a spell grants you temporary hit points equal to the spell level + proficiency bonus + spellcasting modifier.",
              direction: "left",
            },
            children: [
              {
                id: "skill2-4-2",
                title: "Soul-Backed Casting",
                icon: "icons/Warlock_30.png",
                tooltip: {
                  content:
                    "Enemies have a harder time countering your magics. The DC to counter and dispel your magic is increased by your proficiency bonus.",
                  direction: "left",
                },
                children: [
                  {
                    id: "skill2-5-2",
                    title: "Unshakable Mind",
                    icon: "icons/Warlock_28.png",
                    tooltip: {
                      content:
                        "You have advantage on Constitution saving throws that you make to maintain your concentration on a spell when you take damage.",
                      direction: "left",
                    },
                    children: [
                      {
                        id: "skill2-6-3",
                        title: "Unbreakable Mind",
                        icon: "icons/Warlock_40.png",
                        tooltip: {
                          content:
                            "Whenever you make a constitution saving throw to maintain your concentration on a spell, you can treat a d20 roll of 9 or lower as a 10.",
                          direction: "left",
                        },
                        children: [],
                      },
                      {
                        id: "skill2-6-4",
                        title: "Cannibilize Magic",
                        icon: "icons/Skill_459.png",
                        tooltip: {
                          content:
                            "You have learned to feed upon your own magic source to heal grievous wounds. As an action, you can spend a spell slot (or an equivalent amount of Aether) to gain a number of hit points equal to the spell level  x (spellcasting modifier + proficiency bonus).",
                          direction: "left",
                        },
                        children: [
                          {
                            id: "skill2-7-2",
                            title: "Redirect Magic",
                            icon: "icons/Skill_409.png",
                            tooltip: {
                              content:
                                "When a creature you can see within 60 feet, other than you, is target by a harmful spell, you can use your reaction to instead make yourself the target. You have advantage on any saving throws associated with the spell and resistance to any damage it would deal. Furthermore, if you would take only half damage from saving, you instead take no damage. You can do this once per short rest.",
                              direction: "left",
                            },
                            children: [
                              {
                                id: "skill2-8-2",
                                title: "Death Ward",
                                icon: "icons/Warlock_05.png",
                                tooltip: {
                                  content:
                                    "If you are reduced to 0 hit points or are incapacitated against your will, you can immediately gain the benefits of any summoning spell of your choice as if it were cast using a 9th-level spell slot. Once used, you can't use this feature again until the following day.",
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
            id: "skill2-3-4",
            title: "Soul-Infused Barrier",
            icon: "icons/violet_12.jpg",
            tooltip: {
              content:
                "You permanently gain the benefits of the shield spell while you are unarmored and not wearing a shield. Casting the shield spell provides no further benefits.",
              direction: "left",
            },
            children: [],
          },
        ],
      },
      {
        id: "skill2-2-3",
        title: "Mobile Casting",
        icon: "icons/Archerskill_19.png",
        tooltip: {
          content:
            "Casting a spell of 1st level or higher increases your movement speed by 5 feet per level of spell slot used until the start of your next turn.",
          direction: "left",
        },
        children: [
          {
            id: "skill2-3-5",
            title: "Distant Casting",
            icon: "icons/Archerskill_20.png",
            tooltip: {
              content:
                "You can cast all teleportation magic as a bonus action, such as dimension door.",
              direction: "left",
            },
            children: [],
          },
          {
            id: "skill2-3-6",
            title: "Home Is Where the Heart Is",
            icon: "icons/red_33.jpg",
            tooltip: {
              content:
                "You can cast the Tiny Hut spell at will, which includes a warm cooking fire in the center.",
              direction: "left",
            },
            children: [
              {
                id: "skill2-4-3",
                title: "Aether Conduit",
                icon: "icons/Archerskill_42.png",
                tooltip: {
                  content:
                    "When you cast area of effect spells, you can turn a number of targets equal to your spellcasting modifier into aether conduits. Aether conduits do not suffer the negative effects of your area of effect spells. They can see normally in darkness, are undamaged by fireball, and can breath normally in stinking cloud, as examples.",
                  direction: "left",
                },
                children: [
                  {
                    id: "skill2-5-3",
                    title: "Portable Storage",
                    icon: "icons/Assassinskill_36.png",
                    tooltip: {
                      content:
                        "As an action, you can infuse an item to gain the benefits of a bag of holding regardless of whether or not the item is a container.",
                      direction: "left",
                    },
                    children: [
                      {
                        id: "skill2-6-5",
                        title: "Enhanced Summons",
                        icon: "icons/04_summon_skeleton_army.png",
                        tooltip: {
                          content:
                            "Creatures you summon, charm, or otherwise exert magical control over, have a bonus to all attacks, damage rolls, skill checks, and saving throws equal to your spellcasting modifier bonus.",
                          direction: "left",
                        },
                        children: [
                          {
                            id: "skill2-7-3",
                            title: "Your Spell is Mine",
                            icon: "icons/17_venom.png",
                            tooltip: {
                              content:
                                "When a creature you can see within 30 feet of you casts a spell, you can use your reaction to attempt to steal it for your own uses. Make a contested spellcasting check. If you win, their action is wasted and instead you cast the spell on them. You can use this once per short short rest.",
                              direction: "left",
                            },
                            children: [
                              {
                                id: "skill2-8-3",
                                title: "Extradimensional Barrage",
                                icon: "icons/19_shield.png",
                                tooltip: {
                                  content:
                                    "You have such control over your extradimensional spaces that you can conjure replicas of items you have stored inside. Once per long rest, as an action, you can cast the Animate Objects spell for free as if it were cast using a 9th level spell slot. The items fly from portals to your dimensional spaces to attack your allies, and as such can appear and disappear at any location you can see.",
                                  direction: "left",
                                },
                                children: [],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        id: "skill2-6-6",
                        title: "Warehouse",
                        icon: "icons/47_wall.png",
                        tooltip: {
                          content:
                            "You create an extradimensional portal in thin air that acts identical to a portable hole with an entrance as small or as large as you would like, up to 10 feet in diameter.",
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
export default Skills2;
