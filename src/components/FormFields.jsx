import React from 'react';

const FormFields = ({ name, setName, birthDate, setBirthDate }) => (
    <>
        <div className="mb-4">
            <label className="block text-gray-700">Full Name</label>
            <input 
                type="text" 
                className="w-full border border-gray-300 p-2 rounded box-border cursor-pointer"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
        </div>
        <div className="mb-6">
            <label className="block text-gray-700">Birth Date</label>
            <input 
                type="date" 
                className="w-full border border-gray-300 p-2 rounded box-border cursor-pointer"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                required
            />
        </div>
    </>
);

export default FormFields;