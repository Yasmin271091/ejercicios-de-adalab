function Filters({ filterAge, onChange }) {
  const handleChange = (ev) => {
    onChange(ev.target.value);
  };

  return (
    <form className="mt-1 mb-1">
      <label htmlFor="filterAge">Filtrar por edad</label>
      <select
        className="form__input-text"
        name="filterAge"
        id="filterAge"
        value={filterAge}
        onChange={handleChange}
      >
        <option value="all">Todos</option>
        <option value="20">20 años</option>
        <option value="22">22 años</option>
        <option value="19">19 años</option>
        <option value="21">21 años</option>
      </select>
    </form>
  );
}

export default Filters;
