import { Component } from 'react';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitData = ({ name, number }) => {
    let contact = {
      name,
      number,
      id: nanoid(),
    };

    let names = this.state.contacts.map(cont => cont.name.toLocaleLowerCase());
    if (names.includes(name.toLocaleLowerCase())) {
      alert(`${name} is already in contacts.`);
      return;
    }

    this.setState(PrevState => ({
      contacts: [contact, ...PrevState.contacts],
    }));
  };

  filterContacts = event => {
    const { value } = event.currentTarget;
    this.setState({
      filter: value.toLowerCase(),
    });
  };

  removeContact = id => {
    this.setState(PrevState => ({
      contacts: PrevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    let visibleContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter)
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitData}></ContactForm>
        <Filter onChange={this.filterContacts} value={filter}></Filter>
        <h2>Contacts</h2>
        <ContactList
          contacts={visibleContacts}
          removeContact={this.removeContact}
        ></ContactList>
      </div>
    );
  }
}
