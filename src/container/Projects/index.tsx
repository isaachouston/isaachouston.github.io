import React, { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';

import Slider from 'react-slick';

import api from '../../services/api';
import settingSlider from '../../configSlider';

import { Container, RepositoryDiv, ArrowConfig } from './styles';

interface Repository {
  id: number;
  name: string;
  language: string;
  html_url: string;
  color: string;
}

const Projects: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    async function loadProject(): Promise<void> {
      const response = await api.get('users/isaachouston/repos?sort=id:asc');

      const repository = response.data;

      setRepositories(repository);
      console.log(repository);
    }

    loadProject();
  }, []);

  return (
    <Fade direction="bottom" delay={1000} triggerOnce>
      <Container id="projects">
        <h1>Projetos</h1>
        <ArrowConfig>
          <Slider {...settingSlider}>
            {repositories.map(repository => (
              <a key={repository.id} href={repository.html_url}>
                <RepositoryDiv>
                  <h3>{repository.name}</h3>
                  <p>{repository.language}</p>
                </RepositoryDiv>
              </a>
            ))}
          </Slider>
        </ArrowConfig>
      </Container>
    </Fade>
  );
};

export default Projects;
