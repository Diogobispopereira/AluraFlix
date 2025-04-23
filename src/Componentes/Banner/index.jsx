

import "./banner.css";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

function Banner() {
   const [videoBanner, setVideoBanner] = useState([]);
   const [loading, setLoading] = useState(true);
   const [imagens, setImagens] = useState("");

   useEffect(() => {
      fetch("https://my-json-server.typicode.com/Diogobispopereira/apiJson/dados")
         .then((response) => {
            if (!response.ok) {
               throw new Error(`Erro na requisição: ${response.status}`);
            }
            return response.json();
         })
         .then((dados) => {
           
            const filteredBanners = dados.filter(
               (item) => item.video && item.titulo && item.musica && item.imagem
            );
            setVideoBanner(filteredBanners);
            if (filteredBanners.length > 0) {
               setImagens(filteredBanners[0].imagem); 
            }
         })
         .catch((error) => {
            console.error("Erro ao carregar os vídeos", error);
         })
         .finally(() => setLoading(false)); 
   }, []);
   
   return (
      <article className="banner">

   <div
      className="banner__imagem"
      style={{ backgroundImage: `url(${imagens})` }}
   ></div>
        
         {loading ? (
            <p className="banner__loading">Carregando vídeos...</p>
         ) : videoBanner.length > 0 ? (
            <Swiper
               modules={[Autoplay, EffectFade]}
               effect="fade"
               spaceBetween={0}
               slidesPerView={1}
               autoplay={{ delay: 50000, disableOnInteraction: false }}
               loop={true}
               onSlideChange={(swiper) => {
                  const novaImagem = videoBanner[swiper.activeIndex].imagem;
                  const img = new Image();
                  img.src = novaImagem;
                  img.onload = () => {
                     setImagens(novaImagem);
                  };
               }

                  
               }
            >
               {videoBanner.map((bannerItem) => (
                  <SwiperSlide key={bannerItem.id}>
                     <div className="banner__container">
                        <div className="banner__conteudo">
                           <h2 className="banner__titulo">{bannerItem.titulo}</h2>
                           <p className="banner__musica"><strong>Música: </strong>{bannerItem.musica}</p>
                           {bannerItem.descricao && (
                              <p className="banner__paragrafo"><strong>Descrição: </strong>{bannerItem.descricao}</p>
                           )}
                        </div>

                        <iframe
                           className="banner__video"
                           src={bannerItem.video}
                           title={bannerItem.titulo}
                           frameBorder="0"
                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                           referrerPolicy="strict-origin-when-cross-origin"
                           allowFullScreen
                        ></iframe>
                     </div>
                  </SwiperSlide>
               ))}
            </Swiper>
         ) : (
            <p className="banner__error">Nenhum vídeo encontrado.</p>
         )}
      </article>
   );
}

export default Banner;
