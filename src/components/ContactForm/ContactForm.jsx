import { Component } from 'react';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  setData = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  addContact = event => {
    const { name, number } = this.state;
    const newContact = {
      name,
      number,
      id: nanoid(),
    };
    event.preventDefault();
    this.props.addContact(newContact);
    event.target.reset();
  };

  render() {
    return (
      <form className={css.contactForm} onSubmit={this.addContact}>
        <label htmlFor="name">Name</label>
        <input
          onChange={this.setData}
          type="text"
          name="name"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor="number">
          Number
          <label />
          <input
            onChange={this.setData}
            type="tel"
            name="number"
            //   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
