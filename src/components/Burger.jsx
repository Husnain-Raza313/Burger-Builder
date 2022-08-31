import React, { Component } from "react";
import "./Burger.css";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import {BurgerContainer} from './BurgerContainer';
export default class Burger extends Component {
   burger =JSON.parse(localStorage.getItem("burger"));
  state = {
    lettuce:  0 ,
    bacon:  0 ,
    cheese: 0 ,
    meat: 0,
    total: 2.33,
    visible: false,
  };

  hideModal = () => {
    this.setState({
      visible: false,
    });
  };

  componentDidMount = () => {
    let burger =JSON.parse(localStorage.getItem("burger"));
  this.setState( {
    lettuce: burger ===null ? 0 : this.burger.lettuce,
    bacon: burger ===null ? 0 : this.burger.bacon,
    cheese: burger ===null ? 0 : this.burger.cheese,
    meat: burger===null ? 0 : this.burger.meat,
    total: burger === null ? 2.33 : this.burger.total,
    visible: false,
  });
  };

  addDeleteIngredient = (action, ing) => {
    let { lettuce, bacon, cheese, meat } = this.state;

    let noOfIngs;
    let price;

    if (ing === "lettuce") {
      noOfIngs = lettuce;
      price = 2.33;
    } else if (ing === "bacon") {
      noOfIngs = bacon;
      price = 5.33;
    } else if (ing === "cheese") {
      noOfIngs = cheese;
      price = 4.33;
    } else if (ing === "meat") {
      noOfIngs = meat;
      price = 8.33;
    }

    if (action === "remove" && noOfIngs > 0) {
      noOfIngs = noOfIngs - 1;
      this.setState({ total: this.state.total - price });
    } else if (action === "add") {
      noOfIngs = noOfIngs + 1;
      this.setState({ total: this.state.total + price });
    }
    this.setState({ [ing]: noOfIngs });
  };

  orderFunc = () => {
    let { lettuce, bacon, cheese, meat, total } = this.state;

    const burger = {
      lettuce: lettuce,
      bacon: bacon,
      cheese: cheese,
      meat: meat,
      total: total,
    };

    localStorage.setItem("burger", JSON.stringify(burger));
    if(localStorage.getItem("email")){
    this.setState({ visible: true });
    }
  };
  render() {
    return (
      <div>
        <Modal isVisible={this.state.visible} hideModal={this.hideModal} />
        <div className="burgerContainer">
          <div className="ingredients">
            <div className="topSide">
              <img src="top2.png" className="mb-2" />
            </div>
            <BurgerContainer ingredients ={this.state} />
            <div className="bottomSide">
              <img src="bottom2.png" />
            </div>
          </div>
          <div className="ingredientsDiv">
            <div className="ingredientsWrapper">
              <h4>Current price: {this.state.total.toFixed(3)}$</h4>
              <div className="btnDiv">
                <b>Lettuce</b>
                <button
                  onClick={() => this.addDeleteIngredient("add", "lettuce")}
                  className="btnIngredients"
                >
                  Add
                </button>
                <button
                  onClick={() => this.addDeleteIngredient("remove", "lettuce")}
                  className="btnIngredients"
                >
                  Remove
                </button>
                <p>{this.state.lettuce}</p>
              </div>

              <div className="btnDiv">
                <b>Bacon</b>
                <button
                  onClick={() => this.addDeleteIngredient("add", "bacon")}
                  className="btnIngredients"
                >
                  Add
                </button>
                <button
                  onClick={() => this.addDeleteIngredient("remove", "bacon")}
                  className="btnIngredients"
                >
                  Remove
                </button>
                <p>{this.state.bacon}</p>
              </div>

              <div className="btnDiv">
                <b>Cheese</b>
                <button
                  onClick={() => this.addDeleteIngredient("add", "cheese")}
                  className="btnIngredients"
                >
                  Add
                </button>
                <button
                  onClick={() => this.addDeleteIngredient("remove", "cheese")}
                  className="btnIngredients"
                >
                  Remove
                </button>
                <p>{this.state.cheese}</p>
              </div>

              <div className="btnDiv">
                <b>Meat</b>
                <button
                  onClick={() => this.addDeleteIngredient("add", "meat")}
                  className="btnIngredients"
                >
                  Add
                </button>
                <button
                  onClick={() => this.addDeleteIngredient("remove", "meat")}
                  className="btnIngredients"
                >
                  Remove
                </button>
                <p>{this.state.meat}</p>
              </div>
              {localStorage.getItem("email") ===null ?
              <div>
                <button
                  className="orderBtn btn btn-warning"
                  onClick={() => this.orderFunc()}>
                  <Link to="/signform" className="sign-up"><p className="sign-up">SIGN UP TO ORDER NOW</p></Link>
                </button>
                </div>
               :
               <div>
                <button
                  className="orderBtn btn btn-success"
                  onClick={() => this.orderFunc()}>
                  "ORDER NOW"
                </button>
              </div>

              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
