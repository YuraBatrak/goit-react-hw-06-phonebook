import { useDispatch } from "react-redux";
import { filterContact } from "../../redux/actions";
import s from "./Filter.module.css";

export default function Filter() {
  const dispatch = useDispatch();

  const onChange = (event) => dispatch(filterContact(event.target.value));

  return (
    <label htmlFor="search">
      <input
        className={s.filter}
        id="search"
        placeholder="search contact"
        type="text"
        // value={value}
        onChange={onChange}
      />
    </label>
  );
}
