import React, { useContext } from 'react'
import GuestContext from '../../comtext/guestContext/guestContext'

const GuestItem = ({ guest }) => {
  const { removeGuest, edit_Guest, clearEdit, update_Guest } = useContext(GuestContext)
  const { _id, name, phone, diet, isconfirmed } = guest

  const handleRemove = () => {
    removeGuest(_id)
    clearEdit()
  }
  const onchange = () => {
    update_Guest({ ...guest, isconfirmed: !isconfirmed })
  }

  return (
    <div class="guest-card">
      <div class="card-head">
        <div >
          <label className={`${isconfirmed && 'confirm'}`}>Confirmed
            <i className={`fas fa-check-square ${isconfirmed && 'confirm'}`}><input type="checkbox" onChange={onchange} /> </i>
          </label>
        </div>
        <div>
          <button title="Edit Guest"><i class="fas fa-user-edit" onClick={() => edit_Guest(guest)} ></i></button>
          <button onClick={handleRemove} title="Remove Guest"><i class="fas fa-trash-alt remove"></i></button>
        </div>
      </div>
      <div class="card-body">
        <h2>{name}</h2>
        <span class={'badge ' + (diet === 'Vegan' ? 'green' : diet === 'Non-Veg' ? 'red' : 'seaGreen')}>{diet}</span>
        <div class="contact">
          <i class="fas fa-phone-alt"></i>
          <p>{phone}</p>
        </div>
      </div>
    </div>
  )
}

export default GuestItem
