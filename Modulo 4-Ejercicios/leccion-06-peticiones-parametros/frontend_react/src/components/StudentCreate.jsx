import "../styles/form.scss";

function StudentCreate({ student, onChange, onSubmit, onCancel }) {
  const handleInput = (ev) => {
    onChange(ev.target.id, ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <legend className="title--big">Añadir un nueva alumna</legend>
      <label className="form__label" htmlFor="name">
        Nombre
        <input
          className="form__input-text"
          type="text"
          name="nombre"
          id="nombre"
          value={student.nombre}
          onInput={handleInput}
        />
      </label>

      <label className="form__label" htmlFor="apellidos">
        Apellidos
        <input
          className="form__input-text"
          type="text"
          name="apellidos"
          id="apellidos"
          value={student.apellidos}
          onInput={handleInput}
        />
      </label>

      <label className="form__label" htmlFor="edad">
        Edad
        <input
          className="form__input-text"
          type="number"
          name="edad"
          id="edad"
          value={student.edad}
          onInput={handleInput}
        />
      </label>

      <label className="form__label" htmlFor="correo_electronico">
        Correo Electronico
        <input
          className="form__input-text"
          type="text"
          name="correo_electronico"
          id="correo_electronico"
          value={student.correo_electronico}
          onInput={handleInput}
        />
      </label>

      <input className="form__btn" type="submit" value="Guardar" />
      <input
        className="form__btn"
        type="reset"
        value="Cancelar"
        onClick={onCancel}
      />
    </form>
  );
}

export default StudentCreate;
