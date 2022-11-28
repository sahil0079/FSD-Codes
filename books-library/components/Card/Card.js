import axios from 'axios'
import React from 'react'
import { url } from '../../resource'
import './Card.css'

function Card({ id, title, author, genre, summary, getBooks }) {


    const deleteBook = () => {

        axios.delete(`${url}/${id}`).then(data => console.log(data))
        getBooks()


    }
    const updateBook = () => {

        let formJSON = {

        }

        axios.put(`${url}/${id}`, formJSON)

    }

    return (
        <div className='card'>
            <h4 className='card_title'> {title} </h4>
            <div className='card_description'>
                <p>Author: {author}</p>
                <p>Genre: {genre}</p>
            </div>
            <div className='card_summary'>{summary}</div>
            <div className='card_buttons'>
                <button onClick={updateBook} className='button'>Edit</button>
                <button onClick={deleteBook} className='button'>Delete</button>
            </div>
        </div>
    )
}

export default Card