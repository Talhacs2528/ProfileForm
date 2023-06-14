import React from 'react';

const TableRow = ({ index, data, handleDelete }) => {
  const handleDeleteClick = () => {
    handleDelete(index);
  };

  return (
    <tr>
      <td>{data.fullName}</td>
      <td>{data.phoneNumber}</td>
      <td>{data.email}</td>
      <td>{data.gender}</td>
      <td>{data.dateOfBirth}</td>
      <td>{data.city}</td>
      <td>{data.state}</td>
      <td>
        <button onClick={handleDeleteClick}>Delete</button>
      </td>
    </tr>
  );
};

export default TableRow;
