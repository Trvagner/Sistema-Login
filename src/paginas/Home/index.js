import React from "react";
import { useNavigate } from "react-router-dom";
import Botao from "../../componentes/Botao";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";
import produto from '../../assets/imagens/integracoes.jpeg'
import  product from '../../assets/imagens/desenvolvimento.jpeg'
//import Bot from "../../componentes/Bot";


const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <C.Container>
      <C.Title>
        Trazendo soluções inovadoras, fazendo você evoluir!
      </C.Title>
      <C.texto>
        Presente no mercado de inovações tecnológicas desde 2020, 
        a Inovatec tem como missão levar ao seu cliente o que há 
        de mais inovador e atual no mercado!
        Se você é como a gente apaixonado por uma boa novidade, 
        adquira um dos nossos produtos e fique antenado no mundo das 
        Inovações!
      </C.texto>
      <section>
          <C.lista>
            <C.integracoes>
              <C.imgprodutos
                src={produto}
                alt="Integrações"
                title="Integrações"
              />
              <C.imgtitulo>Integrações</C.imgtitulo>
              </C.integracoes>       
            <C.desenvolvimento>
              <C.imgprodutos
                src={product} 
                alt="Desenvolvimento"
                title="Desenvolvimento"
              />
              <C.imgtitulo>Desenvolvimento</C.imgtitulo>
            </C.desenvolvimento>
        </C.lista>
      </section>

    <C.botaoSair>
      <Botao Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </Botao>  
    </C.botaoSair>

    </C.Container>
    
  );
};



export default Home;
