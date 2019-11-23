import React from 'react'

function Button(props) {
  const classNames = ['btn']

  if (props.type) classNames.push(`btn-${props.type}`)

  return props.to ? (
    <a
      href={props.to}
      className={classNames.join(' ')}
    >
      { props.text }
    </a>
  ) : (
    <button
      type={props.nativeType}
      className={classNames.join(' ')}
    >
      {props.text}
    </button>
  )
}

export default Button