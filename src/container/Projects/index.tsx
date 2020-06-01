import React from 'react';

import { Container, ProjectsDiv, RepositoryDiv } from './styles';

const Projects: React.FC = () => {
  return (
    <Container id="projects">
      <ProjectsDiv>
        <h1>Projetos</h1>
        <RepositoryDiv>
          <h3>Repositorio</h3>
          <p>Descrição do repositorio</p>
          <p>typescript</p>
        </RepositoryDiv>
        <RepositoryDiv>
          <h3>Repositorio</h3>
          <p>Descrição do repositorio</p>
          <p>typescript</p>
        </RepositoryDiv>
        <RepositoryDiv>
          <h3>Repositorio</h3>
          <p>Descrição do repositorio</p>
          <p>typescript</p>
        </RepositoryDiv>
      </ProjectsDiv>
    </Container>
  );
};
export default Projects;
