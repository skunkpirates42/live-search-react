import React from 'react';

export default function SearchFrom (props) {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <label htmlFor="search">Search</label>
      <input 
        onChange={e => props.onChange(e.target.value)}
        name="search"
        id="search"
        placeholder="Dale Cooper"
        aria-live="polite"
      />
    </form>
  )
}
