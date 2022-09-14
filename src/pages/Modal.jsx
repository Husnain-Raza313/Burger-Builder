import React from 'react'
import { useNavigate } from 'react-router';
import './Modal.css';

const Modal = (props) => {
  let navigate= useNavigate();
  const burger= JSON.parse(localStorage.getItem("burger"));
  const closeFn=() => {
    props.hideModal()
  };
  const makeOrder=() => {
    localStorage.setItem("order", JSON.stringify(burger));
    localStorage.setItem("burger",JSON.stringify(null));
    navigate("/orderlist");
  };

  return (
    <div>
    { props.isVisible &&
      <div class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">ORDER SUMMARY</h5>
          </div>
          <div class="modal-body">
            <p>Lettuce: {burger.lettuce}</p>
            <p>Bacon: {burger.bacon}</p>
            <p>Meat: {burger.meat}</p>
            <p>Cheese: {burger.cheese}</p>
            <p>Total: {burger.total.toFixed(3)}$</p>
          </div>
          <hr/>
          <div class="modal-header">
            <h5 class="modal-title">Contact Details</h5>
          </div>
          <div class="modal-body">
          <input type="text" id="address" name="address" class="form-control mb-2" placeholder='Address'/>
          <input type="text" id="email" name="email" class="form-control mb-2" placeholder='Email'/>
          <input type="text" id="zipcode" name="zipcode" class="form-control mb-2" placeholder='Zipcode'/>
          <input type="text" id="name" name="name" class="form-control mb-2" placeholder='Name'/>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" onClick={makeOrder}>Order Now</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={closeFn}>Close</button>
          </div>
        </div>
      </div>
    </div>
    }
    </div>
  )
}

export default Modal
