import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiCirclePlus } from "react-icons/ci";
import { SlArrowLeft, SlArrowRight, SlQuestion, SlOptionsVertical } from "react-icons/sl";
import { RxCross2 } from "react-icons/rx";
import "../pages/createAcoount.css";
import SwitchButton from '../component/SwitchButton'
function CreateAccount({ handleAddAccount }) {
  const [selectedOption, setSelectedOption] = useState("account");
  // // const [selectedOptionComapny, setSelectedOptionCompany] = useState("company");
  // const [showAccountInfo, setShowAccountInfo] = useState(false);
  // const handleRadioChange = (option) => {
  //   setSelectedOption(option);
  // };
  // const handleContactsButtonClick = () => {
  //   setShowAccountInfo(true);
  // };
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
            {/* <label htmlFor={`name${index}`}>Name:</label>
            <input type="text" name="name" id={`name${index}`} value={contact.name} onChange={(e) => handleInputChange(index, e)} />

            <label htmlFor={`email${index}`}>Email:</label>
            <input type="text" name="email" id={`email${index}`} value={contact.email} onChange={(e) => handleInputChange(index, e)} /> */}
            
            <div className="fname-container col-12">
              <label for= {`fname${index}`} className="label">First Name</label>
              <br />
              <input type="Text" id={`name${index}`} name="name" placeholder="name" className="fname col-12"value={contact.name} onChange={(e) => handleInputChange(index, e)} />
            </div>
            
            <div className="fname-container col-12">
              <label for= {`fname${index}`} className="label">Email</label>
              <br />
              <input type="email" id={`email${index}`} name="email" placeholder="email" className="fname col-12"value={contact.email} onChange={(e) => handleInputChange(index, e)} />
            </div>

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



    // <div className="createAccount col-12">
    //   <div className="header_title">{/* <div className="title">Account</div> */}</div>
    //   <div className="account-container2 col-12">
    //     <div className="account-header col-12">
    //       <h3 className="account_title">New Account</h3>
    //       <button className="header-button" onClick={() => handleAddAccount()}>
    //         <RxCross2 />
    //       </button>
    //     </div>

    //     <div className="accounttype_container col-12">
    //       <div className="sub-account col-6">
    //         <div className="account_info" style={{ fontWeight: selectedOption === "account" ? "bold" : "normal" }}>
    //           <input type="radio" id="account_info_radio" name="account_info_radio" checked={selectedOption === "account"} onChange={() => handleRadioChange("account")} />

    //           <lable for="account_info_radio">Account info</lable>
    //           {showAccountInfo && <span>1</span>}
    //         </div>
    //         <div className="rotate-btn">{selectedOption === "account" ? <SlArrowRight /> : <SlArrowLeft />}</div>

    //         <div className="company_info" style={{ fontWeight: selectedOption === "company" ? "bold" : "normal" }}>
    //           <input type="radio" id="company_info_radio" name="company_info_radio" checked={selectedOption === "company"} onChange={() => handleRadioChange("company")} />
    //           <lable for="company_info_radio">Comapny</lable>
    //         </div>
    //       </div>
    //     </div>
    //     <div className='account-main-container col-12'>
    //       <div className='account-title2 col-12'>
    //         <h4 className='account-title-header col-12' >Contacts <SlQuestion className="icon1" />
    //           <a href="#" className="contact-link" style={{ float: 'right', textDecoration: 'none', fontSize: '11px' }}>
    //             <CiCirclePlus style={{ color: 'blue', marginTop: '5px' }} /> Link existing contact</a>
    //         </h4>

    //       </div>
    //       <div className="account-view-container col-12">
    //         <div className="act-contact-form col-12" style={{ border: '1px solid black', heigh: 'auto', padding: '15px', borderRadius: '5px', marginTop: '5px' }}>
    //           <div className="contactform_header col-12">
    //             <h4>contact1</h4>
    //             <BsThreeDotsVertical style={{ color: 'blue' }} />
    //           </div>
    //           <div className="contact-form-container col-12">
    //             <form className="form-details col-12" style={{marginTop:'15px'}} >
    //               <div className="name-filds col-12">
    //                 <div className="fname-container col-12">
    //                   <label for="fname" className="label">First Name</label>
    //                   <br />
    //                   <input type="text" id="fname" name="firstname" placeholder="First Name" className="fname col-12" />
    //                 </div>
    //                 <div className="mname-container col-12">
    //                   <label for="fname" className="label">Middle Name</label>
    //                   <br />
    //                   <input type="text" id="fname" name="firstname" placeholder="Middle Name" className="fname col-12" />
    //                 </div>
    //                 <div className="lname-container col-12">
    //                   <label for="fname" className="label">Last Name</label>
    //                   <br />
    //                   <input type="text" id="fname" name="firstname" placeholder="Last Name" className="fname col-12" />
    //                 </div>
    //               </div>
    //               <div className="contact_name col-12">
    //                 <label for="contactname" className="contact">Contact Name</label>
    //                 <input type="text" id="contactname" name="contactname" placeholder="Contact Name" className="contactname col-12" />
    //               </div>
    //               <div className="company_name col-12">
    //                 <label for="companyname" className="company">Comapny Name</label>
    //                 <input type="text" id="companyname" name="companyname" placeholder="Comapny Name" className="companyname col-12" />
    //               </div>
    //               <div className="note col-12">
    //                 <label for="note" className="note">Note</label>
    //                 <input type="text" id="note" name="note" placeholder="Note" className="notename col-12" />
    //               </div>

    //               <div className="emailid col-12">
    //                 <label for="emailid" className="companyemail">Email</label>
    //                 <input type="email" id="emailid" name="email" placeholder="Email" className="comemail col-12" />
    //               </div>
    //               <div className="switchbtn-gr col-12" >
    //                 <div className="switchbtn1 col-4 " style={{  paddingTop: '5px', paddingBottom: '5px' }}>
    //                   <div className="btnone col-12">
    //                     <SwitchButton />
    //                     <p>Login</p>
    //                   </div>
    //                 </div>
    //                 <div className="switchbtn1 col-4 " style={{  paddingTop: '5px', paddingBottom: '5px' }}>
    //                   <div className="btnone col-12">
    //                     <SwitchButton />
    //                     <p>Notify</p>
    //                   </div>
    //                 </div>
    //                 <div className="switchbtn1 col-4 " style={{  paddingTop: '5px', paddingBottom: '5px' }}>
    //                   <div className="btnone col-12" style={{display:'flex', gap:'5px'}}>
    //                     <SwitchButton />
    //                     <p>Email sync</p>
    //                   </div>
    //                 </div>
    //               </div>
    //              <div className="tag-container "></div>
    //             </form>

    //           </div>
    //         </div>
    //       </div>

    //     </div>
    //   </div>
    // </div>
  );
}

export default CreateAccount;
