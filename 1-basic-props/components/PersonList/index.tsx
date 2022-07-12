import React from 'react'

interface personProps {
    personList:Array<{
        firstName:string,
        lastName:string
    }>
}

const PersonNameList = (props:personProps) => {
  return (
    <div>
        {
            props.personList.length > 0 ?
            props.personList.map((person,index) => {
                return <p key={index}>{person.firstName}{person.lastName}</p>
            }): <p>No person</p>
        }
    </div>
  )
}

export default PersonNameList