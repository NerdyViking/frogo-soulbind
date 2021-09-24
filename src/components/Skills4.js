/*
{
   id: "skill2",
   title: "Fireblast",
   tooltip: {
    content: "It's okay, I guess",
    direction: "left",
   },
   children: [
     
  ], 
},
*/

const Skills4 = [
  {
    id: "skill1",
    title: "Frostbolt",
    icon: "icons/autocrit.jpg",
    tooltip: {
      content: "Does 1 million damage, only castable by cool people",
      direction: "left",
    },
    children: [
      // Each object has a child array, and this array's elements are the same objects as above
      {
        id: "skill2",
        title: "Fireblast",
        tooltip: {
          content: "It's okay, I guess",
          direction: "left",
        },
        children: [], // No children, but must be declared as empty array.
      },
    ],
  },
];
export default Skills4;
