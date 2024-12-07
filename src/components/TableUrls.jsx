import ItemUrl from "./ItemUrl";
import { useEffect, useState } from "react";

function TableUrls() {
  const [urlStorage, setUrlStorage] = useState(
    JSON.parse(localStorage.getItem("urls")) || []
  );
  // Escuchar cambios en localStorage
  useEffect(() => {
    const handleStorageChange = () => {
      const urls = JSON.parse(localStorage.getItem("urls")) || [];
      setUrlStorage(urls);
    };

    // Escuchar el evento de cambio en localStorage
    window.addEventListener("storage", handleStorageChange);

    // Actualizar en la misma pestaña
    const interval = setInterval(() => {
      handleStorageChange();
    }, 1000);

    return () => {
      // Limpieza de eventos
      window.removeEventListener("storage", handleStorageChange);
      clearInterval(interval);
    };
  }, []);
  if (urlStorage.length <= 0) {
    return (
      <div className="w-2/3 max-sm:w-full min-h-12 max-h-96 bg-slate-950 p-4 flex flex-col items-center gap-4">
        <button
          onClick={() => {
            document
              .getElementById("code")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="rounded-full w-12 h-12 hover:border-gray-700 hover:text-gray-700  border-2 border-white text-white text-3xl flex items-center justify-center"
        >+
        </button>
      </div>
    );
  } else {
    return (
      <div className="w-2/3  max-sm:w-full min-h-12 max-h-96 bg-slate-950 p-4 overflow-y-auto srl">
        <ul className="flex flex-col">
          {urlStorage.map((e, index) => (
            <ItemUrl indice={index} url={e.url} key={index} />
          ))}
        </ul>
      </div>
    );
  }
}

export default TableUrls;
