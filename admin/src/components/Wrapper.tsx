


type Props ={
    children: string | JSX.Element | JSX.Element[]
}

const Wrapper = ({children}: Props) => {
  return (
   
    <div className="w-[90%] mx-auto" >
        {children}
    </div>

  )
}

export default Wrapper