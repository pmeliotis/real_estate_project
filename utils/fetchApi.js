import axios from 'axios';

export const baseUrl= 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '6923770112msh4c5defeb1a7a1fdp1453d2jsn67d6bdbaed5a',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        } 
    });

    return data;
}
