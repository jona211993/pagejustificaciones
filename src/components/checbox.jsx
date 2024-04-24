import React from 'react'
import { useState } from 'react';
import { Checkbox } from 'antd';

export const checbox = () => {
    const [descuento, setDescuento] = useState('SIN DESCUENTO');    

    const handleChange = (e) => {
      setDescuento(e.target.checked ? 'CON DESCUENTO' : 'SIN DESCUENTO');
    };
  
    return (
      <Checkbox onChange={handleChange} checked={descuento === 'CON DESCUENTO'}>
        {descuento}
      </Checkbox>
    );
}

export default checbox;
