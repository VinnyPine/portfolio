import styled from "styled-components";

const StyledProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  height: 60%;

  .imageCase {
    width: 200px;
    height: 200px;
    overflow: hidden;
    border-radius: 50%;
    position: relative;

    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
      position: absolute;
      top: 0;
      right: 0;
    }
  }

  .textCase {
    h1,
    h3 {
      text-shadow: 2px 2px 4px #000;
      margin-top: 10px;
    }
  }

  @media (min-width: 900px) {
    scale: 1.2;
  }

  @media (min-width: 2000px) {
    scale: 1.6;
  }
`;

export default StyledProfile;
