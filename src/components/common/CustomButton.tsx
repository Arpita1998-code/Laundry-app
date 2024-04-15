import React from 'react'
import { Loader2 } from 'lucide-react'
import { Button } from '../ui/button'

const CustomButton = ({children, isDisable, isLoading, onClick, type, className}:any) => {
  return (
    <>
      <Button disabled={isLoading? isLoading : isDisable} onClick={onClick}  type={type} className={className}>
        {isLoading && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
        {children}
      </Button>
    </>
  )
}

export default CustomButton
