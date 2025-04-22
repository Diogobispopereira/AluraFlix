import { Outlet, Link } from "react-router-dom";
import "./links.css";
import LogoMain from "../../Paginas/PaginasLink/LogoMain.png";

 function Layout() {
    return (
        <div className="links__container">
            <nav className="links__navegacao">
         
                <img  src={LogoMain}  className="link__imagem"/>
                <ul className="botao__link">
                    <li className="botao__home"><Link to="/">Home</Link></li>
                    <li className="botao__novoVideo" ><Link to="/NovoVideo">Novo video</Link></li>
                </ul>
       
            </nav>
            <Outlet />
        </div>
    );
};

export default Layout