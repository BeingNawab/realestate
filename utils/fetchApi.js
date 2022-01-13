import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'



  export const fetchApi = async (url) => {

    const { data } = await axios.get((url),{
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
              'x-rapidapi-key': 'c2d1e8e6b4msh6678c5623790c60p16c5e0jsn4f1ecfe0a20f'
            },

    });
    return data;
  }