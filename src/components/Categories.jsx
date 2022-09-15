import React from "react";

function Categories({ valueId, onClickValue }) {
  const categoryValues = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

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