import { signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from './firebase_config.js';
export { onAuthStateChanged, auth };

export const signInUser = (email, password) =>
	signInWithEmailAndPassword(auth, email, password);

	export const loginWithGoogle = () => {
		const googleProvider = new GoogleAuthProvider();
		return signInWithPopup(auth, googleProvider);
	}