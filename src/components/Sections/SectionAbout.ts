import styled from "styled-components";

const SectionAbout = styled.section`
  background-color: var(--color-gray-700);

  > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    padding-top: 20px;
    padding-bottom: 20px;

    @media (min-width: 600px) {
      gap: 20px;
    }

    @media (min-width: 900px) {
      gap: 30px;
    }
  }
`;

export default SectionAbout;
