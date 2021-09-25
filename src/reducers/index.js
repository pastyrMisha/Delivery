const initialState = {
    menu: [],
    loading: true,
    items: [],
    total: 0
};

const reducer = (state = initialState, action) => {
  
    switch (action.type) {

        case 'MENU_LOADED':
            return {
                ...state,
                menu: action.payload,
                loading: false
            };

// ==============================================================================

        case 'MENU_REQUESTED':
            return {
                ...state,
                menu: state.menu,
                loading: true
            };


// ==============================================================================

        case 'ITEM_ADD_TO_CART':
            const id = action.payload;
            const item = state.menu.find(item => item.id === id);

            let newItem = {
                title: item.title,
                price: item.price,
                url: item.url,
                id: item.id,
                qtty: 1
            };

            const total = newItem.price;

            const itemIdx = state.items.findIndex(item => item.id === id);
          
            if (itemIdx >= 0) {
                const findInItems = state.items.find(item => item.id === id);
                let newItem = {
                    ...findInItems,
                    qtty: ++findInItems.qtty
                }

                return {
                    ...state,
                    items: [
                        ...state.items.slice(0, itemIdx),
                        newItem,
                        ...state.items.slice(itemIdx + 1)
                        
                    ],
                    total: state.total + total
                }
            }

            return {
                ...state,
                items: [
                    ...state.items,
                    newItem
                ],
                total: state.total + total
            }

// ==============================================================================

            case 'ITEM_INC_QUANTITY':
            const idi = action.payload;
            const itemIdi = state.items.findIndex(item => item.id === idi);
            
            const findInItemsi = state.items.find(item => item.id === idi);
            let newItemi = {
                ...findInItemsi,
                qtty: ++findInItemsi.qtty
            };

            const totali = newItemi.price;

            return {
                ...state,
                items: [
                    ...state.items.slice(0, itemIdi),
                    newItemi,
                    ...state.items.slice(itemIdi + 1)
                ],
                total: state.total + totali
            }

// ==============================================================================

            case 'ITEM_DEC_QUANTITY':
                const idd = action.payload;
                const itemIdd = state.items.findIndex(item => item.id === idd);
                
                const findInItemsd = state.items.find(item => item.id === idd);

                let newItemd = {
                    ...findInItemsd,
                    qtty: findInItemsd.qtty - 1
                };

                const totald = newItemd.price;

                if (state.total <= 0 || newItemd.qtty <= 0) {
                    return {
                        ...state,
                        items: [
                            ...state.items.slice(0, itemIdd),
                            ...state.items.slice(itemIdd + 1)
                        ],
                        total: state.total - totald
                    }
                }
                return {
                    ...state,
                    items: [
                        ...state.items.slice(0, itemIdd),
                        newItemd,
                        ...state.items.slice(itemIdd + 1)
                    ],
                    total: state.total - totald
                }

    // ==============================================================================

            case 'ITEM_REMOVE_FROM_CART':
                const idx = action.payload;
                const itemIndex = state.items.findIndex(item => item.id === idx);
                const coeff =  state.items[itemIndex].qtty * state.items[itemIndex].price

                if (state.items[itemIndex].qtty > 1) {
                    return {
                        ...state,
                        items: [
                            ...state.items.slice(0, itemIndex),
                            ...state.items.slice(itemIndex + 1)
                        ],
                        total: state.total - coeff
                    }
                }

                return {
                    ...state,
                    items: [
                        ...state.items.slice(0, itemIndex),
                        ...state.items.slice(itemIndex + 1)
                    ],
                    total: state.total - state.items[itemIndex].price
                }


            default:
                return state;
    }
}

export default reducer;


//case Запрос, Успех, Ошибка - REQUEST, CONFIRM, ERROR