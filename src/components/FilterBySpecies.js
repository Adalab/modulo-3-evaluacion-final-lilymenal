import PropTypes from "prop-types";

const FilterBySpecies = (props) => {
  const handleChange = (e) => {
    props.handleFilter({
      key: "specie",
      value: e.target.value,
    });
  };
  return (
    <>
      <label className="form__label" htmlFor="specie">
        SPECIE
      </label>
      <select
        className="form__input-text"
        name="specie"
        id="specie"
        value={props.specie}
        onChange={handleChange}
      >
        <option value="all">All</option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
      </select>
    </>
  );
};

FilterBySpecies.propTypes = {
  characterProp: PropTypes.shape({
    specie: PropTypes.string,
  }),
};

export default FilterBySpecies;
