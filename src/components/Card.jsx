import React from "react";
import image from "../assets/content.jpeg";
import "./Card.css";

const Card = (props) => {
   return (
      <div className="card">
         <div className="image">
            <img alt="book" src={image}></img>
         </div>
         <div className="data">
            <h1>{props.titulo}</h1>
            <h3>
               <span>Autor: {props.autor}</span>
               <br />
               <span>Editora: {props.editora}</span>
               <br />
               <span>Ano: {props.ano}</span>
            </h3>
         </div>
      </div>
   );
};

export default Card;
