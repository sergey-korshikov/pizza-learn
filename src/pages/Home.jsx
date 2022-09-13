import React from 'react';
import PizzaBlock from '../components/PizzaBlock';
import PizzaBlockPlaceholder from '../components/PizzaBlock/Placeholder';
import Categories from '../components/Categories';
import Sort from '../components/Sort';

function Home() {
    const [listPizzas, setListPizzas] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
      fetch('https://631f34f158a1c0fe9f633184.mockapi.io/items')
        .then(res => res.json())
        .then(list => {
          setListPizzas(list);
          setIsLoading(false);
        });

      window.scrollTo(0, 0);
    }, []);

  return (
    <>
      <div className='content__top'>
        <Categories />
        <Sort />
      </div>
      <h1 className='content__title'>Все пиццы</h1>
      <div className='content__items content__items_list'>{isLoading ? [...new Array(2)].map((_, i) => <PizzaBlockPlaceholder key={i} />) : listPizzas.map(itemPizza => <PizzaBlock key={itemPizza.id} {...itemPizza} />)}</div>
    </>
  );
}

export default Home;