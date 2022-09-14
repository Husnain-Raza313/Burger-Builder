import React from 'react';
import './Burger.css';
import './BurgerContainer.css';



const BurgerContainer = (props) => {

  const printIngredient = (ingredient,image, burgerIngs) => {
    for (let i = 0; i < ingredient; i++) {
      burgerIngs.push(
        <div key={burgerIngs.length}>

            <img className="ingredients-image" src={`${image}.png`} />
        </div>
      );
    }
  };

  const makeBurger = () => {
    let { lettuce, bacon, cheese, meat } = props.ingredients;

    let burgerIngs = [];
    printIngredient(lettuce,"lettuce",burgerIngs);
    printIngredient(bacon,"bacon",burgerIngs);
    printIngredient(cheese,"cheese",burgerIngs);
    printIngredient(meat,"meat", burgerIngs);

    // for (let i = 0; i < bacon; i++) {
    //   burgerIngs.push(
    //     <div key={burgerIngs.length}>
    //       <img className="ingredients-image" src="bacon.png" />
    //     </div>
    //   );
    // }
    // for (let i = 0; i < cheese; i++) {
    //   burgerIngs.push(
    //     <div key={burgerIngs.length}>
    //       <img className="ingredients-image" src="cheese.png" />
    //     </div>
    //   );
    // }
    // for (let i = 0; i < meat; i++) {
    //   burgerIngs.push(
    //     <div key={burgerIngs.length}>
    //       <img  className="ingredients-image" src="meat.png" />
    //     </div>
    //   );
    // }

    return burgerIngs;
  };
  return (
    <div>{makeBurger()}</div>
  )
}

export {BurgerContainer}
