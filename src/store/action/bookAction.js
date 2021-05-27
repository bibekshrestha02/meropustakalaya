export const addReviews = (rating, comment, id) => {
  return (dispatch) => {
    dispatch({
      type: 'addReview',
      rating,
      comment,
      userId: Math.random(),
      userName: 'Shiva',
      id,
    });
  };
};
