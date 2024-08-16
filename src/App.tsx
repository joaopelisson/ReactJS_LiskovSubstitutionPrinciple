import "./App.css";
import { Button, StyledButton } from "./components/Button";
import { Input, InputWithLabel } from "./components/Input";

function App() {
  return (
    <div>
      <StyledButton>Hello World</StyledButton>

      <Button>Hello World</Button>

      <Input />
      <InputWithLabel label="hello" />
    </div>
  );
}

export default App;
