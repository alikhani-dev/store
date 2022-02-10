import { collection, getDocs, setDoc, doc } from 'firebase/firestore'
import { db } from './firebase-config'


const productsCollectionRef = collection(db, 'products')

export const getProducts = async () => {
	const data = await getDocs(productsCollectionRef)
	return data.docs.map((doc) => ({ ...doc.data(), key: doc.id }))
}

export const updateProductUser = async (uid, product) => {
	const user = doc(db, 'users', uid)
	await setDoc(user, { product }, { merge: true })
}
