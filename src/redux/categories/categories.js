const CHECK_STATUS = 'bookStore/categories/CHECK_STATUS';

const initialState = [];

export const checkStatus = () => ({
  type: CHECK_STATUS,
});

const statusReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case CHECK_STATUS:
      return 'Under Construction';
    default:
      return state;
  }
};

export default statusReducer;
