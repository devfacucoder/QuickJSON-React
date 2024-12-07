import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-monokai";
import { useState } from "react";
import AceEditor from "react-ace";

function Documentacion() {
  const exampleJson = `{
  "data": [
    {
      "id": 1,
      "name": "facu"
    },
    {
      "id": 2,
      "name": "juan"
    }
  ],
  "createdAt": "2024-11-18T16:12:11.166Z"
}`;
const [example,setExpample] = useState(exampleJson)
  return (
    <section className="bg-slate-900 min-h-svh p-4 w-svw flex flex-col justify-center items-center">
      <h3 className="text-3xl text-white font-mono">Response Example</h3>
      <div className="w-2/3 h-96 max-sm:w-full">

      <AceEditor
        mode="json"
        theme="monokai"
        value={example}
        readOnly={true}
        name="json_editor"
        editorProps={{ $blockScrolling: true }}
        lineHeight={30}
        setOptions={{
          showLineNumbers: true,
          tabSize: 2,
        }}
        style={{ width: "100%", height: "100%", fontSize: "25px" }}
      />

      </div>
    </section>
  );
}

export default Documentacion;
/*
<AceEditor
          mode="json"
          theme="monokai"
          value={example}
          readOnly={true}
          name="json_editor"
          editorProps={{ $blockScrolling: true }}
          lineHeight={30}
          setOptions={{
            showLineNumbers: true,
            tabSize: 2,
          }}
          style={{ width: "100%", height: "100%", fontSize: "25px" }}
        />
*/