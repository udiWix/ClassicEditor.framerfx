import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"
import SyntaxHighlighter from "react-syntax-highlighter"
import { vs, monoBlue } from "react-syntax-highlighter/dist/esm/styles/hljs"
import { EditorMenu } from "./EditorMenu"
import { onEditorClick, contextualMenu } from "./App"

// Open Preview: Command + P
// Learn more: https://framer.com/api

export function Syntax(props) {
    const codeString = `import wixData from 'wix-data';

// ...

const filter = wixData.filter().eq("year", 2010);
const having = wixData.filter().gt("maxPopulation", 1000000);

wixData.aggregate("PopulationData")
  .filter(filter)
  .group("state")
  .max("population", "maxPopulation")
  .having(having)
  .descending("maxPopulation")
  .skip(5)
  .limit(3)
  .run()
  .then( (results) => {
    if (results.items.length > 0) {
      let items = results.items;
      let numItems = results.length;
      let hasNext = results.hasNext();
    } else {
      // handle case where no matching items found
    }
  } )
  .catch( (error) => {
    let errorMsg = error.message;
    let code = error.code;
  } );`

    const [menu, setMenu] = React.useState(false)

    return (
        <div style={{ paddingTop: "35px" }} {...onEditorClick(null)}>
            <SyntaxHighlighter
                showLineNumbers
                language="javascript"
                style={monoBlue}
            >
                {codeString}
            </SyntaxHighlighter>
        </div>
    )
}

Syntax.defaultProps = {}

// Learn more: https://framer.com/api/property-controls/
