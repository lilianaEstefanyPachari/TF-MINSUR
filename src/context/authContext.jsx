/* eslint-disable react/prop-types */
import React, { useState, createContext, useContext, useEffect } from 'react';
import { signInUser, onAuthStateChanged, auth } from '../services/auth';
import { onGetUserData } from '../services/firestore';

// createContext devuelve un objeto
export const authContext = createContext();

// hook personalizado que devuelve un objeto
export const useAuth = () => {
	const context = useContext(authContext);
	if (!context) throw new Error('no hay un auth provider');
	return context;
};

export function AuthProvider({ children }) {
	const [user, setUser] = useState(null);
	const [userData, setUserData] = useState(null);
	const signIn = (email, password) => signInUser(email, password);

	useEffect(() => {
		onAuthStateChanged(auth, async user => {
			if (user){
			setUser(user);
			const userData = await onGetUserData(user.uid);

			setUserData(userData);
			}
		});
	}, []);
	// [user]

	return (
		// los comp hijos podrán acceder a todo los datos q esta en provider
		<authContext.Provider value={{ signIn, user, userData }}>
			{children}
		</authContext.Provider>
	);
}
