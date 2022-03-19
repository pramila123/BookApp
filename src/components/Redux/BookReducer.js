const initialValues = {
  books: [],
  book: {},
};

export const bookItems = (state = initialValues, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case "REMOVE":
      return {
        ...state,
        books: [
          ...state.books.filter((bid, index) => index !== action.payload),
        ],
      };
    case "Update":
      return {
        ...state,
        books: state.books.map((bid, index) => {
          if (index === action.payload) {
            return { ...state, books: [...state.books, action.payload] };
          }
        }),
      };
    default:
      return state;
  }
};
