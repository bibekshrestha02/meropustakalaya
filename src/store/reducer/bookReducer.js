const initalState = {
  id: 1,
  title: 'Rich dad poor dad',
  auther: 'Robet kisakiko',
  imageUrl: '../photo/books/book.jpg',
  rating: 4,
  pages: 300,
  bookDetail:
    "Rich Dad Poor Dad is a 1997 book written by Robert Kiyosaki and Sharon Lechter. It advocates the importance of financial literacy, financial independence and building wealth through investing in assets, real estate investing, starting and owning businesses, as well as increasing one's financial intelligence",
  relatedBooks: [
    {
      id: 2,
      title: 'Atomic Habit',
      auther: 'James Clear',
      imageUrl: 'https://m.media-amazon.com/images/I/513Y5o-DYtL._SL500_.jpg',
      rating: 4,
    },
    {
      id: 4,
      title: 'How to win friends and infulence people',
      auther: 'Dale Carnegle',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/71xnkJc3-yL.jpg',
      rating: 4,
    },
  ],
  reviews: [
    {
      userId: 25,
      userName: 'Bibek Shrestha',
      rating: 4,
      comment: 'One of the most empowering lessons book',
    },
    {
      userId: 26,
      userName: 'Shiva Shrestha',
      rating: 4,
      comment:
        'One of the most empowering lessons rich dad taught in this section of Rich Dad Poor Dad was to “keep using your brain, work for free, soon your mind will show you ways of making money far beyond what I could ever pay you. You will see things that other people never see.',
    },
  ],
};

const BookReducer = (state = initalState, action) => {
  const { rating, userId, userName, comment, id } = action;
  switch (action.type) {
    case 'addReview':
      if (state.id !== id) {
        return state;
      }
      state.reviews.unshift({ rating, userId, userName, comment });
      return state;

    default:
      return state;
  }
};
export default BookReducer;
