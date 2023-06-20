// Api method

// Use Fetch

import CONSTANTS from "@/utils/constants";
import axios from "axios";

const API = {
  get: (p) => axios.get(`http://localhost:3000/api/v1/${p}`)
}

export default API;