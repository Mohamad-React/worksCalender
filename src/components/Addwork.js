import React from 'react';

import styles from "../styles/Main.module.css";
import Details from './Details';

const Addwork = ({works,clickHandler,submitHandler,deleterHandler,sub,error}) => {
   
    
 console.log(works);
    

    return (
        <div >
            <form onSubmit={submitHandler}>
                <div className={styles.container2}>

                    <div>
                        <input type='text' placeholder='schreibe etwas' value={works} onChange={clickHandler} />
                        {error ? <small><h4>{error}</h4></small> : ""}
                    </div>
                    <div >
                        <button type='submit' >Arbeit hinzufügen</button>
                    </div>


                </div>
            </form>
            {sub.length  === 0 ? <p className={styles.keinedinge}>Es gibt nichts zu zeigen</p> :sub.map((item,index)=><Details items={item} index={index} key={index} deleterHandler={deleterHandler} sub={sub}/>) }
            
        </div>
    );
};

export default Addwork;