import getRandomNumber from './get-random-number'

const symbols = 'abcdefghijklmnopqrstuvwxyz'

const getRandomSymbol = () => {
  return symbols[getRandomNumber(0, symbols.length - 1)]
}

const getUniqueId = (length = 16) => {
  let uniqueId = ''
  for (let i = 0; i < length; i++) uniqueId += getRandomSymbol()
  return uniqueId
}

export default getUniqueId
