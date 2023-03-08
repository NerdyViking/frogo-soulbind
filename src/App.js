import "./App.css";
import { SkillProvider, SkillTree, SkillTreeGroup } from "beautiful-skill-tree";
import Skills1 from "./components/Skills1";

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
                title="Frogo"
                data={Skills1}
                collapsible
                description="Channeling the power of your soulbinds, you are able to enhance your crafting and gain additional reflexes to protect those you love."
              />
            </React.Fragment>
          )}
        </SkillTreeGroup>
      </SkillProvider>
    </div>
  );
}

export default App;
