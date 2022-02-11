import Input from "../Input";
import { useEffect, useState, useRef } from "react";

function Display() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const firstMount = useRef(false);

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=06d06f283858dd96ea4dac608af07ae9&units=metric`;

  useEffect(() => {
    if (firstMount.current === false) {
      firstMount.current = true;
      return;
    }
    if (firstMount.current) {
      getData();
    }
    async function getData() {
      let response = await fetch(URL);
      let data = await response.json();
      setData(data);
      return data;
    }
  }, [URL]);

  function getInput(input) {
    setSearch(input);
  }

  console.log(data);

  return (
    <div>
      <Input getInput={getInput} />
      <p>{data.name}</p>

      {data.weather && (
        <div>
          <p>{data.main.temp} °C</p>
          <p>{data.weather[0].description}</p>
          <img
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="weather icon"
          />
        </div>
      )}
    </div>
  );
}

export default Display;
