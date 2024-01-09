import React, { useState } from 'react';
import { db, auth } from './Firebase';
import { Text, StyleSheet, View, TextInput, Button } from 'react-native';
import { useForm } from 'react-hook-form';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';

export default function SignIn() {
	const [signUpSuccess, setSignUpSuccess] = useState<string>(null);
	const [signInSuccess, setSignInSuccess] = useState<string>(null);

	// function doSignUp(event) {
	// 	event.preventDefault();
	// 	const email = event.target.email.value;
	// 	const password = event.target.password.value;
	// 	createUserWithEmailAndPassword(auth, email, password)
	// 		.then((userCredential) => {
	// 			setSignUpSuccess(
	// 				`You have been authenticated as ${userCredential.user.email}`
	// 			);

	// 			async function userDataSetup() {
	// 				await setDoc(doc(db, 'userData', auth.currentUser.email), {
	// 					currentGame: [],
	// 					gameHistory: [],
	// 				});
	// 			}
	// 			userDataSetup();
	// 		})
	// 		.catch((error) => {
	// 			setSignUpSuccess(
	// 				`An error occurred while signing up: ${error.message}`
	// 			);
	// 		});
	// }

	// function doSignIn(event) {
	// 	event.preventDefault();
	// 	const email = event.target.signInEmail.value;
	// 	const password = event.target.signInPassword.value;
	// 	signInWithEmailAndPassword(auth, email, password)
	// 		.then((userCredential) => {
	// 			setSignInSuccess(`Welcome, ${userCredential.user.email}!`);
	// 		})
	// 		.catch((error) => {
	// 			setSignInSuccess(
	// 				`An error occurred while signing in: ${error.message}`
	// 			);
	// 		});
	// }

	function sayFooBar() {
		console.log('foobar');
	}

	return (
		<View>
			<Text>I AM THE SIGN IN FORM!!!</Text>
			<TextInput
				keyboardType="email-address"
				textContentType="emailAddress"
				placeholder="Email"
				placeholderTextColor={'gray'}
				// onChangeText={onChangeField('email')}
				autoComplete="email"
			/>
			<TextInput
				secureTextEntry
				placeholder="Password"
				placeholderTextColor={'gray'}
				// onChangeText={onChangeField('password')}
				autoComplete="password"
			/>
			<Button
				title="Submit"
				onPress={sayFooBar}
			/>
		</View>
	);
}
