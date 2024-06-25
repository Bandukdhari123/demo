import axios from "axios";
export const axiosApi=axios.create({
    baseURL:"https://www.themealdb.com/api/json/v1/1/",
    headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
    }
});