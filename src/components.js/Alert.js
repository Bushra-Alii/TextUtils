import React from 'react'

export default function Alert(props) {
  return (
    <div style={{height: '20px'}}>
    {props.alert && <div className={`alert alert-success alert-dismissible fade show`} role="alert">
      <strong>{props.alert.type}</strong>: {props.alert.message}
       </div>}
       </div>
  )
}
