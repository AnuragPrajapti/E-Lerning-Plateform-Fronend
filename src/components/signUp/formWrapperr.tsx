import { ReactNode } from "react"

type FormWrapperProps = {
  title: string
  children: ReactNode
}

 const  FormWrapper = ({ title, children }: FormWrapperProps) => {
  return (
    <>
        {children}
    </>
  )
}

export default FormWrapper;