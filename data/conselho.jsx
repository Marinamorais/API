import axios from "axios";

// Vamos utlizar API de conselhos.

// URL https://api.adviceslip.com/advice
const URL_API = 'https://api.adviceslip.com/advice';
const fetchApiData = async () =>{
   try{
    const resposta = await axios.get(URL_API);
    return resposta;  
}catch(error){
    throw error;
}

}

export default fetchApiData;