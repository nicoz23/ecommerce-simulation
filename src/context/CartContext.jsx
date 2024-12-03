import { createContext, useContext, useState} from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [totalUnits, setTotalUnits] = useState(0)

  return (
    <CartContext.Provider value={{ totalUnits, setTotalUnits }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}

