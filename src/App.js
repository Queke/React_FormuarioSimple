import React from "react";
import useFormulario from "./hooks/useFormulario";
import Input from "./components/Input";
import Card from "./components/Card";
import Container from "./components/Container";
import Button from "./components/Button";

const App = () => {
  const [formulario, handleChange] = useFormulario({
    name: "",
    lastname: "",
    correo: "",
  });

  console.log(formulario);
  return (
    <Container>
      <Card>
        <div style={{ padding: 20 }}>
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
            <Input
              label="Correo "
              name="correo"
              value={formulario.correo}
              onChange={handleChange}
            />
            <Button>Enviar</Button>
          </form>
        </div>
      </Card>
    </Container>
  );
};

export default App;
