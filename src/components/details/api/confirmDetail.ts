import axios from "axios";

export const confirmDetail = () => {
    axios
    .get("https://jsonplaceholder.typicode.com/customers")
    .then(data => console.log(data.data))
    .catch(error => console.log(error));
}