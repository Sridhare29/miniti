
const initialState = {
  addresses: [],  // Store all addresses
  loading: false,  // Loading state
  error: null,     // Error state
};

function getAddress(state, action) {
  return { ...state, Address: action.Address };
}