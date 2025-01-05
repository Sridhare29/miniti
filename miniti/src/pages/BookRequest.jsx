import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAddress } from '../state/actions/Address.action'

const PickupRequestForm = () => {
  const dispatch = useDispatch();
  const addresses = useSelector(state => state.address.addresses);

  useEffect(() => {
    dispatch(getAddress());
  }, [dispatch]);

  return (
    <div>
      <h2>Addresses</h2>
      <ul>
        {addresses.map((address) => (
          <li key={address.id}>
            <div>{address.unitNumber} {address.streetNumber}</div>
            <div>{address.addressLine1}</div>
            {address.addressLine2 && <div>{address.addressLine2}</div>}
            <div>
              {address.city}, {address.region} {address.postalCode}
            </div>
            <div>{address.country}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PickupRequestForm;