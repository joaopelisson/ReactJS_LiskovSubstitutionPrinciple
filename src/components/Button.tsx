import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

type TButton = ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ children, type = "button", ...rest }: Readonly<TButton>) {
  return (
    <button type={type} {...rest}>
      {children}
    </button>
  );
}

// Although ideal it is in separate files, I will follow the same for didactic purposes
const StyledButton = styled(Button).attrs((props) => ({
  type: props.type ?? "button",
}))`
  // Theoretically, this is already LSP
  border: none;
  background-color: #f00;
`;

export { Button, StyledButton };
