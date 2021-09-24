import "./App.css";
import { SkillProvider, SkillTree, SkillTreeGroup } from "beautiful-skill-tree";
import Skills1 from "./components/Skills1";
import Skills2 from "./components/Skills2";
import Skills3 from "./components/Skills3";

import React from "react";

function App() {
  // Array of objects, each object in the array defines a new skill.
  // 1-to-1 with skill tree. One skill tree will have one array of skills, and vice versa.
  const theme = {
    border: "4px solid rgb(127,127,127)",
    treeBackgroundColor: "rgba(0, 0, 0, 0.5)",
    heading: {},
    nodeBackgroundColor: "rgb(60,60,60)",
    nodeActiveBackgroundColor: "#808080",
    nodeHoverBorderColor: `linear-gradient(
        to right,
        #808080 0%,
        #808080 100%
      )`,
  };
  return (
    <div className="App">
      <SkillProvider>
        {}
        <SkillTreeGroup theme={theme}>
          {}
          {() => (
            <React.Fragment>
              <SkillTree
                treeId="tree1"
                title="Might"
                data={Skills1}
                collapsible
                description="Channeling the power of your soulbinds, you are able to enhance your physical prowess granting additional abilities and utility for martial situations."
              />
              <SkillTree
                treeId="tree2"
                title="Power"
                data={Skills2}
                collapsible
                description="Having an increased well of aether to draw from, you have chosen to enhance your spellcasting abilities to provide greater throughput, range, or duration."
              />
              <SkillTree
                treeId="tree3"
                title="Knowledge"
                data={Skills3}
                collapsible
                description="Never one to lust for power, you instead desire what some would consider the greatest of all treasures, knowledge. You can use this knowledge to enhance your already exceptional skills, or you can use it to broaden your abilities."
              />
            </React.Fragment>
          )}
        </SkillTreeGroup>
      </SkillProvider>
    </div>
  );
}

export default App;
