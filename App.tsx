import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './components/SignIn';
import MainMenu from './components/MainMenu';

export default function App() {
	return (
		<View style={styles.container}>
			<Text>What's up im gonna be Minesweeper (or Minemopper)!</Text>
			<SignIn />
			<MainMenu />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
