import React, { useState } from "react";
import "./Home.css";
import Card from "../components/Card";

const Home = () => {
   const [texto, setTexto] = useState("");
   console.log(texto);

   return (
      <div className="homepage">
         <div className="header">
            <div>
               <h1>Book Finder</h1>
            </div>

            <div className="input">
               <input
                  type="text"
                  placeholder="Type author, book name, subject"
                  onChange={(e) => setTexto(e.target.value)}
               ></input>
               <button type="button">SEARCH</button>
            </div>
         </div>

         <div className="livros">
            <Card
               titulo="A sereia de Harry"
               autor="julio verne"
               editora="MaisLivros"
               ano="1895"
            />
            <Card
               titulo="A sereia de Harry"
               autor="julio verne"
               editora="MaisLivros"
               ano="1895"
            />
         </div>
      </div>
   );
};

export default Home;
