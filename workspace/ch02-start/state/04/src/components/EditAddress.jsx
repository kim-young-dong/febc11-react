export default function EditAddress({ addresBook, handleAddressChange }) {
  return (
    <>
      <h2>주소록</h2>
      <ul>
        {addresBook.map((address, index) => (
          <li key={index}>
            <label htmlFor={address.id}>{address.name} 주소: </label>
            <input
              type="text"
              id={address.id}
              name={address.name}
              value={address.value}
              onChange={(event) => {
                handleAddressChange(index, event.target.value);
              }}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
