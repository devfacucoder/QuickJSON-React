import React, { useContext, useState } from "react";
import AceEditor from "react-ace";
import prettier from "prettier";
import parserJson from "prettier/parser-babel"; // Usa el parser Babel para JSON
import { JsonForCreate } from "../App";

// Importa el modo JSON y el tema deseado
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-monokai";
import example from "../assets/example.json"
function Editor() {
  const [jsonText, setJsonText] = useContext(JsonForCreate);

  const formatJson = () => {
    try {
      if (!jsonText) {
        alert("El editor está vacío.");
        return;
      }

      const formatted = prettier.format(jsonText, {
        parser: "json",
        plugins: [parserJson],
        tabWidth: 2,
      });
      setJsonText(formatted);
    } catch (error) {
      console.error("Error al formatear JSON:", error);
      alert("El JSON no es válido y no se pudo formatear.");
    }
  };

  return (
    <div className="w-full h-full">
      <AceEditor
        mode="json"
        theme="monokai"
        value={jsonText}
        placeholder="Escriba aca su JSON"
        onChange={(value) => setJsonText(value)}
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
  );
}

export default Editor;
