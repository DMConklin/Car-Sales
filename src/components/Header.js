import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    image: state.car.image, 
    name: state.car.name,
    price: state.car.price,
    additionalPrice: state.additionalPrice
  }
}

const Header = props => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.image} alt={props.name} />
      </figure>
      <h2>{props.name}</h2>
      <p>Amount: ${props.price + props.additionalPrice}</p>
    </>
  );
};

export default connect(mapStateToProps, {})(Header);
