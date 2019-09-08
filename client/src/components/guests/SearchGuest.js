import React, { useRef, useContext } from 'react'
import GuestContext from '../../comtext/guestContext/guestContext'

const SearchGuest = () => {
  const { search_Guest, clearSearchGuest } = useContext(GuestContext)
  const guest = useRef('')
  const onchange = e => {
    if (guest.current.value !== '') {
      search_Guest(e.target.value)
    } else {
      clearSearchGuest()
    }
  }
  return (
    <div>
      <input ref={guest} onChange={onchange} type="text" placeholder="Search Guest by name..." className="search" />
      <i className="fas fa-search search-icon" />
    </div>
  )
}
export default SearchGuest
