import React from 'react';

import { CartItemContainer, CartItemDetailsContainer, CartItemName } from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <img src={imageUrl} alt='item' />
    <CartItemDetailsContainer>
      <CartItemName>{name}</CartItemName>
      <span>${price}</span>
      <span>{quantity} x ${price}</span>
    </CartItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
