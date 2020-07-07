import React from "react";


class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="product-list__item" >
        <a href="/" className="product-list__item__link">
          <img src={this.props.img} alt={this.props.alt} className="product-list__item__img" />
          <span className="product-list__item__price"><b>{this.props.price} грн </b></span>
          <span className="products-list-item__brand"><b>{this.props.brand}</b></span>
          <span className="products-list-item__amount">Осталось в наличие {this.props.amount}</span>
          <p className="products-list-item__description" >{this.props.description}</p>
          <button className="products-list-item__button">Заказать</button>
        </a>
      </div >
    )
  }
}

export default Product;
