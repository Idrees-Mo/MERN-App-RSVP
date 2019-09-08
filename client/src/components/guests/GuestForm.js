import React, { useContext, useState, useEffect } from 'react'
import GuestContext from '../../comtext/guestContext/guestContext'

const GuestForm = () => {
  const context = useContext(GuestContext)
  const { addGuest, editGuest, clearEdit, update_Guest } = context

  useEffect(() => {
    if (editGuest !== null) {
      setGuest(editGuest)
    } else {
      setGuest({
        name: '',
        phone: '',
        diet: 'Non-Veg'
      })
    }
  }, [editGuest, context])

  const [guest, setGuest] = useState({
    name: '',
    phone: '',
    diet: 'Non-Veg'
  })
  const { name, phone, diet } = guest
  const onchange = (e) => {
    setGuest({
      ...guest,
      [e.target.name]: e.target.value
    })
  }
  const onsubmit = (e) => {
    e.preventDefault();
    if (editGuest === null) {
      addGuest(guest);

    } else {
      update_Guest(guest)
      clearEdit()
    }
    setGuest({
      name: '',
      phone: '',
      diet: 'Non-Veg',
    })
  }
  return (

    <div className="invite-section">
      <h1>{editGuest !== null ? 'Edit Guest' : 'Invite Someone'}</h1>
      <form onSubmit={onsubmit} >
        <input type="text" placeholder="Name" name="name" value={name} onChange={onchange} required />
        <input type="text" placeholder="Phone" name="phone" value={phone} onChange={onchange} required />
        <p className="options-label">
          Dietary</p>
        <div className="options">
          <label class="container">Non-Veg
          <input type="radio" name="diet" value="Non-Veg" onChange={onchange} checked={diet === "Non-Veg"} />
            <span class="checkmark"></span>
          </label>
          <label class="container">Vegan
          <input type="radio" name="diet" value="Vegan" onChange={onchange} checked={diet === "Vegan"} />
            <span class="checkmark"></span>
          </label>
          <label class="container">Pescatarian
          <input type="radio" name="diet" value="Pescatarian" onChange={onchange} checked={diet === "Pescatarian"} />
            <span class="checkmark"></span>
          </label>
        </div>
        <input type="submit" value={editGuest !== null ? 'Update Guest' : 'Add Guest'} className="btn" />
        {editGuest !== null ? < input onClick={clearEdit} type="button" className="btn clear" value="Cancel" /> : null}
      </form>

    </div>
  )
}

export default GuestForm



