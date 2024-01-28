export default function Form({onSubmit, setState, state}){

    function handleChange(e) {
        setState(e.target.value)
    }

    return(
        <form onSubmit={(e) => onSubmit(e)}>
            <input
                value={state}
                onChange={handleChange}
                placeholder="Introducir nueva tarea"
            />
        </form>
    )
}