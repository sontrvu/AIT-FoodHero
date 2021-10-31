import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginWithUser, registerUser } from '../actions/userAction';

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
    builder.addCase(loginWithUser.fulfilled, (state, action) => {
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

      state.requestId = action.meta.requestId;
      state.error = false;

      console.log(action.payload);
    });

    builder.addCase(loginWithUser.rejected, (state, action) => {
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

      state.requestId = action.meta.requestId;
      state.error = true;
      state.errorMessage = action.error.message;

      console.log(action.error.message);
    });

    builder.addCase(registerUser.fulfilled, (state, action) => {
      console.log('\nREGISTER');
      console.log(action.payload);
      state.error = false;
    });

    builder.addCase(registerUser.rejected, (state, action) => {
      console.log('\nREGISTER ERROR');
      console.log(action.error.message);

      state.error = true;
      state.errorMessage = action.error.message;
    });
  },
});

export default userReducer.reducer;
