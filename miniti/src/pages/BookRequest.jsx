import React, { useEffect, useState } from 'react';
import addressApi from '../Api/AddressApi/Address.api';

const PickupRequestForm = () => {
  const [addressData, setAddressData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAddressData = async () => {
      try {
        const data = await addressApi.getAddressData();
        setAddressData(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch address data:', error);
        setLoading(false);
      }
    };

    fetchAddressData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Address Data</h1>
      <pre>{JSON.stringify(addressData, null, 2)}</pre>
    </div>
  );
};

export default PickupRequestForm;