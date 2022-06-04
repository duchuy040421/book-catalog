import { addDoc, collection, doc, deleteDoc, getDocs } from "firebase/firestore"
import { db } from '../utils/ConfigFirebase'

const bookCollectionRef = collection(db, 'book')

const addNewBook = async (book)=>{
    console.log('add');
    await addDoc(bookCollectionRef, book)
}

const deleteBook = async (id)=>{
    console.log('del');
    const bookDoc = doc(db, 'book', id)
    await deleteDoc(bookDoc)
}

const getBooks = async () => {
    const data = await getDocs(bookCollectionRef)

    return data.docs.map((docData) => {
        return {
            ...docData.data(),
            id: doc.id
        }
    })

}

const findGoodBook = (books)=>{
    let result = []
    let max = 0
    const yearNow = new Date().getFullYear()

    result = books.filter((element)=>yearNow - +element.publishedYear<=3)
    
    result.forEach(element => {
        if(+element.rating>max)
            max = +element.rating
    });

    result = books.filter((element)=>+element.rating === max)

    if(result.length === 0)
        return {}

    return result[Math.floor(Math.random()*result.length)]
}


export {addNewBook, deleteBook, getBooks, findGoodBook}