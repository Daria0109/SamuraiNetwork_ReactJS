export const updateObjInArray = (items, itemId, objPropName, newObjProps) => {
  return items.map(item => {
    return item[objPropName] === itemId ? {...item, ...newObjProps} : item
  })
}