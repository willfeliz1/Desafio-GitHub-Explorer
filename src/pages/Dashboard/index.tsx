import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no GitHub</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/50719156?s=460&u=81ec30b299ffe9d9275b4e207d9c4760fcada87a&v=4"
            alt="William Felizardo"
          />
          <div>
            <strong>willfeliz1/primeiro-projeto-react</strong>
            <p>Aula de reactJS usando typecript dentro do bootcamp GoStack</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/50719156?s=460&u=81ec30b299ffe9d9275b4e207d9c4760fcada87a&v=4"
            alt="William Felizardo"
          />
          <div>
            <strong>willfeliz1/primeiro-projeto-react</strong>
            <p>Aula de reactJS usando typecript dentro do bootcamp GoStack</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/50719156?s=460&u=81ec30b299ffe9d9275b4e207d9c4760fcada87a&v=4"
            alt="William Felizardo"
          />
          <div>
            <strong>willfeliz1/primeiro-projeto-react</strong>
            <p>Aula de reactJS usando typecript dentro do bootcamp GoStack</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
