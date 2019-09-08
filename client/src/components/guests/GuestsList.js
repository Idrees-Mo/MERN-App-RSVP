import React, { useContext, useEffect } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import GuestItem from '../guests/GuestItem'
import GuestContext from '../../comtext/guestContext/guestContext'
import AuthContext from '../../comtext/authContext/authContext'



const GuestsList = () => {

  const context = useContext(GuestContext)
  const { loading } = useContext(AuthContext)
  const { guests, guestFilter, searchGuest, getGuests } = context
  useEffect(() => {
    getGuests();
    // eslint-disable-next-line
  }, []);

  if (guests === null || guests.length === 0) {
    return <h3 className="no-guest">{loading ? 'Loading guests...' : 'Please add a guest'}</h3>
  }

  return (
    <div >
      <TransitionGroup className="guests">
        {searchGuest !== null ? searchGuest.map(guest => (
          <CSSTransition key={guest._id} timeout={300}
            classNames='item' >
            <GuestItem guest={guest} />
          </CSSTransition>)) :
          guests.filter(guest => !guestFilter || guest.isconfirmed).map(guest => (<CSSTransition key={guest._id} timeout={300}
            classNames='item'>
            <GuestItem guest={guest} />
          </CSSTransition>)
          )}
      </TransitionGroup>
    </div>
  )
}
export default GuestsList
