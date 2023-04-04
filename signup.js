import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SingupScreen() {``

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');

  const handleUsernameChange = (username) => {
    setUsername(username);
  };
  const handleEmailChange = (email) => {
    setEmail(email);
  };

  const handlePasswordChange = (password) => {
    setPassword(password);
  };

  const handleConfirmPasswordChange = (confirmpassword) => {
    setConfirmPassword(confirmpassword);
  };

  const handleLoginPress = () => {
    // handle login logic here
  };

  const handleForgotPasswordPress = () => {
    // handle forgot password logic here
  };

  const handleFacebookPress = () => {
    // handle Facebook login logic here
  };

  const handleGooglePress = () => {
    // handle Google login logic here
  };

  const handleTwitterPress = () => {
    // handle Twitter login logic here
  };
  const AlreadyAccount = () => {
    // handle login logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sign Up</Text>
      <Text style={styles.label}>Username </Text>
      <TextInput
        style={styles.input}
        placeholder=" Enter Username"
        onChangeText={handleUsernameChange}
        value={username}
      />
       <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder=" Enter Email"
        onChangeText={handleEmailChange}
        value={email}
      />
       <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder=" Enter Password"
        secureTextEntry={true}
        onChangeText={handlePasswordChange}
        value={password}
      />
       <Text style={styles.label}>Confirmpassword </Text>
      <TextInput
        style={styles.input}
        placeholder=" Enter Confirm Password"
        onChangeText={handleConfirmPasswordChange}
        value={confirmpassword}
      />
      <TouchableOpacity style={styles.forgotPasswordButton} onPress={handleForgotPasswordPress}>
        <Text style={styles.forgotPasswordText}>ForgotPassword? </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
        <Text style={styles.loginButtonText}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.socialLogin}>
        <TouchableOpacity style={styles.facebookButton} onPress={handleFacebookPress}>
          <Ionicons name="logo-facebook" size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.googleButton} onPress={handleGooglePress}>
          <Ionicons name="logo-google" size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.twitterButton} onPress={handleTwitterPress}>
          <Ionicons name="logo-twitter" size={20} color="#fff" />
        </TouchableOpacity>
        
      </View>
      <TouchableOpacity style={styles.AlreadyAccountButton} onPress={AlreadyAccount}>
        <Text style={styles.AlreadyAccountText}>Already Have An Account?
        Login  </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 34,
    fontWeight: 'bold',
    marginTop: 0,
    marginBottom: 80,
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    marginLeft: 40,
    marginBottom : 5,
    alignSelf: 'flex-start',
    
  },
  input: {
    width: '80%',
    height: 40, 
    borderBottomWidth : 1,
    borderRadius: 5,
    color : "#010",
    borderColor: '#C3C1C3',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  forgotPasswordButton: {
    alignSelf: 'flex-end',
    marginBottom: 20,
    marginRight : 40,
  },
  forgotPasswordText: {
    color: '#007AFF',
  },
  loginButton: {
    backgroundColor: '#F738FD',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    width : '80%',
    height : 40,
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff1e2',
    fontWeight: 'bold',
    marginBottom : -10,
    fontSize: 16,
    textAlign : 'center',
   
  },
  socialLogin: {
    flexDirection: 'row',
    marginTop : 20,
  },
  facebookButton: {
    backgroundColor: '#3B5998',
    padding: 10,
    borderRadius: 50,
    marginRight: 10,
 
  },
  twitterButton: {
    backgroundColor: '#13A8D0',
    padding: 10,
    borderRadius: 50,
    marginRight: 10,

  },
  googleButton: {
    backgroundColor: '#D0131C',
    padding: 10,
    borderRadius: 50,
    marginRight: 10,
  },

  AlreadyAccountButton: {
   
    marginTop : 60,
    marginLeft : 10,
    
    
  },
  ALreadyAccountText: {
    color: '#007AFF',
    textAlign : 'center',
    
    fontSize: 16,
    
  },

})

