import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../css/Form.css'

function ContactForm({isDarkMode}) {
  const [state, handleSubmit] = useForm("xlekygvp");
  if (state.succeeded) {
      return <p className={`thankyou ${isDarkMode?"dark4-color":"light4-color"}`}>Thank you for getting in touch with us!</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
      <input 
        className={`send-name ${isDarkMode?"dark8-color":"light8-color"}`}
        type="text"
        name = "name"
        placeholder='Your name'
        />
        <ValidationError 
        prefix="Name" 
        field="text"
        errors={state.errors}
        />
      <input
        className={`send-email ${isDarkMode?"dark8-color":"light8-color"}`}
        type="email" 
        name="email"
        placeholder='Your Email'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        className={`send-msg ${isDarkMode?"dark8-color":"light8-color"}`}
        name="message"
        placeholder='Your Message'
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button className={`btn-submit ${isDarkMode?"dark6-color":"light6-color"}`} type="submit" disabled={state.submitting}>
        Submit 📩
      </button>
    </form>
  );
}
function App({isDarkMode}) {
  return (
    <ContactForm isDarkMode={isDarkMode}/>
  );
}
export default App;

// {`dev-prof ${isDarkMode?"dark8-color":"light8-color"}`}