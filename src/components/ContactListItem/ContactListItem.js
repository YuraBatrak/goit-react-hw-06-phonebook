import React from "react";
import PropTypes from "prop-types";
import s from "./ContactListItem.module.css";

export default function ContactListItem({ id, name, number, deleteFunc }) {
  return (
    <li key={id} className={s.item}>
      <span>{name} </span>
      <span>{number}</span>
      <button
        type="button"
        className={s.contactsbtn}
        onClick={() => deleteFunc(id)}
      >
        Delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string,
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  deleteFunc: PropTypes.func.isRequired,
};
