/* jshint esversion: 6 */

import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Platform,
  TextInput,
  ImageBackground,    
  TouchableOpacity,
  KeyboardAvoidingView } from 'react-native';

export default function Login() {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null} style={styles.container}>
      
      <View style={styles.container}>
        
        <ImageBackground source={require('./assets/background.png')} style={styles.image}>

          <View style={styles.formContainer}>

            <Text style={styles.header}> Hungry? </Text>
            <Text style={styles.headerText}> Log in to view our sumptuous menu </Text>
            <TextInput style={styles.input} placeholder='Username/Email' />
            <TextInput style={styles.input} placeholder='Password' secureTextEntry={true} />
            
            <TouchableOpacity style={styles.button}> 
              <Text style={styles.loginText}>Log In</Text>
            </TouchableOpacity>

          </View>

          </ImageBackground>

      </View>

    </KeyboardAvoidingView>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  formContainer: {
    padding: 25,
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
  },

  header: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left'
  },
  
  headerText: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  }, 

  image: {
    flex: 1,
    position:'absolute',
    width: '100%',
    height: '100%',
    resizeMode: "cover",
    justifyContent: "center"
  },

  text: {
    color: '#fff',
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },

  content: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },

  input: {
    width: 350,
    height: 50,
    borderColor: '#dbe5e3',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 5,
    shadowColor: '#dbe5e3',
    shadowRadius: 6.5,
    elevation: 12,
    shadowOpacity: 0.35,
    shadowOffset: {
      width: 0,
      height: 5,
    }
  },

  button: {
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: "#000",
    padding: 10,
    width: 350,
    height: 50,
    borderRadius: 8,
    shadowColor: '#000',
    shadowRadius: 6.5,
    elevation: 12,
    shadowOpacity: 0.35,
    shadowOffset: {
      width: 0,
      height: 5,
    }
  }, 

  loginText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
});
