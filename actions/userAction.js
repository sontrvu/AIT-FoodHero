import { createAsyncThunk } from '@reduxjs/toolkit';
import { fbAuth, fbFirestore } from '../app/firebase';

const loginWithUser = createAsyncThunk('user/getUserById', async (data, thunkAPI) => {
  const response = await fbAuth.signInWithEmailAndPassword(data.email, data.password);
  const token = await response.user.getIdToken();
  const uid = fbAuth.currentUser.uid;

  let snapshot = await fbFirestore.collection('users').doc(uid).get();
  let user = snapshot.data();

  const payload = {
    ...data,
    ...user,
    uid,
    token,
  };

  return payload;
});

const registerUser = createAsyncThunk('user/registerUser', async (data, thunkAPI) => {
  const response = await fbAuth.createUserWithEmailAndPassword(data.email, data.password);
  const token = await response.user.getIdToken();
  const uid = fbAuth.currentUser.uid;

  await fbFirestore.collection('users').doc(uid).set({
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
  });

  const payload = {
    ...data,
    uid,
    token,
  };

  return payload;
});

const logoutWithUser = createAsyncThunk('user/logoutWithUser', async (data, thunkAPI) => {
  return {};
});

export { loginWithUser, registerUser, logoutWithUser };
