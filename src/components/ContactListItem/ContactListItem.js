import React from "react";
import PropTypes from "prop-types";
import s from "./ContactListItem.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/actions";

export default function ContactListItem({ id, name, number }) {
  const dispatch = useDispatch();
  return (
    <li key={id} className={s.item} id={id}>
      <span>{name} </span>
      <span>{number}</span>
      <button
        type="button"
        className={s.contactsbtn}
        onClick={() => dispatch(deleteContact(id))}
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
};
