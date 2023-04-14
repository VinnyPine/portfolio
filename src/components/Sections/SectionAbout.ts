import styled from "styled-components";

const SectionAbout = styled.section`
  > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    min-height: 70vh;
    background-color: var(--color-gray-700);
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

export default SectionAbout;
