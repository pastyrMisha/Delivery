import React from 'react';
import './cart-table.scss';
import {connect} from 'react-redux';
import { deleteFromCart, decQuantity, incQuantity } from '../../actions';

const CartTable = ({items, deleteFromCart, decQuantity, incQuantity}) => {
    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {
                    items.map(item => {
                        const {title, price, url, id, qtty} = item;
                        return (
                            <div key={id} className="cart__item">
                                <img src={url} className="cart__item-img" alt={title}></img>
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-price">{price} ₽</div>
                                <div className="cart__item-quantity">
                                <button onClick={() => decQuantity(id)} id="qtty-left" className="cart__item-quantity-left">-</button>
                                <span className="cart__item-quantity-value">{qtty}</span>
                                <button onClick={() => incQuantity(id)} id="qtty-right" className="cart__item-quantity-right">+</button>
                                </div>
                                <div onClick={() => deleteFromCart(id)} className="cart__close">&times;</div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};

const mapStateToProps = ({items}) => {
    return {
        items
    }
};
// const mapDispatchToProps = () => {
    // return {
    //     onDelete: (id) => {
    //         console.log(`Удалили ${id}`);
    //     }
    // }
    
// };
const mapDispatchToProps = {
    deleteFromCart,
    decQuantity,
    incQuantity
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);