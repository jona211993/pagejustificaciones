import React from 'react'
import { useState } from 'react';
import { Checkbox } from 'antd';

export const checbox2 = () => {
    const [penalidad, setPenalidad] = useState('SIN PENALIDAD');    

    const handleChange = (e) => {
      setPenalidad(e.target.checked ? 'CON PENALIDAD' : 'SIN PENALIDAD');
    };
  
    return (
      <Checkbox onChange={handleChange} checked={penalidad === 'CON PENALIDAD'}>
        {penalidad}
      </Checkbox>
    );
}

export default checbox2;
