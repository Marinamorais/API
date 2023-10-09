"use client"
import gatinhos from '@/data/gatinhos/gatinhos';
import { useEffect, useState } from 'react';


function page(){
    const [apiData,setApiData] = useState('');

    useEffect(() =>{
        const gatosFecth = async () => {
        try{
         const dados = await gatinhos();
         console.log(dados);
         setApiData(dados);
        }catch (error){
            throw error
        }
    }
        gatosFecth();
    }, []);

    return
    <>
    
    </>
}