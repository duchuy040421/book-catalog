import './Book.css'
import { delBook, useStore } from '../store'

function Book(props) {
    const { book = {}, indexBook } = props
    const [state, dispatch] = useStore()

    return (
        <div className={"column is-6 item-" + indexBook} key={indexBook}>
            <div className="card">
                <header className="card-header is-size-4 bookTitle">
                    <p className="card-header-title has-text-info">
                        {book.name || 'Name'}
                    </p>
                </header>
                <div className="card-content">
                    <div className="content">
                        <div>
                            <span className='has-text-weight-bold'>Author:</span> {book.author || 'Author'}
                        </div>
                        <div>
                            <span className='has-text-weight-bold'>Publication year:</span> {book.publishedYear || 'year'}
                        </div>
                        <div>
                            <span className='has-text-weight-bold'>ISBN:</span> {book.ISBN || 'ISBN'}
                        </div>
                        <div>
                            <span className='has-text-weight-bold'>Rating:</span>
                            <span className='has-text-danger'> {book.rating || 'Rating'}</span>
                        </div>
                    </div>
                </div>
                <footer className="card-footer">
                    <a className="card-footer-item" onClick={() => {
                        dispatch(delBook(book.id))
                    }}>Delete</a>
                </footer>
            </div>
        </div>

    )
}

export default Book