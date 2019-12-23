import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    // We need to wait for the data to come back (await)
    await dispatch(fetchPosts());

    // _.map second arg: string to specifiy the property we want
    // _.uniq: Returns a duplicate free array of unique userId's
    // const userIds = _.uniq(_.map(getState().postsReducer, 'userId'));
    // userIds.forEach((id) => dispatch(fetchUser(id)));

    _.chain(getState().postsReducer)
        .map('userId')
        .uniq()
        .forEach((id) => dispatch(fetchUser(id)))
        .value(); // executes ^ value is like 'execute'
};

export const fetchPosts = () => async (dispatch) => {
    const res = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: res.data });
};

export const fetchUser = (id) => async (dispatch) => {
    const res = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: 'FETCH_USER', payload: res.data });
};

// // Version 1 - Can only call user one time in the project
// export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);

// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const res = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({ type: 'FETCH_USER', payload: res.data });
// });
