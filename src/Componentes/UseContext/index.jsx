import { createContext, useEffect, useState } from "react";

export const VideoContext = createContext();

export function VideoProvider({ children }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/dados")
      .then((response) => response.json())
      .then((data) => setVideos(data))
      .catch((error) => console.error("Erro ao buscar vídeos:", error));
  }, []);

  function adicionarNovoVideo(novoVideo) {
    setVideos((prevVideos) => [...prevVideos, novoVideo]);
  }

  async function deletarVideo(id) {
    try {
      const response = await fetch(`http://localhost:3000/dados/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Erro ao excluir vídeo");
      }

      setVideos((prevVideos) => prevVideos.filter((video) => video.id !== id));
    } catch (error) {
      console.error("Erro ao excluir vídeo:", error);
    }
  }

  return (
    <VideoContext.Provider value={{ videos, deletarVideo, adicionarNovoVideo }}>
      {children}
    </VideoContext.Provider>
  );
}
