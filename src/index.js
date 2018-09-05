const assertOnlyKeyedValues = (values, key) => {
  Object.keys(values).forEach(propName => {
    if (!key.includes(propName)) {
      throw new Error(`"${propName}" is missing from your encoding key`)
    }
  })
}

export const encode = (values, key) => {
  assertOnlyKeyedValues(values, key)

  return key.map(propName =>
    values[propName] ? '1' : '0'
  )
    .join('')
}
