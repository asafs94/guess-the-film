import { createContext, createRef, MutableRefObject, ReactNode, useRef } from 'react'

const FormContext = createContext<MutableRefObject<HTMLFormElement | null>>(createRef());

type Props = {
  children: ReactNode
}

function FormContextProvider({ children }: Props) {
  const ref = useRef<HTMLFormElement | null>(null)


  return (
    <FormContext.Provider value={ref}>
      {children}
    </FormContext.Provider>
  )
}


const AppForm = {
  Provider: FormContextProvider,
  Context: FormContext
}

export default AppForm;