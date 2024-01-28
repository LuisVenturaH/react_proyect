import ListItem from "../ListItem/ListItem"

export default function List({items, setState}){
    function removeItem(e, id){
        e.stopPropagation()
        setState(items.filter((item) => item.id !== id))
    }

    function toogleState(index){
        const newItems = [...items]
        newItems[index].completed = !newItems[index].completed
        setState(newItems)
    }

    // Esta función es para eliminar por id y no por item
    // function toogleStateWithId(id) {
    //     const newItems = [...items]
    //     const itemToComplete = newItems.find(item => item.id === id)
    //     itemToComplete.completed = !itemToComplete.completed
    //     setState(newItems) 
    // }

    return(
        <ul>
            {items.map((item, index) => (
                <ListItem 
                key={item.id} 
                item={item} 
                index={index}
                removeItem={removeItem} 
                toogleState={toogleState}/>
             ))}
        </ul>
    )
}