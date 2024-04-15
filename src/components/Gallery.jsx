import Card from 'react-bootstrap/Card'
import { useState, useContext } from 'react'
import { CharacterContext } from '../context/CharacterContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Gallery = ({ char }) => {
  const { character, setCharacter } = useContext(CharacterContext)

  const handleHeartClick = id => {
    const newcharacter = character.map(char => {
      if (char.id === id) {
        return{
          ...char,
          like: !char.like
        }
      }
      return char
    })
    setCharacter(newcharacter) 
    console.log(newcharacter)
  }
  return (
    <div className='row m-2 justify-content-center '>
      <Card
        border='light'
        className='bg-secondary pt-2 text-center'
        style={{ width: '15rem' }}
      >
        <Card.Header className='position-absolute top-0 end-0 m-2 border-0 '>
          <span onClick={() => handleHeartClick(char.id)}>
          <FontAwesomeIcon
              icon={faHeart}
              style={{
                color: char.like ? 'red' : 'silver',
                cursor: 'pointer'
              }}
            />
          </span>
        </Card.Header>
        <Card.Img className='cardItem h-75 img-thumbnail' src={char.imageUrl} />
        <Card.Body>
          <Card.Title className='text-white'>{char.fullName}</Card.Title>
          <Card.Subtitle className='mb-2 text-white'>
            Titulo:{char.title}
          </Card.Subtitle>
          <Card.Subtitle className='mb-2 text-white'>
            Familia:{char.family}
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </div>
  )
}
export default Gallery
