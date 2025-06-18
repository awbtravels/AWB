import React from 'react';

const ConsultationPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-8 shadow-lg rounded">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">Visa Consultation Form</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full border px-4 py-2 rounded" />
          <input type="email" placeholder="Email Address" className="w-full border px-4 py-2 rounded" />
          <input type="text" placeholder="Destination Country" className="w-full border px-4 py-2 rounded" />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConsultationPage;
