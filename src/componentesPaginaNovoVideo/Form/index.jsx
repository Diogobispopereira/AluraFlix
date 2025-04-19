import { useContext, useState } from "react";
import "./formulario.css";
import { VideoContext } from "../../Componentes/UseContext";

export function Formulario() {
  const { adicionarNovoVideo } = useContext(VideoContext);
  const [formData, setFormData] = useState({
    titulo: "",
    categoria: "",
    imagem: "",
    video: "",
    descricao: "",
    musica: "",
    corCategoria: "",
    novaCategoria: "",
  });

  
  const [novasCategorias, setNovasCategorias] = useState(() => {
    const savedCategories = localStorage.getItem("novasCategorias");
    return savedCategories ? JSON.parse(savedCategories) : [];
  });

  const handleChange = (e) => {
    setFormData({
      ...formData, [e.target.name]: e.target.value
    });
  };

  const handleAddCategoria = () => {
    const nomeNovaCategoria = formData.novaCategoria.trim().toLocaleLowerCase();
    const categoriaExiste = novasCategorias.some(
      (cat) => cat.nome.toLocaleLowerCase() === nomeNovaCategoria
    );
    if (categoriaExiste) {
      alert("❌ Essa categoria já existe.");
      return;
    }

    if (formData.novaCategoria && formData.corCategoria) {
      const novaCategoria = {
        nome: formData.novaCategoria,
        cor: formData.corCategoria,
      };
      const updatedCategorias = [...novasCategorias, novaCategoria];
      setNovasCategorias(updatedCategorias);

      
      localStorage.setItem("novasCategorias", JSON.stringify(updatedCategorias));

      setFormData({
        ...formData,
        novaCategoria: "",
        corCategoria: "",
      });
    } else {
      alert("Preencha o nome da categoria e a cor");
    }
  };

  const handleExcluirCategoria = (index) => {
    const atualizadas = [...novasCategorias];
    atualizadas.splice(index, 1);

    setNovasCategorias(atualizadas);
    localStorage.setItem("novasCategorias", JSON.stringify(atualizadas));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Enviando vídeo:", formData);
    try {
      const response = await fetch("http://localhost:3000/dados", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error("Erro ao enviar os dados!");

      const novoVideo = await response.json();
      console.log("Novo vídeo salvo:", novoVideo);

      adicionarNovoVideo(novoVideo);

      alert("✅ Vídeo adicionado com sucesso!");

      setFormData({
        titulo: "",
        categoria: "",
        imagem: "",
        video: "",
        descricao: "",
        musica: "",
        novaCategoria: "",
        corCategoria: "",
      });
    } catch (error) {
      console.error("Erro ao adicionar vídeo:", error);
      alert("❌ Erro ao adicionar vídeo. Tente novamente.");
    }
  };

  return (
    <section className="formulario">
      <div className="formulario__container">
        <h2 className="formulario__titulo">Criar Card</h2>

        <form className="formulario__itens" onSubmit={handleSubmit}>
          <fieldset className="formulario__grupo">
            <div className="formulario__caixa-input">
              <label htmlFor="titulo">Título</label>
              <input
                className="input"
                type="text"
                name="titulo"
                placeholder="Digite o título"
                required
                value={formData.titulo}
                onChange={handleChange}
              />
            </div>

            <div className="formulario__caixa-input">
              <label htmlFor="categoria">Categoria</label>
              <select
                className="input"
                id="categoria"
                name="categoria"
                required
                value={formData.categoria}
                onChange={handleChange}
              >
                <div className="option">
                  <option value="">Selecione uma categoria</option>
                {novasCategorias.map((categoria, index) => (
                
                  <option
                    key={index}
                    value={categoria.nome}
                    style={{ color: `#FFFFF` }
                    }>
                
                    {categoria.nome}
                  </option>
                ))}
                </div>
                
              </select>
            </div>
          </fieldset>

        
          <fieldset className="formulario__grupo">
            <div className="formulario__caixa-input">
              <label htmlFor="novaCategoria">Nova Categoria</label>
              <input
                className="input"
                type="text"
                name="novaCategoria"
                placeholder="Digite a nova categoria"
                value={formData.novaCategoria}
                onChange={handleChange}
              />
            </div>

            <div className="formulario__caixa-input">
              <label htmlFor="corCategoria">Cor da Categoria</label>
              <input
                className=" cor"
                type="color"
                name="corCategoria"
                value={formData.corCategoria}
                onChange={handleChange}
              />
            </div>

            <button type="button" onClick={handleAddCategoria} className="botao adicionar__categoria">
              Adicionar Categoria
            </button>
          </fieldset>



          <fieldset className="formulario__grupo">
            <div className="formulario__caixa-imagem">
              <label htmlFor="imagem">Imagem</label>
              <input
                className="input-imagem"
                type="url"
                id="imagem"
                name="imagem"
                placeholder="Link da imagem (obrigatório)"
                value={formData.imagem}
                onChange={handleChange}
              />
            </div>

            <div className="formulario__caixa-video">
              <label htmlFor="video">Video</label>
              <input
                className="input-video"
                type="url"
                id="video"
                name="video"
                placeholder="Digite o link do video"
                required
                value={formData.video}
                onChange={handleChange}
              />
            </div>
          </fieldset>

          <fieldset className="formulario__grupo">
            <div className="formulario__caixa-input">
              <label htmlFor="musica">Nome Da Música</label>
              <input
                className="input"
                type="text"
                name="musica"
                placeholder="Digite o nome da música"
                required
                value={formData.musica}
                onChange={handleChange}
              />
            </div>

            <div className="excluir">
            <label className="texto-excluir" htmlFor="Excluir">Excluir categoria </label>
              <div className="categoria__excluir">
                <ul className="lista-categorias">
                  {novasCategorias.map((cat, index) => (
                    <li key={index} className="item-categoria">
                      <span style={{ color: cat.cor }}>{cat.nome}</span>
                      <button
                        type="button"
                        className="botao-excluir"
                        onClick={() => handleExcluirCategoria(index)}
                      >
                        ❌
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>


          </fieldset>

          <div className="formulario__caixa-descricao">
            <label htmlFor="descricao">Descrição</label>
            <textarea
              className="descricao"
              id="descricao"
              name="descricao"
              placeholder="Digite uma breve descrição"
              rows="10"
              value={formData.descricao}
              onChange={handleChange}
              
            ></textarea>
          </div>

          <div className="formulario__botoes">
            <button type="submit" className="botao guardar">
              Guardar
            </button>
            <button
              type="button"
              className="botao limpar"
              onClick={() => setFormData({
                titulo: "",
                categoria: "",
                imagem: "",
                video: "",
                descricao: "",
                musica: "",
                novaCategoria: "",
                corCategoria: "",
              })}
            >
              Limpar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}


