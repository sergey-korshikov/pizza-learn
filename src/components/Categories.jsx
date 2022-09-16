import React from "react";

function Categories({ valueId, onClickValue, categoryValues }) {
  return (
    <div className='categories'>
      <ul>
        {categoryValues.map((item, index) => (
          <li key={index} className={index === valueId ? 'active' : ''} onClick={() => onClickValue(index)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;