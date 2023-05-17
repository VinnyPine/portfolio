import styled from "styled-components";

interface iFooterProps {
  readonly showButton: boolean;
}

const StyledFooter = styled.footer<iFooterProps>`
  display: flex;
  flex-direction: column;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  height: 80px;
  background-color: var(--color-primary-100);
  position: relative;

  .btBackToTop {
    position: fixed;
    bottom: 25px;
    right: 25px;

    > a > svg {
      color: var(--color-black);
    }

    @media (min-width: 600px) {
      scale: 2;
    }
  }
`;

export default StyledFooter;
