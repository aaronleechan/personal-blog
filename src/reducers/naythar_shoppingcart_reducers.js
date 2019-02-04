import actions from '../actions/actions';

const shoppingCartReducer = (state=[],action) =>{ 
    switch(action.type){
        case action.NAYTHAR_SHOPPING_CART_ADD_ITEM:
            return state
        case action.NAYTHAR_SHOPPING_DELETE_ITEM:
            return state
        default:
        return state;
    }
}

export default shoppingCartReducer