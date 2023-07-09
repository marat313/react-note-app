import React from 'react'
import { Link } from 'react-router-dom'

const colors = ["#e7ed97", "#f8aa8f", "#8edeeb", "#cb94dc"]
const NoteItem = ({note}) => {
  
  
  function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
  }
  const color = getRandomColor()
  console.log(color);
 

  return (
    <Link to={`/edit-note/${note.id}`} className="note" >
      <h3 className='note_title'>{note.title.lenth > 8 ? (note.title.substr(0, 8)) + "..." : note.title}</h3>
      <p className='note_date'>{note.date}</p>
    </Link>
  )
}

export default NoteItem