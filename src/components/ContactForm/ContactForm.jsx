import { Component } from 'react';
import { Form, Label } from './ContactForm.styled';

export default class ContactForm extends Component {
  state = { name: '', number: '' };

  addData = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  resetState = () => {
    this.setState({ name: '', number: '' });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.resetState();
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <Form onSubmit={this.onSubmit}>
          <Label>
            Name
            <input
              type="text"
              name="name"
              // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={this.addData}
            />
          </Label>
          <Label>
            Number
            <input
              type="tel"
              name="number"
              // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={this.addData}
            />
          </Label>
          <button type="sumbmit">Add contact</button>
        </Form>
      </>
    );
  }
}
