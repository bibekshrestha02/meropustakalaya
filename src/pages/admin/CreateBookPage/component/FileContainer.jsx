import React from 'react';
import { ErrorMessage } from 'formik';

export default function FileContainer({ setFieldValue }) {
  return (
    <div style={{ display: 'grid' }}>
      <input
        label='Upload Book Pdf'
        name='bookFile'
        type='file'
        id='file'
        accept='.pdf,.epub'
        onChange={(e) => {
          setFieldValue('bookFile', e.target.files[0]);
        }}
      />
      <ErrorMessage name='bookFile' />
    </div>
  );
}
