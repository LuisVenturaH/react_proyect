
import './App.css'
import PrimerComponente from './components/Componente1'
import Lista from './components/lista';
import ListFruit from './components/ListFruit';


function App() {
// Entre el {  y el return se escriben los codigos
  const users = ["Alex", "Pete", "Gerogie", "Dim"]; 
  const fruits = ["Mango", "Fresa", "Limón", "Uva"];


  return (
    <div>
    <PrimerComponente name="Alexander" lastname="DeLarge"/>  
    <img className="image" src="https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2011/06/Alex1.jpg?fit=800%2C564&quality=50&strip=all&ssl=1"/>
    <PrimerComponente  name="ALEX" lastname="DELARGE"/>  
    <h3>A Clockwork Orange</h3>

    <h2>LISTA DE FRUTAS</h2>
    <ul>
      <Lista fruit="Mango" color="Amarillo"/>
      <Lista fruit="Manzana" color="Rojo"/>
      <Lista fruit="Naranja" color="Naranja"/>
      <Lista fruit="Limón" color="Verde"/>
    </ul>
    <ListFruit items = {fruits}/>
    <p>Mis drugos son:</p>
    {
      users ? (
        users.map((user, index)=> <p key={index}>{user}</p>)
      ) : (
        <p>No hay usuarios agregados</p>
      )
    }
    
    </div>
       
  )
}

export default App
