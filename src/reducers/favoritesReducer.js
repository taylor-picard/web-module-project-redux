const initialState = {
    favorites: [],
    displayFavs: true,
}
const favoritesReducer = (state = initialState, action) => {
    switch(action.type) {
        case(TOGGLE_FAVORITES): {
            return{
                ...state,
                displayFavs: !state.displayFavs
            }
        }
        case(ADD_FAVORITE): {
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        }
        case(REMOVE_FAVORITE):
        default:
            return(state);
    }
}

export default favoritesReducer;