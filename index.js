const crud = function () {

  let items = [
    { id: 1, name: "John", lastname: "Doe" },
    { id: 2, name: "Jane", lastname: "Doe" },
  ]

  let autoincrement = 3

  return {
    create: (name, lastname) => {
      items.push({id: autoincrement, name, lastname })
      return items[items.length-1]
    },
    read: (id) => {
      let personaEncontrada = items.find(persona => persona.id === id)
      return personaEncontrada ? personaEncontrada : null
    },
    update: (id, name, lastname) => {
      let personaEncontrada = items.find(persona => persona.id === id)
      let posicion = items.indexOf(personaEncontrada)
      if (posicion != -1) items[posicion] = {id, name, lastname}
      return posicion != -1 ? items[posicion] : false
    },
    delete: (id) => {
      let personaEncontrada = items.find(persona => persona.id === id)
      let posicion = items.indexOf(personaEncontrada)
      if (personaEncontrada && posicion != -1) {
        items.splice(posicion, 1)
        return true
      } else return false
    }
  }
}

module.exports = crud()