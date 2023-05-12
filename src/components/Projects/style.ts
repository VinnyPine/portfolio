import styled from "styled-components";

const StyledProjects = styled.div`
  max-width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: flex-start;
  justify-content: center;
  padding-bottom: 30px;

  > div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 15px;
    background-color: var(--color-white);
    padding: 15px;
    border-radius: 10px;

    > img {
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  @media (min-width: 450px) {
    > div {
      padding: 34px;
    }
  }

  @media (min-width: 900px) {
    flex-direction: row;
    gap: 10px;

    > div {
      padding: 12px;
    }
  }
`;

export default StyledProjects;
