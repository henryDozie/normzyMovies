import React from 'react'
import axios from 'axios'


const baseUrl = " http://www.omdbapi.com/?i=tt3896198&apikey=";
const apiKey = "4111a87e";
const URL = `${baseUrl}${apiKey}&s=`

export function getMovies(movieData) {
  const resp =  axios.get(`${URL}${movieData}`);
  return resp;
};