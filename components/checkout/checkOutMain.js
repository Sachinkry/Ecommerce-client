import { useState, useEffect } from 'react';
import { useUserInfo } from "@/contexts/UserContext";

export default function CheckOutMain({ setTab }) {
  const { user, updateUserData } = useUserInfo();
  const [isDataStored, setIsDataStored] = useState(false);

  const [formData, setFormData] = useState({
    email: user.email || '',
    receiveUpdates: user.receiveUpdates || false,
    shippingInfo: user.shippingInfo || {
      country: '',
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      state: '',
      zip: ''
    },
    saveThisInfo: user.saveThisInfo || false
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

  const isFormValid = () => {
    const requiredFields = ['email', 'country', 'firstName', 'lastName', 'address', 'city', 'state', 'zip'];
    for (const field of requiredFields) {
      if (field in formData.shippingInfo) {
        if (!formData.shippingInfo[field]) return false;
      } else if (!formData[field]) return false;
    }
    return true;
  };
  

  return (
    <div>
      <form onSubmit={handleOnSubmit} className="rounded-lg h-full space-y-8">
        <div className="flex flex-col space-y-4">
          <input type="email" placeholder="Email Address" value={formData.email} className="w-full p-2 ring-1 ring-neutral-600 rounded-lg bg-neutral-800" onChange={(e) => handleInputChange(e, 'email')} />
          <label className="flex items-center text-xs text-neutral-500 hover:cursor-pointer">
            <input type="checkbox" checked={formData.receiveUpdates} className="mr-2" onChange={(e) => handleInputChange(e, 'receiveUpdates')} />
            Receive email updates for latest products or news
          </label>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Shipping Address</h2>
          <div className="flex flex-col space-y-4">
            {['country', 'firstName', 'lastName', 'address', 'city', 'state', 'zip'].map((field, idx) => (
              <input key={idx} type="text" value={formData.shippingInfo[field]} placeholder={field.charAt(0).toUpperCase() + field.slice(1)} className={`p-2 rounded-lg bg-neutral-800 ring-1 ring-neutral-600`} onChange={(e) => handleInputChange(e, 'shippingInfo', field)} />
            ))}
            <label className="flex items-center text-neutral-500 text-xs hover:cursor-pointer">
              <input type="checkbox" checked={formData.saveThisInfo} className="mr-2" onChange={(e) => handleInputChange(e, 'saveThisInfo')}/>
              Save this information
            </label>
          </div>
        </div>

        <div className="flex justify-between">
          <div className=" text-xs text-rose-600 hover:text-rose-600/80 flex flex-row items-center gap-1 hover:cursor-pointer" onClick={() => router.push('/')}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-3 h-3 ">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
              <span>Back</span>
          </div>
          <button type='submit' disabled={!isFormValid()} className={`px-5 p-4 ring-1 ring-rose-600 bg-rose-900 hover:ring-2 hover:text-rose-600 hover:bg-neutral-900 text-white rounded-lg text-xs ${isFormValid() ? '' : 'opacity-50 cursor-not-allowed'}`}>Continue to Shipping</button>
        </div>
      </form>
    </div>
  );
}
