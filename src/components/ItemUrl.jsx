import { useState } from "react";

function ItemUrl({ indice, url, timeForExpire }) {
  const [expira, setExpira] = useState();
  const dateNow = new Date();
  
  return (
    <li
      className={`text-white w-full ${
        indice % 2 === 0 ? "bg-fondo2" : ""
      } font-mono flex justify-between items-center px-2 h-12`}
    >
      <p className="overflow-hidden w-2/3">{url}</p>
      <p>23:22</p>
      <button className="bg-fondo3 p-2 h-8 flex items-center justify-center"
      onClick={()=>{
        navigator.clipboard.writeText(url);

      }}>
        Copy
      </button>
    </li>
  );
}

export default ItemUrl;
