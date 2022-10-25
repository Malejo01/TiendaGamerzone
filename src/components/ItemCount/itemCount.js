import React from 'react';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import "./styles.css" ;

const ItemCount = ({ initial, stock, onAdd }) => {
  //hook de estado
  const [quantity, setQty] = useState(initial);

  let history = useNavigate();

  const addProduct = (num) => {
    setQty(quantity + num);
  };

  return (
    <div className="count-container">
      <div className="count-container__contador">
        <button
          className="count-container__button"
          onClick={() => addProduct(-1)}
          disabled={quantity === initial ? true : null}
        >
          -
        </button>
        <span className="count-container__qty">{quantity}</span>
        <button
          className="count-container__button"
          onClick={() => addProduct(+1)}
          disabled={quantity === stock ? true : null}
        >
          +
        </button>
      </div>

      <button
        className="button-primary"
        onClick={() => {onAdd(quantity)}}
        disabled={stock === 0 ? true : null}
      >
        Añadir
      </button>
    </div>
  );
};

export default ItemCount;

