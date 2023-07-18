import React, { useEffect, useContext, createContext, useState } from "react";
import Register from "../components/molecules/Register";
import "../assets/style/moleculesCss/Notificaciones.css";
// Contexts
import UserContext from "../contexts/UserContext";
import NewAlertContext from "../contexts/NewAlertContext";
import UserInfoContext from "../contexts/UserInfoContext";
import AlertDataContext from "../contexts/AlertDataContext";

function Notificaciones() {
    const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
    const {newAlert, setNewAlert} = useContext(NewAlertContext);
    const { userInfo, setUserInfo } = useContext(UserInfoContext);
    const { alertData, setAlertData } = useContext(AlertDataContext);
  
    useEffect(() => {
    
      const fetchAlerts = async () => {
        if(isLoggedIn){
        try {
          const url = `http://localhost:3001/alerts/${userInfo.id}`;
          
          console.log(`🤨😶🤐|| 🥓 file: Notificaciones.js:23 🥓 fetchAlerts 🥓 userInfo||`, userInfo)
          console.log("🤨😶🤐 ~ file: InicioDeSesion.js:40 ~ fetchAlerts ~ url||", url)
          const response = await fetch(url);
          console.log("🤨😶🤐 ~ file: InicioDeSesion.js:42 ~ fetchAlerts ~ response||", response)
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
      
          const data = await response.json();
          setAlertData(data.data.alert)
          console.log("🤨😶🤐 ~ file: InicioDeSesion.js:49 ~ fetchAlerts ~ data.data.alert||", data.data.alert)
        } catch (error) {
          console.error("Error:", error);
        }
      }else{console.log("Not posible");}
      };
      
      fetchAlerts();
    }, [isLoggedIn]);

    return ( 
        <>
        <section className="wrapper">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Identificador</th>
                <th scope="col">Tipo de alerta</th>
                <th scope="col">Descripción</th>
                <th scope="col">Severidad</th>
                <th scope="col">Fecha</th>
                <th scope="col">Usuarios notificados</th>
              </tr>
            </thead>
            <tbody>
            {alertData.map((alert) => (
                <Register key={alert.id} alert={alert} />
              ))}
            </tbody>
          </table>
        </section>
      </>
     );
}

export default Notificaciones;