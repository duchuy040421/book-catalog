import {SET_BOOKS, ADD_BOOK, DELETE_BOOK, SET_RBOOK} from './constants'
import convertData, { delist} from '../utils/ConvertData'
import { addNewBook, deleteBook, findGoodBook } from './data'

const initState = {
    books: [],
    recommendBook:{},
    action: false
}

const reducer= (state, action) => {
    switch(action.type){
        case SET_BOOKS:
            return{
                ...state,
                books: convertData(action.payload),
                recommendBook: findGoodBook(action.payload)
            }
        case ADD_BOOK:
            addNewBook(action.payload)

            return {
                ...state,
                books: convertData([...delist(state.books), action.payload]),
                recommendBook: findGoodBook([...delist(state.books), action.payload]),
                action: !state.action
            }
        case DELETE_BOOK:
            deleteBook(action.payload)

            return {
                ...state,
                books: convertData(delist(state.books).filter((val)=>val.id !== action.payload)),
                recommendBook: findGoodBook(delist(state.books).filter((val)=>val.id !== action.payload))
            }
        case SET_RBOOK:
            return{
                ...state,
                recommendBook: findGoodBook(action.payload),
                action: !state.action
            }
        default:
            throw new Error('Invalid action')
    }
}

export default reducer
export {initState}
