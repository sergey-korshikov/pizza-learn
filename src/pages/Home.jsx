import React from 'react';
import PizzaBlock from '../components/PizzaBlock';
import PizzaBlockPlaceholder from '../components/PizzaBlock/Placeholder';
import Categories from '../components/Categories';
import Sort from '../components/Sort';

function Home() {
  const categoryValues = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const sortList = [
    { id: 0, name: 'популярности (&#8595;)', value: 'rating', type: 'desc' },
    { id: 1, name: 'популярности (&#8593;)', value: 'rating', type: 'asc' },
    { id: 2, name: 'цене (&#8595;)', value: 'price', type: 'asc' },
    { id: 3, name: 'цене (&#8593;)', value: 'price', type: 'desc' },
    { id: 4, name: 'алфавиту (&#8595;)', value: 'title', type: 'asc' },
    { id: 5, name: 'алфавиту (&#8593;)', value: 'title', type: 'desc' },
  ];
  const [listPizzas, setListPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortItem, setSortItem] = React.useState(sortList[0]);

  React.useEffect(() => {
    const arrQuery = [];
    let strQuery = '';

    if (categoryId) arrQuery.push('category=' + categoryId);
    if (sortItem.value) arrQuery.push('sortby=' + sortItem.value);
    if (sortItem.type) arrQuery.push('order=' + sortItem.type);
    if (arrQuery[0]) strQuery = '?' + arrQuery.join('&');

    setIsLoading(true);

    fetch('https://631f34f158a1c0fe9f633184.mockapi.io/items' + strQuery)
      .then(res => res.json())
      .then(list => {
        setListPizzas(list);
        setIsLoading(false);
      });

    // window.scrollTo(0, 0);
  }, [categoryId, sortItem]);

  return (
    <>
      <div className='content__top'>
        <Categories valueId={categoryId} onClickValue={setCategoryId} categoryValues={categoryValues} />
        <Sort sortItem={sortItem} onClickSortItem={setSortItem} sortList={sortList} />
      </div>
      <h1 className='content__title'>Все пиццы</h1>
      <div className='content__items content__items_list'>{isLoading ? [...new Array(4)].map((_, i) => <PizzaBlockPlaceholder key={i} />) : listPizzas.map(itemPizza => <PizzaBlock key={itemPizza.id} {...itemPizza} />)}</div>
    </>
  );
}

export default Home;
