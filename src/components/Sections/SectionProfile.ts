import styled from "styled-components";

const SectionProfile = styled.section`
  background-color: var(--color-primary-100);
  box-shadow: 0px 0px 20px 0px inset #9f9f9f5e;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    height: 100vh;
  }
`;

export default SectionProfile;
