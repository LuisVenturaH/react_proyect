export default function ShoppingList(){
    const products = [
        {title: 'Lo que aletea en nuestras cabezas', ano: 2015, id: 1},
        {title: 'Destrozares, canciones para el final de los tiempos', ano: 2016, id: 2},
        {title: 'Bienvenidos al temporal', ano: 2018, id: 3},
        {title: 'Mayéutica', ano: 2021, id: 4},
        {title: 'Se nos lleva el aire', ano: 2023, id: 5},
      ]


    const listItems = products.map(product =>
      <li
      key={product.id}
      style={{
        color: 'darkgreen'
      }}
      >
        {product.title}
      </li>
    )
    return (
      <ul>{listItems}</ul>
    )
  }

