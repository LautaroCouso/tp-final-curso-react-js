import firebase from '../config/firebase';

export async function getNewProduct() {
  const querySnapshot = await firebase.firestore().collection('products').get();
  return querySnapshot.docs;
}
export async function getDetailsNewProduct(id) {
  return await firebase.firestore().doc(`/products/${id}`).get();
}
