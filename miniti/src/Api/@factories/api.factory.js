const apiFactory = (apiMethods) => {
  return {
    base: {
      handleError({ throwTheErr }) {
        if (throwTheErr) {
          throw new Error('An error occurred while fetching data.');
        }
        return null;
      }
    },
    ...apiMethods
  };
};

export default apiFactory;
