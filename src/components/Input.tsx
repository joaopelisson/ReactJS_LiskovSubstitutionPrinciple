import { InputHTMLAttributes, useId } from "react";

type TInput = InputHTMLAttributes<HTMLInputElement>;

const Input = ({ name, type = "text", ...rest }: TInput) => {
  return <input type={type} name={name} {...rest} />;
};

type TInputWithLabel = TInput & {
  label: string;
};

//See how we also apply it to the input, we create a new component, based on the `Input`,
//being a subtype without changing the functionality of the original
const InputWithLabel = ({ label, ...rest }: TInputWithLabel) => {
  const inputId = useId();
  return (
    <>
      <label htmlFor={inputId}>{label}</label>
      <Input id={inputId} {...rest} />
    </>
  );
};

export { Input, InputWithLabel };
