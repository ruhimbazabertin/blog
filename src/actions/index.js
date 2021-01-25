import jsonPlaceHolder from '../api/jsonPlaceHolder';

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceHolder.get('/posts');

    dispatch({type: 'FETCH_POSTS', payload: response.data})
} 

export const fetchUser = id => async dispatch => {
    const response = await jsonPlaceHolder.get('/users/1');
    console.log("This is the response from Action",response);
    dispatch({type: 'FETCH_USER', payload: response.data});
};