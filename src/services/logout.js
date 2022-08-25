import { signOut } from 'firebase/auth';
import { auth } from './firebase_config.js';
// función de cerrar sesión
export const logOutFb = () => signOut(auth);
