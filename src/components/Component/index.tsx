import React from 'react'
import { Component } from 'react';

type TextOwnProps<E extends React.ElementType> = {
    size?: 'sm' | 'md' | 'lg'
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
    children: React.ReactNode
    as?:E
}

type TextProps<E extends React.ElementType> = TextOwnProps<E> & Omit<React.ComponentProps<E>,keyof TextOwnProps<E>>

export const Text = <E extends React.ElementType>({size,color,children,as}:TextProps<E>) => {
    const Component = as || 'div'
    return <Component className={`class-with-${size}-${color}`}>{children}</Component>
}