const initialValues = {
  books: [],
  book: {},
  editMode: false,
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
      const bookId = state.books.find(
        (item, index) => index === action.payload
      );
      if (bookId) {
        return {
          ...state,
          books: [...state.books, action.payload],
        };
      } else {
        return state;
      }

    default:
      return state;
  }
};
