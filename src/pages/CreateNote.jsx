import { Link, useNavigate } from 'react-router-dom'
import {IoIosArrowBack} from 'react-icons/io'
import { useState } from 'react'
import {v4 as uuid} from 'uuid'
import '../index.css'

// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';

import useCreateDate from '../components/useCreateDate'
var dt = new DataTransfer();



const CreateNote = ({setNotes}) => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const date = useCreateDate()
  const navigate = useNavigate()




  const handleSubmit = (e) => {
    e.preventDefault();

    if(title && details) {
      const note = {id: uuid(), title, details, date}
      //add this note to the Notes array
      setNotes(prevNotes => [note, ...prevNotes])
      // redirect to home page
      navigate("/") 
    }
  }



  return (
      <section>
          <header className="create-note_header">
              <Link to="/" className="btn">
                  <IoIosArrowBack />  {/* arrow back button */}
              </Link>
              <button className="btn lg primary" onClick={handleSubmit}>
                  Сохранить
              </button>
          </header>
          <form className="create-note_form" onSubmit={handleSubmit}>
              <input
                  type="text"
                  placeholder="Тема"
                  
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  
                //   autoFocus
              />

              {/* <ReactQuill onChange={(e) => setDetails(e.target.value)} theme="snow" value={details}/> */}
              <textarea placeholder='детали заметки...' onChange={(e) => setDetails(e.target.value)} theme="snow" value={details}/>

{/*               <div className="colorPick">
                <div className="green">
                    <label for="green">Green</label>
                    <br />
                    <input type="radio" className='firstGreen' name="colorGreen" id="green" />
                </div>
              </div> */}
          </form>
      </section>
  );
}

export default CreateNote