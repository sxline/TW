import React from 'react';
import { useState } from "react";
import { Form, Button } from "antd";


export const LoginForm = () =>{

    const [user, setUser] = useState("");
    const [passwd, setPasswd] = useState("");
    const [modal_active, Setmodal_active] = useState(false);
    

    const submitInfo = () =>{
        const result = {
            user,
            passwd
        }
        
        const localInfo = localStorage.getItem("login");
        let este = false;

        if(localInfo){
            const itemsData = JSON.parse(localInfo);
            
            for(let i=0; i<itemsData.length; i++){
                if(itemsData[i].user == user && itemsData[i].passwd == passwd){
                    
                    este = true;
                    Setmodal_active(true);
                    break;
                    
                }
            }
            
            if(passwd.length == 0 && user.length == 0 ){
                alert("Va rugam sa introduceti userul și parola"); 
            }else 
            if(user.length == 0){
                alert("Va rugam sa introduceti userul");
            }else
            if(passwd.length == 0){
                alert("Va rugam sa introduceti parola"); 
            }

            else if(!este){
                setUser("");
                setPasswd("");
                alert("User sau parola e gresita!");
                
            }
        }


        // console.log();
    }

    return(
        <main>
           <div className={`modal-bg ${modal_active? 'close-modal' : ''}`}>
               <div className="modal">
                    <h2>Login:</h2>
                    <label htmlFor="email">Email:</label>
                    <input type="text" value={user} onChange={(e)=> {setUser(e.target.value);}} placeholder="Insert your username" />
                    <label htmlFor="password">Passwd:</label>
                    <input type="password" value={passwd} onChange={(e)=> {setPasswd(e.target.value);}} placeholder="Insert your password" />
                    <button className='Log_button' onClick={submitInfo}>Login</button>

               </div>
           </div>
        </main>
    )
}

