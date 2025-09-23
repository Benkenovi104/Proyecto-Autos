"use client"

import * as React from "react"

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode
}

const Label: React.FC<LabelProps> = ({ children, className = "", ...props }) => {
  return (
    <label 
      className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-black ${className}`}
      {...props}
    >
      {children}
    </label>
  )
}

export { Label }