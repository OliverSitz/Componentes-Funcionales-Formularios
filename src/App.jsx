import './App.css'
import RegistroSuperheroes from './componentes/RegistroSuperheroes'
import miImagen from '/chapulin_colorado.png'

function App() {
  return (
    <>
      <h1 style={styles.title}>Bienvenido a la Liga de Superhéroes</h1>
      <RegistroSuperheroes />
    </>
  )
}

const styles = {
  title: {
    textAlign: 'center',
    margin: '20px 0',
    fontFamily: 'Arial, sans-serif',
    fontSize: '50px',
    color: '#fff',
  },
}

export default App