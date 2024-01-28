export default function ListItem({item, removeItem, toogleState, index}){

    return (
        <li onClick={() => toogleState(index)} 
        className={`${item.completed && "completed"}`}>
            {item.title}
            <button onClick={(e) => removeItem(e, item.id)}>x</button>
        </li>
    )
}