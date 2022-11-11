import './App.css';
import CreateBurger from './Burger/CreateBurger';
import { BurgerComponentEnum } from './Resources';

function App() {
  return (
    <div className="App">
      <CreateBurger
        burgerStack={[
          BurgerComponentEnum.LETTUCE,
          BurgerComponentEnum.TOMATOES,
          BurgerComponentEnum.CHEESE,
          BurgerComponentEnum.LETTUCE,
          BurgerComponentEnum.TOMATOES,
          BurgerComponentEnum.TOMATOES,
        ]}
      />

      {/* <BreadLower/>
    <BreadUpper/>
    <Cheese/>
    <Lettuce/>
    <Tomatoes/> */}

    </div>
  );
}

export default App;
