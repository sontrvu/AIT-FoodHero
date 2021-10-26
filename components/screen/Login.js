import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import * as AppConstant from '../../helpers/appConstant';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';
import { firebaseAuth } from '../../app/firebase';
import FlashAlert from '../view/FlashAlert';

import { useDispatch, useSelector } from 'react-redux';
import getUserById from '../../actions/userAction';

function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [alertMassage, setAlertMassage] = useState('');
  const [shouldShowAlert, setShouldShowAlert] = useState(false);

  function showAlert(message) {
    setAlertMassage(message);
    setShouldShowAlert(true);
  }

  const dispatch = useDispatch();

  function handleLogIn() {
    dispatch(getUserById('Test man'));

    // navigation.navigate('Main');

    // firebaseAuth
    //   .signInWithEmailAndPassword(email, password)
    //   .then((result) => {
    //     console.log(result);
    //     navigation.navigate('Main');
    //   })
    //   .catch((result) => {
    //     console.log(JSON.stringify(result));
    //     showAlert(result.message);
    //   });
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
            value={password}
            onChangeText={(text) => setPassword(text)}
          ></TextInput>
        </View>
      </View>
      <View style={styles.loginBtnContainer}>
        <TouchableOpacity style={styles.loginBtn} onPress={handleLogIn}>
          <Text style={styles.buttonText}>Login </Text>
          <MaterialIcons name="keyboard-arrow-right" size={22} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.signUpBtnContainer}>
        <Text style={styles.signUpBtn} onPress={() => navigation.navigate('Signup')}>
          Not registered, signup
        </Text>
      </View>

      <View style={styles.footer}></View>

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
    width: 150,
    height: 50,
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
    color: '#E0E0E0',
    fontWeight: 'bold',
  },
  signUpBtnContainer: {
    flex: 1,
  },
  signUpBtn: {
    fontSize: 15,
    maxWidth: 160,
    color: AppConstant.COLOR_PRIMARY,
    alignSelf: 'flex-end',
    padding: 2,
    marginRight: 20,
  },
  footer: {
    backgroundColor: AppConstant.COLOR_PRIMARY,
    height: 50,
    width: 200,
    borderTopLeftRadius: 35,
    alignSelf: 'flex-end',
  },
});

export default Login;
