import "./rodape.css"
import logoRodape  from "../../Componentes/Rodape/LogoMain.png";
import whatsapp  from "../../Componentes/Rodape/whats.png"
import  instagram from "../../Componentes/Rodape/insta.png"
import  linkidin from "../../Componentes/Rodape/linkdin.png"

export function Rodape() {
    return (
        <div className="rodape">
            <img src={logoRodape} className="rodape__img" />
            <div className="rodape__icons">
               
                <a href="https://wa.me/75982627812?text=Olá%2C%20quero%20saber%20mais%20sobre%20o%20projeto!"
                    target="_blank"
                    rel="noopener noreferrer" className="WhatsAppIcon"> 
                    <img src={whatsapp} />
                    </a>
                <a href="https://www.linkedin.com/in/diogo-bispo-desenvolvedor-front-end?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                 className="LinkedinIcon">
                    <img src={linkidin} />
                    </a>
                <a href="https://www.instagram.com/diogo_bispo289?igsh=ZzgxZm5kZGFnbTdh" className="InstagramIcon">
                    <img src={instagram} />
                    </a>

            </div>
        </div>
    )
}