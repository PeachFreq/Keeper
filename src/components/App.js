import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import startingNotes from "../notes";
import CreateArea from "./CreateArea";
import {useState} from "react";

function App() {
    const [newNote, setNewNote] = useState({
        title: "",
        content: ""
    });
    const [notes, setNotes] = useState([...startingNotes]);
    function addItem(event) {
        event.preventDefault();
        setNotes((prevState) => {
            return [
                ...prevState,
                newNote
            ]
        })
        setNewNote({ title: "", content: "" });
    }
    function handleChange(event) {
        const { name, value } = event.target;
        setNewNote(prevState => {
            return {
                ...prevState,
                [name]: value,
            }
        })
    }
    function deleteNote(id) {
        setNotes(prevState => {
            return prevState.filter((noteItem, index) => {
                return index !== id;
            })
        });
    }
    return (
    <div className="App">
        <Header />
        <CreateArea
            addItem={addItem}
            handleChange={handleChange}
            title={newNote.title}
            content={newNote.content}
        />
        {notes.map( (note, index) => (
            <Note
                deleteNote={deleteNote}
                key={index}
                id={index}
                title={note.title}
                content={note.content}
            />
        ))}
        <Footer />
    </div>
  );
}

export default App;
