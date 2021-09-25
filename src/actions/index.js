const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    };
};

const menuRequested = () => {
    return {
        type: 'MENU_REQUESTED'
    };
};

const addedToCart = (id) => {
    return {
        type: 'ITEM_ADD_TO_CART',
        payload: id
    };
};

const deleteFromCart = (id) => {
    return {
        type: 'ITEM_REMOVE_FROM_CART',
        payload: id
    };
};

const incQuantity = (id) => {
    return {
        type: 'ITEM_INC_QUANTITY',
        payload: id
    };
};
const decQuantity = (id) => {
    return {
        type: 'ITEM_DEC_QUANTITY',
        payload: id
    };
};

export {
    menuLoaded,
    menuRequested,
    addedToCart,
    deleteFromCart,
    incQuantity,
    decQuantity
};