import React from 'react';

type ButtonProps = {
    variant:'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark',
} & React.ComponentProps<'button'>


//这样写就会使得button组件中的children属性限制为string类型
// type ButtonProps = {
//     variant:'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark',
//     children:string
// } & Omit<React.ComponentProps<'button'>,'children'>

export const CustomButton = ({variant,children,...rest}:ButtonProps) => {
    return <button className={`class-with-${variant}`} {...rest}>{children}</button>
}