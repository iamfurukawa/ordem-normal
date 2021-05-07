const DiceService = () => {
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

  return {
    rollD6,
    rollD20,
    rollD100,
    rollDN,
  }
}

export default DiceService()