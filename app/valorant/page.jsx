"use client";

import valorant from "@/data/valorant/valorant";
import { useEffect, useState } from "react";
import styles from './valorant.module.css';
import { PacmanLoader } from 'react-spinners';


export default function Valorant() {
    const [apiData, setApiData] = useState('');

    useEffect(() => {
        async function fetchData() {
            try {
            const data = await valorant();
            setApiData(data);
            } catch (error) {
                throw error;
            }
        }
        fetchData();
    }, []);

    return (
        <>
          
            <div className={styles.valorant}>
                <h1 className={styles.title}>API Data</h1>
                <div className={styles.valorantContainer}>
                    {apiData ? (
                        apiData.map((valorant) => (
                            <div key={valorant.uuid} className={styles.valorantCard}>
                                <h2 className={styles.displayName}>{valorant.displayName}</h2>
                                <img src={valorant.fullPortrait} alt={valorant.displayName} className={styles.imageAgent}/>
                                <p className={styles.descri}>{valorant.description}</p>
                                <p className={styles.skilsTitle}>SKILLS</p>
                                <div className={styles.skils}>
                                    
                                    {
                                        valorant.abilities.map((ability) => (
                                            <div key={ability.uuid} className={styles.ability}>
                                                
                                                <p className={styles.abilityName}>{ability.displayName}</p>
                                                <img src={ability.displayIcon} alt={ability.displayName} className={styles.imageAbility} />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className={styles.loading}>
                            <PacmanLoader color={'#000'} />
                        </div>
                    )}
                </div>
            </div>
        </>
    )

}