import React from "react";
import Button from "./Button";
import Input from "./Input";
import useFormulario from "../hooks/useFormulario";

const UserForm = ({ submit }) => {
  const [formulario, handleChange, reset] = useFormulario({
    name: "",
    lastname: "",
    correo: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    submit(formulario);
    reset();
  };
  return (
    <form onSubmit={handleSubmit}>
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
  );
};
export default UserForm;
