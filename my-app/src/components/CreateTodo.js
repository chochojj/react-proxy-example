const CreateTodo = ({ onChangeForm, handleSubmit }) => {


    return(
        <div className="form-wrapper">
            <div className="form">
                <form>
                    <div className="input-group">
                        <label>Todo</label>
                        <input 
                            type="text" 
                            onChange={(e) => onChangeForm(e)} 
                            name="todo" 
                            placeholder="todo" 
                        />
                    </div>
                    <div className="input-group">
                        <label>category</label>
                        <input 
                            type="text" 
                            onChange={(e) => onChangeForm(e)} 
                            name="category" 
                            placeholder="category" 
                        />
                    </div>
                    <div className="input-group">
                        <label>author</label>
                        <input 
                            type="text" 
                            onChange={(e) => onChangeForm(e)} 
                            name="checked"
                            placeholder="checked" 
                        />
                    </div>
                    <button 
                        className="submit-button"
                        onClick= {() => handleSubmit()}
                    >Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreateTodo;