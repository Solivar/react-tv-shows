import React, { useState } from 'react';

const Sorter = ({ onChangeOption }) => {
  const [option, setOption] = useState(0);

  const handleChange = (event) => {
    const option = event.target.value;

    setOption(option);
    onChangeOption(option);
  }

  return(
    <select value={option} onChange={handleChange}>
      <option value="0">---</option>
      <option value="1">A-Z</option>
      <option value="2">Z-A</option>
    </select>
  );
}

export default Sorter;
