const DiceService = () => {
  /*
  from: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  Este exemplo retorna um número inteiro entre dois valores definidos. 
  O valor não poderá ser menor que min (ou do próximo inteiro maior que min, 
    caso min não seja inteiro), e será menor (mas não igual) a max.
  */
  const _random = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
  }

  const rollD6 = () => {
    return _random(1, 7)
  }

  const rollD20 = () => {
    return _random(1, 21)
  }

  const rollD100 = () => {
    return _random(1, 101)
  }

  const rollDN = (max) => {
    return _random(1, max + 1)
  }

  const _getResultD20 = (skillValue, diceResult) => {
    // Baseado em https://github.com/Dogoso/RPG-FICHA-DINAMICA
    // e https://www.youtube.com/watch?v=3L3dY1zBO3c&ab_channel=Ryke
    if (diceResult > 20 - Math.floor(skillValue / 5))
      return 'Extremo'
    if (diceResult > 20 - Math.floor(skillValue / 2))
      return 'Bom'
    if (diceResult > 20 - skillValue)
      return 'Normal'
    if (diceResult === 1)
      return 'Desastre'
    return 'Fracasso'
  }

  const _getResultDN = (skillValue, diceResult) => {
    if (diceResult <= skillValue)
      return 'Normal'
    return 'Fracasso'
  }

  const getResult = (isD20 = true) => {
    return isD20 ? _getResultD20 : _getResultDN
  }

  return {
    rollD6,
    rollD20,
    rollD100,
    rollDN,
    getResult,
  }
}

export default DiceService()