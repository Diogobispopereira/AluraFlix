import { useContext, useEffect, useState } from "react";
import "./cardMenu.css";
import { Card } from "../CardReutilizavel";
import { VideoContext } from "../UseContext";


 function CardMenu() {
  const { videos } = useContext(VideoContext);
  const novasCategorias = JSON.parse(localStorage.getItem("novasCategorias")) || [];

  return (
    <section className="cardMenu">
      {novasCategorias.map((categoria, index) => {
        const videosFiltrados = videos.filter(
          (video) => video.categoria.toLowerCase() === categoria.nome.toLowerCase()
        ); 
   if(videosFiltrados.length === 0) return null;
        return (
          <div key={index} className="categoria">
            <h2 className="categoria-container" style={{ backgroundColor: categoria.cor || "#ddd" }}>
              {categoria.nome}
            </h2>
            <div className="card__itens">
              {videosFiltrados.length > 0 ? (
                videosFiltrados.map((item) => (
                  <Card 
                  key={item.id}
                   videoDescricao={item.descricao}
                   videoID={item.id} 
                   videoURL={item.video} 
                   />
                ))
              ) : (
                <p>Sem vídeos nesta categoria.</p>
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
}
 export default CardMenu