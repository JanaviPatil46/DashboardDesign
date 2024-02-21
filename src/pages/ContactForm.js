import React, { useState } from "react";

const ContactForm = () => {
  const [contacts, setContacts] = useState([{ name: "", email: "" }]);
  const [submittedContacts, setSubmittedContacts] = useState([]);

  const handleInputChange = (index, event) => {
    const newContacts = [...contacts];
    newContacts[index][event.target.name] = event.target.value;
    setContacts(newContacts);
  };

  const handleAddContact = () => {
    setContacts([...contacts, { name: "", email: "" }]);
  };

  const handleRemoveContact = (index) => {
    const newContacts = [...contacts];
    newContacts.splice(index, 1);
    setContacts(newContacts);
  };

  const handleSubmitContact = (index) => {
    const updatedSubmittedContacts = [...submittedContacts, contacts[index]];
    setSubmittedContacts(updatedSubmittedContacts);
    setContacts([{ name: "", email: "" }]);
  };

  const handleRemoveSubmittedContact = (index) => {
    const updatedSubmittedContacts = [...submittedContacts];
    updatedSubmittedContacts.splice(index, 1);
    setSubmittedContacts(updatedSubmittedContacts);
  };

  const handleSendContact = (index) => {
    // Log data with only the name
    console.log("Sending contact name:", submittedContacts[index].name);
console.log("Sending contact email:", submittedContacts[index].email)
    // Update the submitted contact with only the name
    const updatedSubmittedContacts = [...submittedContacts];
    updatedSubmittedContacts[index] = { name: submittedContacts[index].name, email: "" };
    setSubmittedContacts(updatedSubmittedContacts);
  };

  return (
    <div>
      {submittedContacts.map((contact, index) => (
        <div key={index}>
          <p> Contact {index + 1}:</p>
          <p> {contact.name}</p>
          {contact.email && <p>Email: {contact.email}</p>}
          <button type="button" onClick={() => handleRemoveSubmittedContact(index)}>
            Remove
          </button>
          <button type="button" onClick={() => handleSendContact(index)}>
            Send
          </button>
        </div>
      ))}

      <form>
        {contacts.map((contact, index) => (
          <div key={index}>
            <label htmlFor={`name${index}`}>Name:</label>
            <input type="text" name="name" id={`name${index}`} value={contact.name} onChange={(e) => handleInputChange(index, e)} />

            <label htmlFor={`email${index}`}>Email:</label>
            <input type="text" name="email" id={`email${index}`} value={contact.email} onChange={(e) => handleInputChange(index, e)} />

            <button type="button" onClick={() => handleRemoveContact(index)}>
              Remove
            </button>

            <button type="button" onClick={() => handleSubmitContact(index)}>
              Submit Contact
            </button>
          </div>
        ))}

        <button type="button" onClick={handleAddContact}>
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;