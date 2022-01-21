import {
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from 'firebase/auth'
import { collection, getDocs, addDoc, setDoc, doc } from 'firebase/firestore'
import { db, auth } from './firebase-config'

//? ----------- Authenticated

export const googleSingIn = async () => {
	const googleAuthProvider = new GoogleAuthProvider()
	const data = await signInWithPopup(auth, googleAuthProvider)
	const { displayName, uid, phoneNumber } = data.user.providerData[0]
	await setDoc(doc(db, 'users', uid), { fullName: displayName, phone: phoneNumber })
	return data
}

export const singUp = async ({ email, password, name, lastName, 'phone Number': phone }) => {
	const { user } = await createUserWithEmailAndPassword(auth, email, password)
	return await setDoc(doc(db, 'users', user.uid), { name, lastName, phone })
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

export const updateProductUser = async (uid, product) => {
	const user = doc(db, 'users', uid)
	await setDoc(user, { product }, { merge: true })
}
