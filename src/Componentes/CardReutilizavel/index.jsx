import { useContext, useState } from "react";

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import InfoIcon from '@mui/icons-material/Info';
import CloseIcon from '@mui/icons-material/Close';


import { Editar } from "../Editar";
import "./card.css";
import { VideoContext } from "../UseContext";

export function Card({ videoID, videoURL, videoDescricao }) {
    const { deletarVideo } = useContext(VideoContext)
    const [mostrarEditar, setMostrarEditar] = useState(false);
    const [mostrarDescricao, setMostrarDescricao] = useState(false)

    const ehDoYouTube = (url) => {
        return url.includes("youtube.com") || url.includes("youte.be")
    }


    return (
        <section className="card__itens">
            <div className="card__container">

                {ehDoYouTube(videoURL) ? (
                    <iframe
                        className="card__video"
                        src={videoURL}
                        title="YouTube video player"
                        frameBorder="2"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                ) : (

                    <video className="card__video" controls>
                        <source src={videoURL} type="video/mp4" />
                        Seu navegador não suporta a reprodução de vídeos.
                    </video>
                )}

                <div className="card__conteudo">
                    <button className="card__delete" onClick={() => deletarVideo(videoID)} >
                        <DeleteForeverIcon />
                        DELETAR
                    </button>
                    {videoDescricao && videoDescricao.length > 0 && (
                        <button className="card__descricao" onClick={() => setMostrarDescricao(!mostrarDescricao)}>
                            {mostrarDescricao ? <CloseIcon /> : < InfoIcon />}
                            DESCRIÇÃO
                        </button>
                    )}
                </div>
                {mostrarDescricao && (
                    <div className="descricao-quadro">
                        <p>{videoDescricao}</p>
                    </div>
                )}
            </div>


            {mostrarEditar && <Editar onClose={() => setMostrarEditar(false)} />}
        </section>
    );
}
