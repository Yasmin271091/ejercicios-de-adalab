function StudentItem({ student }) {
  const { nombre, apellidos, edad, correo_electronico } = student;

  return (
    <>
      <h2 className="card__title">{nombre}</h2>
      <p className="card__description">{apellidos}</p>
      <p className="card__title">{edad} años</p>
      <p className="card__title">{correo_electronico}€</p>
    </>
  );
}

export default StudentItem;
