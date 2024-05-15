"use client"
import { Provider } from "react-redux"
import createStore from "./store"
import { useRef } from "react"

const Providers =({children}) => {
    const storeRef = useRef()
  if (!storeRef.current) {
    storeRef.current = createStore()
  }
    return <Provider store={storeRef.current}>{children}</Provider>
}
export default Providers; 