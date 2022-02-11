import Input from "../Input";
import { useEffect, useState } from "react";

function Display() {
   const search = "london";

   const [data, setData] = useState([]);

   const URL = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=06d06f283858dd96ea4dac608af07ae9&units=metric`;

   useEffect(() => {
      async function getData() {
         let response = await fetch(URL);
         let data = await response.json();
         setData(data.weather);
      }
      getData();
   }, [URL]);

   return (
      <div>
         <Input />

         <p>Test</p>
         <p>Info 1</p>
         <p>Info 2</p>
         <p>Info 3</p>
      </div>
   );
}

export default Display;
