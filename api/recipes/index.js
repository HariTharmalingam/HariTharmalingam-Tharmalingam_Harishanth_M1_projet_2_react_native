import axios from "axios";

export const getRecipes  = () =>  {
  
  return axios
    .get("https://api.spoonacular.com/recipes/random", {
      params: {
        apiKey: "fa45655a4af04c6395edb5fa7ffa8c96",
        number: 10,
      }
    })
    .then(res => {
      return res.data?.recipes || []
    })
    .catch(err => {
      console.log(err);
    });
};