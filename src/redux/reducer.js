
import COMMENTS from '../data/comments';
import { combineReducers } from 'redux';
import * as actionTypes from './actionTypes';
import { initialContactForm } from './forms';
import { createForms, } from 'react-redux-form';

const dishReducer = (dishState = { isLoading: false, dishes: [] }, action) => {
    switch (action.type) {
        case actionTypes.LOADING_DISHES:
            {
                return {
                    ...dishState,
                    isLoading: true,
                    dishes: []
                }
            }
        case actionTypes.LOAD_DISHES:
            {
                return {
                    ...dishState,
                    isLoading: false,
                    dishes: action.payload
                }
            }
        default:
            return dishState;
    }

}

const commentReducer = (commentState = COMMENTS, action) => {

    switch (action.type) {
        case actionTypes.ADD_COMMENT:
            let comment = action.payload;
            comment.id = commentState.length;
            comment.date = new Date().toDateString();
            // console.log(comment);
            return commentState.concat(comment)
        default:
            return commentState;

    }
}
export const Reducer = combineReducers({
    dishes: dishReducer,
    comments: commentReducer,
    ...createForms({
        feedback: initialContactForm
    })
});


