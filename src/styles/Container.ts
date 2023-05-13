import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-right: 16px;
  padding-left: 16px;
  max-width: 600px;

  @media (min-width: 600px) {
    width: 95%;
    max-width: 900px;
    height: 100%;
    padding: 0;
    margin: 0 auto;
  }

  @media (min-width: 900px) {
    width: 95%;
    max-width: 1200px;
    height: 100%;
    padding: 0;
    margin: 0 auto;
  }
`;

export default Container;
