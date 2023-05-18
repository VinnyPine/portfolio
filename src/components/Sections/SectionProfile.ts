import styled from "styled-components";
import backgroundImg from "../../assets/backgroundCode.png";

const SectionProfile = styled.section`
  background-color: var(--color-primary-100);
  box-shadow: 0px 0px 20px 0px inset #9f9f9f5e;

  position: relative;
  isolation: isolate;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    opacity: 0.2;
    filter: blur(1.5px);

    background-image: url(${backgroundImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    gap: 10px;
    height: 100vh;
    /* opacity: 1; */
  }
`;

export default SectionProfile;
