import React from 'react';
export default function TableData({
  packageData,
  deleteHanlder,
  isSubmitDeleting,
  enableHandler,
}) {
  return packageData.map((e) => {
    return (
      <tr key={e._id}>
        <td>{e.name}</td>
        <td>{e.price}</td>
        <td>{e.validityDay}</td>
        <td>{e.description}</td>
        <td>
          <input
            style={{ cursor: 'pointer' }}
            type='checkbox'
            defaultChecked={e.isEnable}
            name='enable'
            value={e.isEnable}
            onClick={() => enableHandler(e._id)}
          />
        </td>
        <td>
          <button
            style={{ cursor: 'pointer' }}
            onClick={() => deleteHanlder(e._id)}>
            {isSubmitDeleting ? 'Deleting' : 'Delete'}
          </button>
        </td>
      </tr>
    );
  });
}
