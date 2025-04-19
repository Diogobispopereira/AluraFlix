// import { useState, useEffect } from "react";

// function Menu() {
//   const [videoData, setVideoData] = useState([]);
//   const baseUrl = "http://localhost:3000"; // Defina a URL base do servidor

//   useEffect(() => {
//     function buscarVideo() {
//       fetch(`${baseUrl}/dados`) // Usando a URL base para concatenar com o endpoint
//         .then((response) => response.json())
//         .then((data) => {
//           console.log(data); // Os dados recebidos
//           setVideoData(data.dados || []); // Atualiza o estado com os dados
//         })
//         .catch((error) => {
//           console.error("Erro ao buscar dados:", error);
//           setVideoData([]); // Caso ocorra um erro
//         });
//     }

//     buscarVideo(); // Chama a função para buscar os dados

//   }, []); // A dependência vazia indica que a chamada será feita uma vez após o componente ser montado

//   return (
//     <div>
//       {videoData.map((item) => {
//         console.log("item sendo processado:", item); // Verifique os dados do item no console
//         return (
//           <div key={item.id}>
//             <img
//               src={`${baseUrl}${item.img}`} // Concatena a URL base com o caminho da imagem
//               alt={item.title}
//             />
//           </div>
//         );
//       })}
//       <img src="img/baixado.jpg" alt="Imagem baixada" />
//     </div>
//   );
// }

// export default Menu;