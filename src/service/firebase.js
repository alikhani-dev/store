import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { collection, getDocs, addDoc, setDoc, doc } from 'firebase/firestore'
import { db, auth } from './firebase-config'
//? ----------- Authenticated

export const googleSingIn = () => {
	const googleAuthProvider = new GoogleAuthProvider()
	return signInWithPopup(auth, googleAuthProvider)
}

export const singUp = ({ email, password, name, lastName, 'phone Number': phone }) => {
	return createUserWithEmailAndPassword(auth, email, password).then(({ user }) =>
		setDoc(doc(db, 'users', user.uid), { name, lastName, phone }),
	)
}

export const login = (email, password) => signInWithEmailAndPassword(auth, email, password)

export const logOut = () => signOut(auth)

//? ----------- Database

const productsCollectionRef = collection(db, 'products')
const categoryCollectionRef = collection(db, 'category')

export const getProducts = async () => {
	const data = await getDocs(productsCollectionRef)
	return data.docs.map((doc) => ({ ...doc.data(), key: doc.id }))
}

export const getCategory = async () => {
	const data = await getDocs(categoryCollectionRef)
	return data.docs.map((doc) => ({ ...doc.data(), key: doc.id }))
}

export const creatProduct = async (fields) => {
	await addDoc(productsCollectionRef, fields)
}
