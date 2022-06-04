import './Content.css';
import 'bulma/css/bulma.min.css';
import Catalog from '../catalog/Catalog';
import Header from '../header/Header';
import Book from '../book/Book';
import {useStore} from '../store'

function Content() {
    const [state, dispatch] = useStore()

    return (
        <div className="columns is-multiline">
            <div className="column is-half has-text-centered is-offset-one-quarter">
                <Header/>
                <Book book={state.recommendBook}/>
                <Catalog/>
            </div>
        </div>
    )
}

export default Content