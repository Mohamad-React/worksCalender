import React, { useEffect } from 'react';
import { useState } from 'react';

import styles from "../styles/Main.module.css";
import Addwork from './Addwork';

const Main = () => {
    const [works, setWorks] = useState("");
    const [sub, setSub] = useState([]);
    const [error, setError] = useState("");
    const clickHandler = e => {
        setWorks(e.target.value);
    }
  
       useEffect(()=>{
        const save = JSON.parse(localStorage.getItem("works"));
        if(save){
            setSub(save);
        }
       },[])

       useEffect(()=>{
        localStorage.setItem("works",JSON.stringify(sub))
       },[sub])

       

    const submitHandler = e => {
        e.preventDefault();
        if (works.length < 5) {
            setError("Bitte schreiben Sie mehr als vier Wörter")
            return false;
        }
        setSub([...sub, works]);
        setWorks("");
        setError(null)
    }

    const deletHandler = deletwork => {
        if (window.confirm("sind Sie sicher?")) {
            setSub(sub.filter(work => work !== deletwork));
        }

    }

    return (
        <div className={styles.container}>
            <div className={styles.topwirte}>
                <nav>
                    <h1>
                        Schreiben Sie Ihre wichtigen Aufgaben auf
                    </h1>
                </nav>
            </div>

            <Addwork works={works} deleterHandler={deletHandler} submitHandler={submitHandler} clickHandler={clickHandler} sub={sub} error={error} />


        </div>
    );
};

export default Main;