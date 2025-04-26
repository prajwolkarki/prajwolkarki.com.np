import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

function About() {
  const codeString = `/JholeyCodes/routes/about.js
import express from "express";
const router = express.Router();
router.get("/about", (req, res) => {
  res.status(200).json({ message: "Hi, I'm a passionate developer who loves building web applications!"
   });
});
export default router;`;

  return (
    <>
      <SyntaxHighlighter language="javascript" style={dracula} showLineNumbers customStyle={{ overflowY: "auto", overflowX: "hidden" }}>
        {codeString}
      </SyntaxHighlighter>
    </>
  );
}

export default About;
