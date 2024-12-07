import React, { useState, createContext } from "react";
import Editor from "./components/Editor";
export const JsonForCreate = createContext();

import AlertModal from "./components/AlertModal";
import Footer from "./components/Footer";
import Documentacion from "./sections/Documentacion";
import UrlSection from "./sections/UrlSection";

const App = () => {
  const exampleJson = `
    [
      {
        "id": 1,
        "name": "facu"
      },
      {
        "id": 2,
        "name": "juan"
      }
    ]
  `;
  const [jsonText, setJsonText] = useState(exampleJson);
  const [modalGenratorView, setModalGeneratorVie] = useState(false);
  const [errorJson, setErrorJson] = useState(false);
  return (
    <JsonForCreate.Provider value={[jsonText, setJsonText]}>
      <AlertModal show={modalGenratorView} ctrl={setModalGeneratorVie} />
      <div className="min-h-svh w-svw ">
        <section
          id="code"
          className="bg-slate-950 min-h-svh p-4 w-svw justify-around flex flex-col"
        >
          <div className="flex justify-center p-4 gap-2 flex-col items-center">
            <h1 className="font-mono text-5xl text-fondo4 font-semibold">
              QuickJSON
            </h1>
            <p className="text-white text-center font-mono w-1/2">
              Create Your Temporary JSON
            </p>
          </div>

          <div className="flex flex-col justify-center items-center flex-grow  ">
            <div className="w-2/3 max-sm:w-full h-96 bg-fondo1 ">
              <Editor />
            </div>
          </div>
          <div className="w-full h-16 flex gap-2 flex-col items-center justify-center  ">
            {errorJson ? (
              <p className="text-2xl h-6  font-mono text-red-600">
                Error en el JSON
              </p>
            ) : (
              <p className="text-2xl h-6 font-mono text-red-600"></p>
            )}
            <button
              className="w-52 h-10 bg-fondo4  text-white hover:text-fondo4  hover:bg-gray-500  font-mono font-medium text-2xl"
              onClick={() => {
                //console.log(JSON.parse(jsonText))
                if (jsonText !== "") {
                  if (JSON.parse(jsonText)) {
                    setErrorJson(false);

                    setModalGeneratorVie(true);
                  } else {
                    setErrorJson(true);
                  }
                } else {
                  setErrorJson(true);
                }
              }}
            >
              Create
            </button>
          </div>
        </section>
        <UrlSection />
        <Documentacion />
        <Footer />
      </div>
    </JsonForCreate.Provider>
  );
};

export default App;
