const CHECK_STATUS = 'bookStore/categories/CHECK_STATUS';

const initialStateCategories = [];

export const checkStatus = () => ({
  type: CHECK_STATUS,
});

const statusReducer = (state = initialStateCategories, actions) => {
  switch (actions.type) {
    case CHECK_STATUS:
      return 'Under Construction';
    default:
      return state;
  }
};

export default statusReducer;
