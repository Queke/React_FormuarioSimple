import React from "react";
import useFormulario from "./hooks/useFormulario";
import Input from "./components/Input";
import Card from "./components/Card";
import Container from "./components/Container";

const App = () => {
  const [formulario, handleChange] = useFormulario({ name: "", lastname: "" });

  console.log(formulario);
  return (
    <Container>
      <Card>
        <form>
          <Input
            label="Nombre "
            name="name"
            value={formulario.name}
            onChange={handleChange}
          />
          <Input
            label="apellido "
            name="lastname"
            value={formulario.lastname}
            onChange={handleChange}
          />
        </form>
      </Card>
    </Container>
  );
};

export default App;
