import { db } from './firebase-config'
import { collection, getDocs, addDoc } from 'firebase/firestore'

const productsCollectionRef = collection(db, 'products')
const categoryCollectionRef = collection(db, 'category')

const getProducts = async () => {
	const data = await getDocs(productsCollectionRef)
	return data.docs.map((doc) => ({ ...doc.data(), key: doc.id }))
}

const getCategory = async () => {
	const data = await getDocs(categoryCollectionRef)
	return data.docs.map((doc) => ({ ...doc.data(), key: doc.id }))
}

const creatProduct = async (fields) => {
	await addDoc(productsCollectionRef, fields)
}

export { getProducts, getCategory, creatProduct }
