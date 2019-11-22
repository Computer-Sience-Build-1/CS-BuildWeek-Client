import axios from "axios";

//  * Creates a config object with commonly used URLs || keys throughout the application
//  * axiosWithAuth returns an axios instance with the authorization headers and baseURL
 
export const config = {
         // apiUrl: "http://127.0.0.1:8000",
         // apiUrl: "https://lambda-mud-test.herokuapp.com",
         apiUrl: "https://csbuildonemud.herokuapp.com",
         /**
          * @returns an Authorization Header with the user's authToken
          */
         axiosWithAuth: function() {
           return axios.create({
             baseURL: this.apiUrl,
             headers: {
               Authorization: `Token ${localStorage.getItem("authToken")}`
             }
           });
         }
       };

export default config;
