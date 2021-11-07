import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginWithUser, registerUser, logoutWithUser } from '../actions/userAction';

const initialState = {
  user: {},
  loading: false,
  error: false,
  errorMessage: '',
  requestId: '',
};

const userReducer = createSlice({
  name: 'user',
  initialState: initialState,

  extraReducers: (builder) => {
    builder
      .addCase(loginWithUser.pending, (state, action) => {
        state.loading = true;
        state.error = false;
        state.requestId = action.meta.requestId;
      })
      .addCase(loginWithUser.fulfilled, (state, action) => {
        state.requestId = action.meta.requestId;
        state.loading = false;
        state.error = false;
        state.user = action.payload;

        /*  action = {
        "meta": Object {
          "arg": Object {
            "userId": "Test manz",
          },
          "requestId": "9zQDOuV9yXwLl3x88CzAV",
          "requestStatus": "fulfilled",
        },
        "payload": Object {
          "name": "Test manz",
        },
        "type": "user/getUserById/fulfilled",
      } */

        console.log(action.payload);
      })
      .addCase(loginWithUser.rejected, (state, action) => {
        state.requestId = action.meta.requestId;
        state.loading = false;
        state.error = true;
        state.errorMessage = action.error.message;

        /* action = {
        "error": Object {
          "message": "NO",
        },
        "meta": Object {
          "aborted": false,
          "arg": Object {
            "userId": "Test manz",
          },
          "condition": false,
          "rejectedWithValue": false,
          "requestId": "ctGe_9C7t4H35eBjUZ-qQ",
          "requestStatus": "rejected",
        },
        "payload": undefined,
        "type": "user/getUserById/rejected",
      } */

        console.log(action.error.message);
      })

      .addCase(registerUser.pending, (state, action) => {
        state.requestId = action.meta.requestId;
        state.loading = true;
        state.error = false;
        state.errorMessage = '';
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.requestId = action.meta.requestId;
        state.loading = false;
        state.error = false;
        state.user = action.payload;

        console.log(action.payload);
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.requestId = action.meta.requestId;
        state.loading = false;
        state.error = true;
        state.errorMessage = action.error.message;

        console.log(action.error.message);
      })

      .addCase(logoutWithUser.fulfilled, (state, action) => {
        state.requestId = action.meta.requestId;
        state.error = false;
        state.user = action.payload;
      });
  },
});

export default userReducer.reducer;
