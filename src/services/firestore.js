import {
	doc,
	getDoc,
	collection,
	orderBy,
	getDocs,
	onSnapshot,
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
	// const dataBenefits = [];
	// querySnapshot.forEach(doc => {
	// 	dataBenefits.push(doc.data());
	// });
};
