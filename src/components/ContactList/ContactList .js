import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/actions";
import Section from "../Section/Section ";
import ContactListItem from "../ContactListItem/ContactListItem";
import PropTypes from "prop-types";
import s from "./ContactList.module.css";

export default function ContactList() {
  const dispatch = useDispatch();
  const onDeleteContact = (id) => dispatch(deleteContact(id));

  const getContactList = (state) => {
    const { filter, items } = state.contacts;
    const normalizedFilter = filter.toLowerCase();

    return items.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const contacts = useSelector(getContactList);
  return (
    <Section text="Contacts">
      <ul className={s.list}>
        {contacts.length === 0 ? (
          <p className={s.message}>Contact list is empty</p>
        ) : (
          contacts.map(({ name, id, number }) => (
            <ContactListItem
              deleteFunc={() => onDeleteContact(id)}
              name={name}
              key={id}
              number={number}
            />
          ))
        )}
      </ul>
    </Section>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
