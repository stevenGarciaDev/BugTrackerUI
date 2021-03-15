import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  max-width: 1200px;
`;

export const ProjectsGrid = styled.div`
  display: grid;
  gap: 30px;

  @media screen and (min-width: 800px) {
      grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
