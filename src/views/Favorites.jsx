import Gallery from '../components/Gallery'
import { useContext } from 'react'
import { CharacterContext } from '../context/CharacterContext'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const Favorites = () => {
  const { character } = useContext(CharacterContext)
  return (
    <Container>
      <h1 className='text-center'>Personaje Favoritos de Juego de Tronos</h1>
      <Row xs='auto'>
        {character &&
          character.filter(char => char.like).map(char => <Gallery key={char.id} char={char} />)}
      </Row>
    </Container>
  )
}
export default Favorites
