import { UseFotos } from '../context/AppContext'
import Card from 'react-bootstrap/Card'

const Favorites = () => {
  const { fotos } = UseFotos()
  const imagenesFavoritos = fotos.filter((fotoLike) => fotoLike.liked)
  return (
    <div className='App'>
      <h1>Fotos favoritas</h1>
      <div className='p-3 gallery grid-columns-5'>
        {imagenesFavoritos.map((imagen) => (
          <Card key={imagen.id} style={{ width: '21rem' }}>
            <div
              style={{
                backgroundImage: `url(${imagen.src.large2x})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '250px',
                position: 'relative'
              }}
            />
          </Card>
        ))}
      </div>
    </div>
  )
}
export default Favorites