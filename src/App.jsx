import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Layout from './Paginas/PaginasLink';
import { VideoProvider } from './Componentes/UseContext';
import { Home } from './Paginas/Home';
import { Rodape } from './Componentes/Rodape';
import { NovoVideo } from './Paginas/NovoVideo';

function App() {
  return (
    <VideoProvider>
     <BrowserRouter>
      <Layout/>
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/Novovideo" element= {<NovoVideo/>}/>
      </Routes>
      <Rodape />
    </BrowserRouter>
    </VideoProvider>
     
  )
}

export default App