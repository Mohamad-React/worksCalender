import React from 'react';
import { useState,useEffect } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { TiTick } from 'react-icons/ti';
import { AiOutlineReload } from 'react-icons/ai';

import styles from "../styles/List.module.css";

const Details = ({items,deleterHandler,index}) => {
      const [compelete,setCompelete]=useState(false);
      useEffect(() => {
        setCompelete(false);

      }, [items]);

      const completeHandler =()=>{
        setCompelete(!compelete);
      }
     
    return (
       
        <div className={`${compelete ? styles.listconatiner2 : styles.listconatiner}`}>

            <div className={styles.spancontainer}>
                <span className={styles.done} onClick={completeHandler}>{compelete ? <AiOutlineReload/> : <TiTick /> }</span>
                <span className={styles.delete} onClick={()=>deleterHandler(items)}><AiOutlineDelete /></span>

            </div>
            <div >
                <p className={`${compelete ? styles.liner : styles.p}`}>{items}   <span className={styles.indexnumber}>{index}</span></p>
            </div>

        </div>
    );
};

export default Details;