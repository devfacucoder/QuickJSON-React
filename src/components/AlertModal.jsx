import { data } from "autoprefixer";
import { JsonForCreate } from "../App";
import { useContext, useState, useRef } from "react";
const apiUrl =import.meta.env.VITE_URL_API
function AlertModal({ show, ctrl, fun }) {
  const [jsonText, setJsonText] = useContext(JsonForCreate);
  const [url, seturl] = useState("");
  const [inputShow, setInputShow] = useState(false);
  const [errorLarge,setErrorLarge] = useState(false)
  const refNameUrl = useRef();
  const createJSON = async () => {
    try {
      // Verifica si el texto ingresado es un JSON válido
      const parsedJSON = JSON.parse(jsonText);
  
      if (parsedJSON) {
        // Envía la solicitud al servidor
        const response = await fetch(apiUrl, {
          method: "POST",
          body: JSON.stringify({ envio: parsedJSON }),
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        // Verifica si el error es 413 (Payload Too Large)
        if (response.status === 413) {
          setErrorLarge(true);
          console.log("aaaaaaaaaaaaaaaaaaa")
          return; // Detenemos la ejecución si hay error
        }
  
        if (response.ok) {
          // Resetea el estado de error
          setErrorLarge(false);
  
          // Muestra el input
          setInputShow(true);
  
          // Obtén los datos de la respuesta
          const responseData = await response.json();
          const newUrl = `http://localhost:5000/${responseData.data._id}`;
          let newData = new Date(responseData.data.createdAt);
          seturl(newUrl);
  
          // Actualiza el array de URLs en localStorage
          const existingUrls = JSON.parse(localStorage.getItem("urls")) || [];
          existingUrls.push({
            url: newUrl,
            expira: newData,
            name: refNameUrl.current.value,
          });
          localStorage.setItem("urls", JSON.stringify(existingUrls));
        }
      }
    } catch (error) {
      console.error("Error al crear el JSON o enviar datos:", error);
    }
  };
  
  if (show) {
    return (
      <div className="flex items-center justify-center fixed bg-black/50 z-40 w-screen h-screen max-sm:p-4">
        <div className="w-1/2 max-sm:w-full bg-slate-950 p-6 flex flex-col gap-2 rounded-lg shadow-lg">
          <p className="text-gray-300 font-mono text-base ">
            La información ingresada queda bajo tu responsabilidad. La URL
            generada expira en 24 horas.
          </p>
          <div className="w-full h-8">
            <input
              type="text"
              className="h-full w-full px-2 bg-gray-800 text-white focus:outline-none placeholder:text-gray-400"
              ref={refNameUrl}
              placeholder="Name (optional)"
            />
          </div>
          {
            errorLarge?(
            <div className="flex items-center  justify-between w-full h-8 ">
              <h4>Error: the size is very strong</h4>
              </div>
            ):null
          }
          {inputShow ? (
            <div className="flex items-center  justify-between w-full h-8 ">
              <input
                type="text"
                readOnly
                className="h-full w-5/6 px-2 bg-gray-800 font-mono text-white focus:outline-none"
                value={url}
              />

              <button
                className="bg-blue-800 font-mono  text-white h-full w-1/6"
                onClick={() => {
                  if (url !== "") {
                    navigator.clipboard.writeText(url);
                  }
                }}
              >
                copy
              </button>
            </div>
          ) : (
            <div className="flex items-center  justify-between w-full h-8 "></div>
          )}

          <div className="flex justify-end space-x-4">
            <button
              onClick={() => {
                ctrl(false);
              }}
              className="px-4 py-2 bg-fondo3 text-white font-mono rounded hover:bg-red-600 transition"
            >
              Cerrar
            </button>
            <button
              onClick={() => {
                createJSON();
              }}
              className="px-4 py-2 bg-green-700 text-white font-mono rounded hover:bg-green-600 transition"
            >
              Generar
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

export default AlertModal;
