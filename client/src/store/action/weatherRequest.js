import Axios from "axios";

export const addCity = (newCity) => {
    Axios.get("http://api.openweathermap.org/data/2.5/weather?q=" + newCity + "&units=metric&appid=2a2b833d0dede9d3979171b2be94f7a4&lang=fr")
        .then(response => (console.log(response)))
}
