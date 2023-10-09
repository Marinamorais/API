import axios from "axios";
const Url = "https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=pt-BR"




const valorant = async () =>{
  try{
    const resposta = await axios.get(Url);
    return resposta.data.data; 
  }catch (error){
    throw error;
  }
}
export default valorant;