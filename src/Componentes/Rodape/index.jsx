import "./rodape.css"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export function Rodape() {
    return (
        <div className="rodape">
            <img src="src/Paginas/PaginasLink/LogoMain.png" className="rodape__img" />
            <div className="rodape__icons">
               
                <a href="https://wa.me/75982627812?text=Olá%2C%20quero%20saber%20mais%20sobre%20o%20projeto!"
                    target="_blank"
                    rel="noopener noreferrer" className="WhatsAppIcon"> <img src="src/Componentes/Rodape/whats.png" className="WhatsappIcon" /></a>
                <a href="https://www.linkedin.com/in/diogo-bispo-desenvolvedor-front-end?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="LinkedinIcon"><img src="src/Componentes/Rodape/linkdin.png" className="LinkdinIcon" /></a>
                <a href="https://www.instagram.com/diogo_bispo289?igsh=ZzgxZm5kZGFnbTdh" ><img src="src/Componentes/Rodape/insta.png" className="InstagramIcon" /></a>

            </div>
        </div>
    )
}