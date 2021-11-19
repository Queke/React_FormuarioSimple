import React, { useState } from "react";
import useFormulario from "./hooks/useFormulario";
import Input from "./components/Input";
import Card from "./components/Card";
import Container from "./components/Container";
import Button from "./components/Button";

const App = () => {
  const [formulario, handleChange, reset] = useFormulario({
    name: "",
    lastname: "",
    correo: "",
  });
  const [usuarios, setUsuarios] = useState([]);

  const submit = (e) => {
    e.preventDefault();
    setUsuarios([...usuarios, formulario]);
    reset();
  };

  return (
    <div style={{ marginTop: "15%" }}>
      <Container>
        <Card>
          <div style={{ padding: 20 }}>
            <form onSubmit={submit}>
              <Input
                label="Nombre "
                name="name"
                value={formulario.name}
                onChange={handleChange}
                placeholder="Nombre"
              />
              <Input
                label="apellido "
                name="lastname"
                value={formulario.lastname}
                onChange={handleChange}
                placeholder="Apellido"
              />
              <Input
                label="Correo "
                name="correo"
                value={formulario.correo}
                onChange={handleChange}
                placeholder="Correo"
              />
              <Button>Enviar</Button>
            </form>
          </div>
        </Card>
        <Card>
          <ul>
            {usuarios.map((u) => (
              <li key={u.correo}>{`${u.name} ${u.lastname} ${u.correo}`}</li>
            ))}
          </ul>
        </Card>
      </Container>
    </div>
  );
};

export default App;
