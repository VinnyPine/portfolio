import styled from "styled-components";

const StyledProjects = styled.div`
  max-width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: flex-start;
  justify-content: center;

  > div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 10px;

    > img {
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
`;

export default StyledProjects;
