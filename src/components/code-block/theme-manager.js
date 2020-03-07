import React, { useState } from 'react'

const { Provider, Consumer } = React.createContext({}); 

const ThemeManager = ({ children }) => {
  // const [theme, setTheme] = useState('default')
  const [name, setName] = useState('real')
  const add = () => console.log('xxxx') || setName(name + 1)
  
  return (
    <Provider value={{ name, add }}>Hello: {children}</Provider>
  )
}

export { Consumer, Provider }
export default ThemeManager