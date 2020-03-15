const convertMetastringPropToBool = prop => prop !== undefined ?
  (prop === 'true' || prop === true) :
  false

export default convertMetastringPropToBool