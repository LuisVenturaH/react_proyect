export default function ListFruit({ items }) {
    return (<ul>
                {
                    items ? (
                        items.map((item) => <li key={item}>{item}</li>)
                    ) : (
                        <p>No hay elementos que mostrar</p>
                    )
                }

            </ul>
    );
}