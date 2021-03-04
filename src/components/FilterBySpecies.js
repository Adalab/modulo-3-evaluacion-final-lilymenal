const FilterBySpecies = (props) => {
  const handleChange = (e) => {
    //console.log(e.target.value);
    //props.handleFilter("name", e.target.value);
    props.handleFilter({
      key: "specie",
      value: e.target.value,
    });
  };
  return (
    <form>
      <label className="form__label display-block" htmlFor="specie">
        Filtrar por especie:
      </label>
      <select
        className="form__input-text"
        name="specie"
        id="specie"
        onChange={handleChange}
      >
        <option value="all">Todos</option>
        <option value="Human">Humano</option>
        <option value="Alien">Alien</option>
      </select>
    </form>
  );
};
export default FilterBySpecies;