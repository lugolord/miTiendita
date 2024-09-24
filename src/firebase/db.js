import { 
  getFirestore, 
  collection, 
  getDocs, 
  doc, 
  getDoc,
  addDoc 
} from "firebase/firestore"
import { app } from './config'

const db = getFirestore(app)

export const getProducts = async (setItems) => {
  const querySnapshot = await getDocs(collection(db, "items"))
  const products = []

  querySnapshot.forEach((doc) => {
    products.push(doc.data())
  })

  setItems(products)
}

export const getSingleProduct = async (id, setItem) => {
  const docRef = doc(db, "items", id)
  const docSnap = await getDoc(docRef)
  
  if (docSnap.exists()) {
    setItem(docSnap.data())
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!")
  }
}

export const createOrder = async (order) => {
  try {
    const docRef = await addDoc(collection(db, "orders"), order)
    console.log("Document written with ID: ", docRef.id)
    return docRef.id
  } catch (e) {
    console.error("Error adding document: ", e)
  }
}
