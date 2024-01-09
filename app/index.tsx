import { useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import SignIn from '../components/SignIn';

const WelcomeScreen = () => {
	const navigation = useRouter();

	return (
		<View style={styles.container}>
			<Text style={styles.title}>MineMopper</Text>
			<Text style={styles.subtitle}>Please Log in to Play</Text>
			<SignIn
				title="Create Account"
				onPress={() => navigation.push('/SignIn')}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#fff',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 10,
	},
	subtitle: {
		fontSize: 16,
		textAlign: 'center',
	},
});

export default WelcomeScreen;
