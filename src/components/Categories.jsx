import React from "react";

function Categories() {
  const [categoryIndex, setCategoryIndex] = React.useState(0);

  const categoriesList = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className='categories'>
      <ul>
        {categoriesList.map((item, index) => (
          <li key={index} className={index === categoryIndex ? 'active' : ''} onClick={() => setCategoryIndex(index)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;