import { createContext, useEffect, useState } from 'react'

export const CharacterContext = createContext()

const CharacterProvider = ({ children }) => {
  const [character, setCharacter] = useState(null)

  const getData = async () => {
    const url = 'https://thronesapi.com/api/v2/Characters'
    const response = await fetch(url)
    const newData = await response.json()
    const newarray = Object.values(newData)
    const joinData = newarray.flatMap(character => character)
    const allData = joinData.map(personaje => ({ ...personaje, like: false }))
    setCharacter(allData)
    console.log(allData)
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <CharacterContext.Provider value={{ character, setCharacter }}>
      {children}
    </CharacterContext.Provider>
  )
}
export default CharacterProvider
