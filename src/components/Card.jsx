import React from "react";
import "./Card.css";

const Card = (props) => {
   return (
      <div className="card">
         <div className="image">
            <img alt="book" src={props.image}></img>
         </div>
         <div className="data">
            <h2>{props.titulo}</h2>
            <h3>
               <span>Autor: {props.autor}</span>
               <br />
               <span>Editora: {props.editora}</span>
               <br />
               <span>Ano: {props.ano}</span>
               <br />
               <a href={props.link}>Saiba mais</a>
            </h3>
         </div>
      </div>
   );
};

export default Card;
