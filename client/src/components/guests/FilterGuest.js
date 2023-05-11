import React, { useContext } from 'react';
import GuestContext from '../../comtext/guestContext/guestContext';

const FilterGuest = () => {
  const { toggleGuestFilter } = useContext(GuestContext);
  return (
    <div className="toggle">
      <label className="switch">
        <input type="checkbox" onChange={() => toggleGuestFilter()} />
        <span className="slider round"></span>
      </label>
      <p className="lead">Show attending only!</p>
    </div>
  );
};
export default FilterGuest;
