const initialState = {
    addresses: [],
    selectedAddress: null,
    loading: false,
    error: null,
  };
    
  export const addressReducer = createAsyncThunk(
    'address/fetchAddresses',
    async (_, { rejectWithValue }) => {
      try {
        const response = await addressService.getAddresses();
        return response;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  
//   export const fetchAddressById = createAsyncThunk(
//     'address/fetchAddressById',
//     async (id, { rejectWithValue }) => {
//       try {
//         const response = await addressService.getAddressById(id);
//         return response;
//       } catch (error) {
//         return rejectWithValue(error.message);
//       }
//     }
//   );
  
  // Create slice
  const addressSlice = createSlice({
    name: 'address',
    initialState,
    reducers: {
      setSelectedAddress: (state, action) => {
        state.selectedAddress = action.payload;
      },
      clearAddresses: (state) => {
        state.addresses = [];
        state.selectedAddress = null;
      },
    },
    extraReducers: (builder) => {
      builder
        // Fetch addresses cases
        .addCase(fetchAddresses.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchAddresses.fulfilled, (state, action) => {
          state.loading = false;
          state.addresses = action.payload;
        })
        .addCase(fetchAddresses.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
        // Fetch address by id cases
        .addCase(fetchAddressById.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchAddressById.fulfilled, (state, action) => {
          state.loading = false;
          state.selectedAddress = action.payload;
        })
        .addCase(fetchAddressById.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
    },
  });
  
  export const { setSelectedAddress, clearAddresses } = addressSlice.actions;
  export default addressSlice.reducer;
  
  