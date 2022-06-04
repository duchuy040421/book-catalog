import './Catalog.css'
import { collection, getDocs } from 'firebase/firestore'
import { setBooks, setRBook, useStore } from '../store'
import { useEffect } from 'react'
import { db } from '../utils/ConfigFirebase';
import Book from '../book/Book';
import 'bulma-carousel/dist/css/bulma-carousel.min.css';
import { delist } from '../utils/ConvertData';
// import bulmaCarousel from 'bulma-carousel/dist/js/bulma-carousel.min.js';

function Catalog() {
    const [state, dispatch] = useStore()
    const { books, recommendBook, action } = state

    const bookCollectionRef = collection(db, 'book')


    useEffect(() => {
        console.log('re')
        const getBooks = async () => {
            const data = await getDocs(bookCollectionRef)

            const listBooks = data.docs.map((doc) => {
                return {
                    ...doc.data(),
                    id: doc.id
                }
            })

            dispatch(setBooks(listBooks))
        }

        getBooks()

    }, [action])

    useEffect(()=>{
        dispatch(setRBook(delist(books)))
    },[])

    // useEffect(() => {
    //     console.log('carousel');
    //     const bCarousel = bulmaCarousel.attach('.carousel', {
    //         slidesToScroll: 1,
    //         slidesToShow: 1,
    //         autoplay: true,
    //         loop: true
    //     })

        
    // }, [books])


    return (
        <div className="column is-full">
            {
                books.map((val, index) => {
                    return (
                        <div key={index} className="pt-4">
                            {console.log('re-render')}
                            <div className="level mb-3">
                                <div className="level-left">
                                    <h3 className="title is-3 has-text-primary">{Object.keys(val)[0]}</h3>
                                </div>
                            </div>
                            {/* <div className="level"> */}
                                <div  className="columns is-multiline">
                                    {/* <div className="carousel box pt-0"> */}
                                        {
                                            val[Object.keys(val)[0]].map((book, indexBook) => {
                                                return (
                                                    <Book book={book} indexBook={indexBook} key={indexBook} />
                                                )
                                            })
                                        }
                                    {/* </div> */}
                                </div>
                            {/* </div> */}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Catalog