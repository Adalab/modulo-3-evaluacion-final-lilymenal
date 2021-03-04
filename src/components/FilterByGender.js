const FilterByGender = (props) => {
  const handleChange = (e) => {
    //console.log(e.target.value);
    //props.handleFilter("name", e.target.value);
    props.handleFilter({
      key: "gender",
      value: e.target.value,
    });
  };
  return (
    <form>
      <label className="form__label display-block" htmlFor="gender">
        Filtrar por género:
      </label>
      <select
        className="form__input-text"
        name="gender"
        id="gender"
        onChange={handleChange}
      >
        <option value="all">Todos</option>
        <option value="Female">Mujer</option>
        <option value="Male">Hombre</option>
        <option value="unknown">Desconocido</option>
      </select>
    </form>
  );
};
export default FilterByGender;
