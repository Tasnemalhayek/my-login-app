import React, { useState } from 'react';
import AdminLayout from './AdminLayout';
import { FaCheckCircle, FaTimesCircle, FaTools, FaSearch } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const dummyServices = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Service ${i + 1}`,
  provider: `Provider ${i + 1}`,
  status: 'pending',
}));

const SERVICES_PER_PAGE = 5;

const ManageServices = () => {
  const [visibleCount, setVisibleCount] = useState(SERVICES_PER_PAGE);
  const [searchTerm, setSearchTerm] = useState('');

  const handleApprove = (service) => {
    toast.success(`Service "${service.name}" approved!`);
  };

  const handleReject = (service) => {
    toast.error(`Service "${service.name}" rejected!`);
  };

  const filteredServices = dummyServices.filter(
    (service) =>
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.provider.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const visibleServices = filteredServices.slice(0, visibleCount);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + SERVICES_PER_PAGE);
  };

  return (
    <AdminLayout>
      <div className="bg-[#FEF8E7] p-6 rounded-lg shadow-md">
        {/* Header */}
        <div className="flex items-center mb-4">
          <FaTools className="text-[#FD7924] text-3xl mr-2" />
          <h2 className="text-2xl font-bold text-[#262626]">Manage Services</h2>
        </div>

        <p className="text-[#262626] mb-4">Review and approve or reject submitted services.</p>

        {/* Search */}
        <div className="mb-4 flex items-center gap-2">
          <FaSearch className="text-[#FD7924]" />
          <input
            type="text"
            placeholder="Search by service or provider"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 rounded border border-[#F7E9CC] w-full bg-white text-[#262626]"
          />
        </div>

        {/* Services List */}
        <div className="space-y-4">
          {visibleServices.length > 0 ? (
            visibleServices.map((service) => (
              <div
                key={service.id}
                className="bg-[#FBF6E3] border border-[#F7E9CC] p-4 rounded-md shadow flex justify-between items-center"
              >
                <div>
                  <h3 className="text-lg font-semibold text-[#262626]">{service.name}</h3>
                  <p className="text-sm text-[#262626]">By: {service.provider}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleApprove(service)}
                    className="flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
                  >
                    <FaCheckCircle /> Approve
                  </button>
                  <button
                    onClick={() => handleReject(service)}
                    className="flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                  >
                    <FaTimesCircle /> Reject
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-[#262626] text-center">No services found.</p>
          )}
        </div>

        {/* Show More */}
        {visibleCount < filteredServices.length && (
          <div className="text-center mt-6">
            <button
              onClick={handleShowMore}
              className="bg-[#FD7924] hover:bg-[#e5661b] text-white font-semibold py-2 px-6 rounded"
            >
              Show More
            </button>
          </div>
        )}

        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </AdminLayout>
  );
};

export default ManageServices;