const getArrayFromMap = map => {
  return Object.keys(map).reduce((array, key) => {
    return [ ...array, map[key] ]
  }, [])
}

export default getArrayFromMap
