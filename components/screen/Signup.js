import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import * as AppConstant from '../../helpers/appConstant';
import Constants from 'expo-constants';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { firebaseAuth } from '../../app/firebase';
import FlashAlert from '../view/FlashAlert';

export default function Signup() {
  const navigation = useNavigation();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [alertMassage, setAlertMassage] = useState('');
  const [shouldShowAlert, setShouldShowAlert] = useState(false);

  function showAlert(message) {
    setAlertMassage(message);
    setShouldShowAlert(true);
  }

  function handleSignUp() {
    firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
        navigation.navigate('Main');
      })
      .catch((result) => {
        console.log(JSON.stringify(result));
        showAlert(result.message);
      });
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Text style={styles.loginTextHeader}>Signup</Text>
        <Text style={styles.loginText}>Enter your details to subscribe</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            value={firstName}
            onChangeText={(text) => setFirstName(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.text}>Surname</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your surname"
            value={lastName}
            onChangeText={(text) => setLastName(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.text}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.text}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
            <MaterialIcons name="keyboard-arrow-left" size={22} color="white" />

            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Sign Up</Text>
            <MaterialIcons name="keyboard-arrow-right" size={22} color="white" />
          </TouchableOpacity>
        </View>
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
  },
  header: {
    flex: 1,
    borderStyle: 'solid',
    borderLeftWidth: 0,
    borderWidth: 3,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderColor: AppConstant.COLOR_PRIMARY,
    padding: 15,
    maxWidth: 250,
    maxHeight: 110,
    marginTop: 25,
  },
  body: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
    marginHorizontal: 30,
  },
  footer: {
    height: 50,
    backgroundColor: AppConstant.COLOR_PRIMARY,
    width: 200,
    borderTopLeftRadius: 35,
    alignSelf: 'flex-end',
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
  inputContainer: {
    width: '100%',
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  text: {
    fontSize: 20,
    color: AppConstant.COLOR_PRIMARY,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 5,
    marginLeft: 15,
  },
  input: {
    height: 50,
    backgroundColor: '#E0E0E0',
    borderRadius: 25,
    paddingLeft: 15,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  button: {
    backgroundColor: AppConstant.COLOR_PRIMARY,
    width: 120,
    height: 50,
    borderRadius: 25,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    alignSelf: 'flex-end',
  },
  buttonText: {
    fontSize: 16,
    color: '#E0E0E0',
    fontWeight: 'bold',
  },
});
