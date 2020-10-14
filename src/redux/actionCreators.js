import CommentForm from '../components/Body/commentform';
import DISHES from '../data/dishes';
import * as actionTypes from './actionTypes';

export const addComment = (dishID, rating, author, comment) => ({


    type: actionTypes.ADD_COMMENT,
    payload: {
        dishID: dishID,
        rating: rating,
        author: author,
        comment: comment
    }
})

export const loadDishes = dishes => ({
    type: actionTypes.LOAD_DISHES,
    payload: dishes
})

export const dishesLoading = () => ({
    type: actionTypes.LOADING_DISHES
})

export const fetchDishes = () => {
    return dispatch => {
        dispatch(dishesLoading());
        setTimeout(() => {
            dispatch(loadDishes(DISHES))
        }, 2000);
    }
}