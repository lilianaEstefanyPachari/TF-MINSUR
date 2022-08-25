import { doc, getDoc, collection, orderBy, getDocs } from 'firebase/firestore';
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

export const getEmployeesDocument = async idDoc => {
	const docRefEmployees = doc(db, 'colaboradores', idDoc);
	const docSnapEmployees = await getDoc(docRefEmployees);

	if (docSnapEmployees.exists()) {
		console.log('Document data:', docSnapEmployees.data());
	} else {
		// doc.data() will be undefined in this case
		console.log('No such document!');
	}
};
