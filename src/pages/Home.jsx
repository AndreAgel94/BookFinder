import React, { useState } from "react";
import "./Home.css";
import Card from "../components/Card";
import axios from "axios";
import NoImage from "../assets/ImgPlaceholder.png";

const Home = () => {
   const [datas, setDatas] = useState([]);
   const [texto, setTexto] = useState("");

   function Api() {
      axios
         .get(`https://www.googleapis.com/books/v1/volumes?q=${texto}`)
         .then((response) => {
            const items = response.data.items;
            setDatas(items);
            console.log(items);
         });
   }

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
                  value={texto}
                  onChange={(e) => setTexto(e.target.value)}
               ></input>
               <button type="button" onClick={Api}>
                  SEARCH
               </button>
            </div>
         </div>

         <div className="livros">
            {datas.map((item) => (
               <Card
                  key={item.id}
                  image={
                     item.volumeInfo.imageLinks === undefined
                        ? "no image"
                        : item.volumeInfo.imageLinks.thumbnail
                  }
                  titulo={item.volumeInfo.title}
                  autor={item.volumeInfo.authors}
                  editora={item.volumeInfo.publisher}
                  ano={item.volumeInfo.publishedDate}
                  link={item.volumeInfo.infoLink}
               />
            ))}
         </div>

         <footer>
            Made by <a href="https://github.com/AndreAgel94"> AndreAgel </a>
         </footer>
      </div>
   );
};

export default Home;
