import "./App.css";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import { getAllData } from "./dataController";
import { useState } from "react";

function App() {
  let [renderPreview, toggleRenderPreview] = useState(false);
  return (
    <>
      <Editor  toggleRenderPreview={toggleRenderPreview} renderPreview={renderPreview}/>
      <Preview allData={getAllData()}/>
    </>
  );
}

export default App;
