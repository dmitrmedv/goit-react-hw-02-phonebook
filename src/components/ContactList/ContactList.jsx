export default function ContactList({ contacts, removeContact }) {
  return (
    <>
      <ul>
        {contacts.map(({ name, number, id }) => {
          return (
            <li key={id} number={number} name={name}>
              {name}: {number}
              <button type="button" onClick={() => removeContact(id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
