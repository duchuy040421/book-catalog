import { useRef, useState } from 'react'
import {useStore, addBook} from '../store'


function Header() {
    const initNewBook = {name:"", author:"", publishedYear:"", rating:"", ISBN:""}
    const modalRef = useRef()
    const [state, dispatch] = useStore()
    const [newBook, setNewBook] = useState(initNewBook)

    const handleOpenModal = () => {
        modalRef.current.className += ' is-active'
    }

    const handleCloseModal = () => {
        modalRef.current.className = 'modal'
    }

    const handleAddNewBook = () => {
        console.log('handle add');

        const isEmpty = Object.values(newBook).some(x => x === null || x === '')
        if(isEmpty){
            alert('Please enter all field!!!')
            return
        }

        if(+newBook.publishedYear<1800 || +newBook.publishedYear> new Date().getFullYear()){
            setNewBook({
                ...newBook,
                publishedYear: ''
            })

            return
        }

        if(+newBook.rating>9 || +newBook.publishedYear< 0){
            setNewBook({
                ...newBook,
                rating: ''
            })

            return
        }
        
        dispatch(addBook(newBook))
        setNewBook(initNewBook)
        handleCloseModal()
    }

    return (
        <>
            <div className="modal" ref={modalRef}>
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title has-text-info">ADD NEW BOOK</p>
                        <button className="delete" aria-label="close" onClick={handleCloseModal}></button>
                    </header>
                    <section className="modal-card-body">
                        <div className="field">
                            <label className="label has-text-left">Name</label>
                            <div className="control">
                                <input className="input" type="text" value={newBook.name} maxLength="100"
                                onChange={(e)=>
                                    {
                                        setNewBook({
                                            ...newBook,
                                            name:e.target.value})
                                    }
                                } />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label has-text-left">Author</label>
                            <div className="control">
                                <input className="input" type="text" value={newBook.author} 
                                onChange={(e)=>{
                                    setNewBook({
                                        ...newBook,
                                        author: e.target.value
                                    })
                                }}/>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label has-text-left">Publish Year</label>
                            <div className="control">
                                <input className="input" type="number" value={newBook.publishedYear} 
                                onChange={(e)=>{
                                    setNewBook({
                                        ...newBook,
                                        publishedYear: e.target.value
                                    })
                                }}/>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label has-text-left">Rating</label>
                            <div className="control">
                                <input className="input" type="number" value={newBook.rating} 
                                min="0" max="9"
                                onChange={(e)=>{
                                    setNewBook({
                                        ...newBook,
                                        rating: e.target.value
                                    })
                                }}/>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label has-text-left">ISBN</label>
                            <div className="control">
                                <input className="input" type="text" value={newBook.ISBN} 
                                onChange={(e)=>{
                                    setNewBook({
                                        ...newBook,
                                        ISBN: e.target.value
                                    })
                                }}/>
                            </div>
                        </div>
                    </section>
                    <footer className="modal-card-foot">
                        <button className="button is-success" onClick={handleAddNewBook}>Save changes</button>
                    </footer>
                </div>
            </div>

            <div className="column is-full is-clipped pt-0">
                <img className="box" src="https://media.istockphoto.com/photos/open-book-and-steaming-cup-of-coffee-on-wooden-table-picture-id1334372779?b=1&k=20&m=1334372779&s=170667a&w=0&h=lfTulHKBslG9K9UFwiV6IaM9B5eRM7wIGgWYr-BNb9A=" />
            </div>
            <div className="column is-full level">
                <div className="level-item has-text-centered">
                    <button className="button is-primary" onClick={handleOpenModal}>Add new book</button>
                </div>
            </div>
            <p className="card-header-title is-size-4 has-text-primary">
                Recommend Book
            </p>
        </>

    )
}

export default Header