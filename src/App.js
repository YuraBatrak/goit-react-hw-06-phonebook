import "./App.css";

import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList ";

function App() {
  return (
    <div className="App">
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;
