import React from 'react'

export default function Modal({ open, onClose, children }) {
  if (!open) return null

  return (
    <div>
      <button onClick={onClose}>Close Modal</button>
      {children}
    </div>
  )
}
