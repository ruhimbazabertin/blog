import jsonPlaceHolder from "../api/jsonPlaceHolder";

export const fetchPosts = () => async (dispatch) => {
  // Get all posts
  const response = await jsonPlaceHolder.get("/posts");

  // Loop through each post retreived
  // get user of each post while looping through
  const mappedPosts = await Promise.all(
    response.data?.map(async (postItem) => {
      const userResponse = await jsonPlaceHolder.get(
        `/users/${postItem?.userId}`
      );
      return { ...postItem, user: userResponse?.data };
    })
  );

  dispatch({ type: "FETCH_POSTS", payload: mappedPosts });
};

export const fetchUser = (id) => async (dispatch) => {
  // THIS FUNCTION IS NOT NECESSARY
};
