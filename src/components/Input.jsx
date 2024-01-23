import React,{useId} from 'react'

const Input = React.forwardRef(function Input({
    label,
    type="text",
    className ='',
    ...props
},ref){
    const id = useId();
    return (
        <div className='w-full'>
            {label && <label className='inline-block mb-1 pl-1' htmlFor={id}>{label}</label>}
            <input 
            type={type}
            className={`px-3 py-2 rounded-lg bg-white
             text-black outline-none focus:bg-gray-50 duration-200
              border border-green-300 w-full ${className}`}
              ref={ref} 
              {...props}
              id={id}
            ></input>

        </div>
    )
})

export default Input

/*
Forward Refrence:
1)we are creating a login form 
2) we are using same input Feild in username , password , every where
3) as input feild is in seprate space
4)we need the access of state of Input in login Form so we use forward Ref
  for eg:- 
    const Input = React.forwardRef(); To create refrence

    const Input = React.forwardRef(function Input(){
    return <h1>any</h1>
})


  ref={ref} here we are passing refrence that is taken as a prop while using it
  this will only give refrence to our parent component
*/
