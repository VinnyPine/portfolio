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

  > a.MuiButtonBase-root {
    transition: opacity 2s;
    position: fixed;
    right: 15px;
    bottom: 25px;
    ${({ showButton }) => (showButton ? null : "opacity: 0;")}
  }
`;

export default StyledFooter;
