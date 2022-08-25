import {
	doc,
	getDoc,
	collection,
	orderBy,
	getDocs,
	onSnapshot,
	updateDoc,

	query,
	where,
} from 'firebase/firestore';
import { db } from './firebase_config.js';

// traer data de usuario
export const onGetUserData = async idDoc => {
	const docRef = doc(db, 'colaboradores', idDoc);
	const docSnap = await getDoc(docRef);

	if (docSnap.exists()) {
		console.log('Document data:', docSnap.data());
		return docSnap.data();
	} else {
		// doc.data() will be undefined in this case
		console.log('No such document!');
	}
};

// data de beneficios
export const getBenefitsQuerySnapshot = async () => {
	const querySnapshot = await getDocs(
		collection(db, 'beneficios'),
		orderBy('IdBenef', 'desc')
	);
	return querySnapshot;
};

// data de programas
export const getProgramsQuerySnapshot = async () => {
	const querySnapshot = await getDocs(
		collection(db, 'programas'),
		orderBy('IdBenef', 'desc')
	);
	return querySnapshot;
};

// asignar un uid a un usuario

export const getEmployeesDocument = async uid => {
	const docRefEmployees = doc(db, 'colaboradores', uid);
	console.log(docRefEmployees);
	const docSnapEmployees = await getDoc(docRefEmployees);
	console.log(docSnapEmployees);
	if (docSnapEmployees.exists()) {
		console.log('Document data:', docSnapEmployees);
	} else {
		// doc.data() will be undefined in this case
		console.log('No such document also');
	}
};

export const getEmployeeByUid = async uid => {
	console.log('Start getEmployeeByUid', uid);

	const employeeRef = collection(db, 'colaboradores');
	const employeeQuery = query(employeeRef, where('uid', '==', uid));

	let response = {};

	console.log('query done');

	const querySnapshot = await getDocs(employeeQuery);

	querySnapshot.forEach(doc => {
		console.log(doc.id, ' => ', doc.data());
		response = doc.data();
	});

	return response;
};

export const getBossById = async userId => {
	const employeeRef = collection(db, 'colaboradores');
	const employeeQuery = query(employeeRef, where('IdUser', '==', userId));

	const querySnapshot = await getDocs(employeeQuery);

	querySnapshot.forEach(doc => {
		console.log(doc.id, ' => ', doc.data());
	});
};

export const getOrder = setOrders => {
	onSnapshot(collection(db, 'cuponesdesc'), snapshot =>
		setOrders(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
	);
};

export const updateTrue = async id => {
	const collectionRef = doc(db, 'cuponesdesc', id);
	updateDoc(collectionRef, { like: true });
};
export const updateFalse = async id => {
	const collectionRef = doc(db, 'cuponesdesc', id);
	updateDoc(collectionRef, { like: false });
};

