"use client"

import styles from './conselhoTDS1.module.css'
import conselhos from '@/data/conselho'
import { useEffect, useState } from 'react';
import { PacmanLoader } from 'react-spinners';

export default function Conselhos() {
  const [apiData, setApiData] = useState('');

  useEffect(() => {
    const conselhoFecth = async () => {
      try {
        const dados = await conselhos();
        console.log(dados);
        setApiData(dados);
      } catch (error) {
        throw error;
      }
    }
    conselhoFecth();
  }
    , []);

  return (
    <>
    <div className={styles.container}>
      <h1>Conselho do dia</h1>
      <div className={styles.conselho}>
        {apiData ? apiData.data.slip.advice : <PacmanLoader color={'#000000'} />}
      </div>
    </div>
    </>
  )
}