import axios from "axios";
const BASE_URL = "https://e-store-comerce.onrender.com/";

 async function  fetchData(phrase) {
  return await axios
    .get(BASE_URL + phrase, { method: "GET", body: "", redirect: "follow" })
    .then((res) => res.data);
}

export default fetchData;
