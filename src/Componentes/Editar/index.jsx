import "./editar.css";
import CloseIcon from '@mui/icons-material/Close';
import { FormReutilizavel } from "../Formulario-Reutilizavel";

export function Editar({ onClose }) {
    return (
        <div className="editar__overlay">
            <section className="editar__container">
                <button className="editar__icons-fechar" onClick={onClose}>
                    <CloseIcon className="editar__fechar" />
                </button>
                <div className="editar__itens">
                    <h2>EDITAR CARD:</h2>
                    <div className="editar__form">
                        <FormReutilizavel label="Título" placeholder="Digite o título..." />
                        <FormReutilizavel label="Categoria" options={["Digite a categoria...", "Sertanejo", "Samba", "Pagode", "internacional"]} type="textarea" />
                        <FormReutilizavel label="Imagem" placeholder="Digite a URL da imagem..." type="url" />
                        <FormReutilizavel label="Vídeo" placeholder="Digite a URL do vídeo..." type="url" />
                        <FormReutilizavel label="Descrição" placeholder="Descrição..." type="textArea" />
                    </div>
                    <div className="editar__botoes">
                        <button type="button" className="editar__guardar">Guardar</button>
                        <button type="reset" className="editar__limpar">Limpar</button>
                    </div>
                </div>
            </section>
        </div>
    );
}


