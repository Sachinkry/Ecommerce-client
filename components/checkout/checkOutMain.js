import { useState, useEffect } from 'react';
import { useUserInfo } from "@/contexts/UserContext";

export default function CheckOutMain({ setTab }) {
  const { user, updateUserData } = useUserInfo();
  const [isDataStored, setIsDataStored] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    receiveUpdates: false,
    shippingInfo: {
      country: '',
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      state: '',
      zip: ''
    },
    saveThisInfo: false
  });

  useEffect(() => {
    if (isDataStored) {
      setTab('Shipping');
    }
  }, [isDataStored]);

  


  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.saveThisInfo) {
        updateUserData(formData);
      }
      setIsDataStored(true);
    } catch (err) {
      console.error('Error updating user data:', err);
    }
  };

  const handleInputChange = (e, key, subKey) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    if (subKey) {
      setFormData({ ...formData, [key]: { ...formData[key], [subKey]: value } });
    } else {
      setFormData({ ...formData, [key]: value });
    }
  };

  return (
    <div>
    <form onSubmit={handleOnSubmit} className="rounded-lg h-full space-y-8">
      <div className="flex flex-col space-y-4">
        <input type="email" placeholder="Email Address" value={user.email || ''} className="w-full p-2 ring-1 ring-neutral-600 rounded-lg bg-neutral-800" onChange={(e) => handleInputChange(e, 'email')} />
        <label className="flex items-center text-xs text-neutral-500 hover:cursor-pointer">
          <input type="checkbox" checked={user.receiveUpdates || false} className="mr-2" onChange={(e) => handleInputChange(e, 'receiveUpdates')} />
          Receive email updates for latest products or news
        </label>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Shipping Address</h2>
        <div className="flex flex-col space-y-4">
          {['country', 'firstName', 'lastName', 'address', 'city', 'state', 'zip'].map((field, idx) => (
            <input key={idx} type="text" value={user.shippingInfo ? user.shippingInfo[field] || '' : ''} placeholder={field.charAt(0).toUpperCase() + field.slice(1)} className={`p-2 rounded-lg bg-neutral-800 ring-1 ring-neutral-600`} onChange={(e) => handleInputChange(e, 'shippingInfo', field)} />
          ))}
          <label className="flex items-center text-neutral-500 text-xs hover:cursor-pointer">
            <input type="checkbox" checked={user.saveThisInfo || false} className="mr-2" onChange={(e) => handleInputChange(e, 'saveThisInfo')}/>
            Save this information
          </label>
        </div>
      </div>

      <div className="flex justify-end">
        <button type='submit' className="px-5 p-4 ring-1 ring-rose-600 bg-rose-900 hover:ring-2 hover:text-rose-600 hover:bg-neutral-900 text-white rounded-lg text-xs" >Continue to Shipping</button>
      </div>
    </form>
    </div>
  );
}
