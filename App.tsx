import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
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
