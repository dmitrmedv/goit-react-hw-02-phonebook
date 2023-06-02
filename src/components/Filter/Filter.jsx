import { FilterFeald } from './Filter.stayled';

export default function Filter({ onChange, value }) {
  return (
    <>
      <FilterFeald>
        Find contact by name
        <input type="text" onChange={onChange} value={value} />
      </FilterFeald>
    </>
  );
}
