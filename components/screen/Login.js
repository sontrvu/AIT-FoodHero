import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';

import * as AppConstant from '../../helpers/appConstant';
import FlashAlert from '../view/FlashAlert';

import { useDispatch, useSelector } from 'react-redux';
import { loginWithUser } from '../../actions/userAction';

function Login() {
  const navigation = useNavigation();

  const { requestId, user, loading, error, errorMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [email, setEmail] = useState('hello@me.me');
  const [password, setPassword] = useState('123456');

  const [alertMassage, setAlertMassage] = useState('');
  const [shouldShowAlert, setShouldShowAlert] = useState(false);

  useEffect(() => {
    if (error) {
      showAlert(errorMessage);
    }
  }, [requestId, error]);

  function showAlert(message) {
    setAlertMassage(message);
    setShouldShowAlert(true);
  }

  function handleLogIn() {
    if (loading) return;

    if (!email || !password) {
      showAlert('Please enter email and password');
      return;
    }

    let data = {
      email,
      password,
    };

    dispatch(loginWithUser(data));
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.loginTextHeader}>Login</Text>
        <Text style={styles.loginText}>Please login to continue</Text>
      </View>
      <View style={styles.bodyContainer}>
        <View>
          <Text style={styles.bodyText}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          ></TextInput>
        </View>
        <View>
          <Text style={styles.bodyText}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          ></TextInput>
        </View>
      </View>

      <View style={styles.loginBtnContainer}>
        <TouchableOpacity style={styles.loginBtn} onPress={handleLogIn}>
          {loading ? (
            <ActivityIndicator size="small" color={AppConstant.COLOR_SECONDARY} />
          ) : (
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.buttonText}>Login</Text>
              <MaterialIcons name="keyboard-arrow-right" size={22} color={AppConstant.COLOR_SECONDARY} />
            </View>
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.signUpBtnContainer}>
        <Text style={styles.signUpBtn} onPress={() => navigation.navigate('Signup')}>
          Not registered? Sign up now
        </Text>
      </View>

      <View style={styles.footer} />

      <FlashAlert message={alertMassage} showAlert={shouldShowAlert} onFinished={() => setShouldShowAlert(false)} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    height: '100%',
    width: '100%',
  },
  headerContainer: {
    flex: 1,
    borderStyle: 'solid',
    borderLeftWidth: 0,
    borderWidth: 3,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderColor: AppConstant.COLOR_PRIMARY,
    padding: 20,
    maxWidth: 250,
    maxHeight: 110,
    marginTop: 25,
  },
  bodyContainer: {
    flex: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginTextHeader: {
    fontSize: 35,
    fontWeight: 'bold',
    color: AppConstant.COLOR_PRIMARY,
  },
  loginText: {
    fontSize: 15,
    color: AppConstant.COLOR_PRIMARY,
  },
  bodyText: {
    fontSize: 20,
    color: AppConstant.COLOR_PRIMARY,
    fontWeight: 'bold',
    marginBottom: 5,
    marginLeft: 15,
  },
  input: {
    height: 50,
    backgroundColor: '#E0E0E0',
    width: 320,
    borderRadius: 25,
    paddingLeft: 15,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  loginBtnContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  loginBtn: {
    backgroundColor: AppConstant.COLOR_PRIMARY,
    paddingVertical: 15,
    width: '35%',
    borderRadius: 25,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginRight: 20,
  },
  buttonText: {
    fontSize: 18,
    color: AppConstant.COLOR_SECONDARY,
    fontWeight: 'bold',
  },
  signUpBtnContainer: {
    flex: 1,
  },
  signUpBtn: {
    fontSize: 15,
    fontWeight: 'bold',
    color: AppConstant.COLOR_PRIMARY,
    alignSelf: 'flex-end',
    padding: 2,
    marginRight: 20,
  },
  footer: {
    backgroundColor: AppConstant.COLOR_PRIMARY,
    position: 'absolute',
    height: 100,
    width: 200,
    bottom: -50,
    right: 0,
    borderTopLeftRadius: 50,
  },
});

export default Login;
