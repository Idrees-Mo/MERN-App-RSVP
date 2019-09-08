import React, { useContext } from 'react'
import GuestContext from '../../comtext/guestContext/guestContext'

const CountGuest = () => {
  const { guests } = useContext(GuestContext)
  // total confirmed
  const confirmed = guests.filter(guest => guest.isconfirmed);
  // count by diet
  const countByDiet = (diet) => {
    return {
      total: guests.filter(guest => guest.diet === diet).length,
      confirmed: confirmed.filter(guest => guest.diet === diet).length
    };
  }

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Guest</th>
            <th>Invited</th>
            <th>Attending</th>
          </tr>
          <tr>
            <th>Non-veg</th>
            <td>{countByDiet('Non-Veg').total}</td>
            <td>{countByDiet('Non-Veg').confirmed}</td>
          </tr>
          <tr>
            <th>Vegan</th>
            <td>{countByDiet('Vegan').total}</td>
            <td>{countByDiet('Vegan').confirmed}</td>
          </tr>
          <tr>
            <th>Pescetarians</th>
            <td>{countByDiet('Pescatarian').total}</td>
            <td>{countByDiet('Pescatarian').confirmed}</td>
          </tr>
          <tr>
            <th>Total</th>
            <td>{guests.length}</td>
            <td>{confirmed.length}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CountGuest
