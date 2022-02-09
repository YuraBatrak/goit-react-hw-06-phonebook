import React from "react";
import { useSelector } from "react-redux";
import Section from "../Section/Section ";
import ContactListItem from "../ContactListItem/ContactListItem";
import PropTypes from "prop-types";
import s from "./ContactList.module.css";

export default function ContactList() {
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
            <ContactListItem name={name} key={id} number={number} id={id} />
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
