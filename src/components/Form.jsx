import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../css/Form.css'

function ContactForm() {
  const [state, handleSubmit] = useForm("xlekygvp");
  if (state.succeeded) {
      return <p className='thankyou'>Thank you for getting in touch with us!</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
      <input 
        id="send-name"
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
        id="send-email"
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
        id="send-msg"
        name="message"
        placeholder='Your Message'
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button className='btn-submit' type="submit" disabled={state.submitting}>
        Submit 📩
      </button>
    </form>
  );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;