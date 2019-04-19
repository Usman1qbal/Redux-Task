const API_KEY = "c73aa228bfba692462f96e89080aa39a";

const weatherApi = async (city, type, getData) => {
  console.log(type);
  if (type !== "Search By") {
    const value =
      type === "City Name"
        ? `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
        : `https://api.openweathermap.org/data/2.5/forecast?zip=${city},pk&units=metric&appid=${API_KEY}`;

    const api_call = await fetch(`${value}`);
    const data = await api_call.json();
    getData(data);
  } else {
    alert("Please Select search Type");
  }
};

export default weatherApi;
