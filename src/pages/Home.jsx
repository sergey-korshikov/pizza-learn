import React from 'react';
import PizzaBlock from '../components/PizzaBlock';
import PizzaBlockPlaceholder from '../components/PizzaBlock/Placeholder';
import Categories from '../components/Categories';
import Sort from '../components/Sort';

function Home() {
  const [listPizzas, setListPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortId, setSortId] = React.useState(0);

  React.useEffect(() => {
    const sortby = ['rating&order=desc', 'price', 'title'];

    setIsLoading(true);

    fetch(`https://631f34f158a1c0fe9f633184.mockapi.io/items?category=${categoryId || ''}&sortby=${sortby[sortId]}`)
      .then(res => res.json())
      .then(list => {
        setListPizzas(list);
        setIsLoading(false);
      });

    window.scrollTo(0, 0);
  }, [categoryId, sortId]);

  return (
    <>
      <div className='content__top'>
        <Categories valueId={categoryId} onClickValue={setCategoryId} />
        <Sort valueId={sortId} onClickValue={setSortId} />
      </div>
      <h1 className='content__title'>Все пиццы</h1>
      <div className='content__items content__items_list'>{isLoading ? [...new Array(2)].map((_, i) => <PizzaBlockPlaceholder key={i} />) : listPizzas.map(itemPizza => <PizzaBlock key={itemPizza.id} {...itemPizza} />)}</div>
    </>
  );
}

export default Home;
