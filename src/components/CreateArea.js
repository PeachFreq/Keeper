function CreateArea(props) {
    return (
        <form onSubmit={props.addItem}>
            <input value={props.title} name="title" placeholder="Title" onChange={props.handleChange}/>
            <textarea value={props.content} name="content" placeholder="Take a note..." rows="3" onChange={props.handleChange}/>
            <button>Add</button>
        </form>
    )
}

export default CreateArea;