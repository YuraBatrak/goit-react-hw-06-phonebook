import React from "react";
import PropTypes from "prop-types";

export default function Section({ text, children }) {
  return (
    <section>
      <h2>{text}</h2>
      {children}
    </section>
  );
}

Section.propTypes = {
  text: PropTypes.string,
  children: PropTypes.any,
};
