import {SET_BOOKS, ADD_BOOK, DELETE_BOOK, SET_RBOOK} from './constants'

const setBooks = (payload)=>{
    return{
        type: SET_BOOKS,
        payload
    }
}

const addBook = (payload)=>{
    return{
        type: ADD_BOOK,
        payload
    }
}

const delBook = (payload)=>{
    return{
        type: DELETE_BOOK,
        payload
    }
}

const setRBook = (payload)=>{
    return{
        type: SET_RBOOK,
        payload
    }
}

export {setBooks, addBook, delBook, setRBook}