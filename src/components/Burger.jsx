import React, { Component } from 'react'
import './Burger.css';

export default class Burger extends Component{
  state = {
    lettuce: 0,
    bacon: 0,
    cheese: 0,
    meat: 0
  }

  addDeleteIngredient = (action, ing) =>{
    let{
      lettuce,
      bacon,
      cheese,
      meat
    } = this.state;

    let noOfIngs;

    if(ing === 'lettuce'){
      noOfIngs = lettuce;
    }
    else if(ing === 'bacon'){
      noOfIngs = bacon;
    }
    else if(ing === 'cheese'){
      noOfIngs = cheese;
    }
    else if(ing === 'meat'){
      noOfIngs = meat;
    }

    if(action ==='remove' && noOfIngs>0){
      noOfIngs=noOfIngs - 1;
    }
    else if(action ==='add' ){
      noOfIngs=noOfIngs + 1;
    }
    this.setState({[ing]: noOfIngs});
    console.log(lettuce);
  }
  makeBurger= () =>{
    let{
      lettuce,
      bacon,
      cheese,
      meat
    } = this.state;

  let burgerIngs =[];

  for(let i =0; i<lettuce; i++){
    burgerIngs.push(<div key={burgerIngs.length} className="lettuceSide"></div>)
  }
  for(let i =0; i<bacon; i++){
    burgerIngs.push(<div key={burgerIngs.length} className="baconSide"></div>)
  }
  for(let i =0; i<cheese; i++){
    burgerIngs.push(<div key={burgerIngs.length} className="cheeseSide"></div>)
  }
  for(let i =0; i<meat; i++){
    burgerIngs.push(<div key={burgerIngs.length} className="meatSide"></div>)
  }

  return burgerIngs;
  }
  render(){
    return (
      <div>
      <div className='ingredients'>
        <div className='topSide'></div>
        {this.makeBurger()}
        <div className='bottomSide'></div>
      </div>
      <div className='ingredientsDiv'>
      <p>Lettuce</p>
      <div className='btnDiv'>
      <button onClick={()=> this.addDeleteIngredient('add','lettuce')} className='btnIngredients'>Add</button>
      <button onClick={()=> this.addDeleteIngredient('remove','lettuce')} className='btnIngredients'>Remove</button>
      <p>{this.state.lettuce}</p>
      </div>

      <p>bacon</p>
      <div className='btnDiv'>
      <button onClick={()=> this.addDeleteIngredient('add','bacon')} className='btnIngredients'>Add</button>
      <button onClick={()=> this.addDeleteIngredient('remove','bacon')} className='btnIngredients'>Remove</button>
      <p>{this.state.bacon}</p>
      </div>

      <p>Cheese</p>
      <div className='btnDiv'>
      <button onClick={()=> this.addDeleteIngredient('add','cheese')} className='btnIngredients'>Add</button>
      <button onClick={()=> this.addDeleteIngredient('remove','cheese')} className='btnIngredients'>Remove</button>
      <p>{this.state.cheese}</p>
      </div>

      <p>Meat</p>
      <div className='btnDiv'>
      <button onClick={()=> this.addDeleteIngredient('add','meat')} className='btnIngredients'>Add</button>
      <button onClick={()=> this.addDeleteIngredient('remove','meat')} className='btnIngredients'>Remove</button>
      <p>{this.state.meat}</p>
      </div>

      </div>
      </div>
    );
  }
}
