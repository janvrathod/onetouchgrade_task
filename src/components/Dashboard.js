import { ArrowRightLeft, Search, Bell, Settings, Calendar } from "lucide-react";
import Sidebar from "./Sidebar";
import DatePicker from "react-datepicker";
import { useState } from "react";
import 'react-datepicker/dist/react-datepicker.css';

const Dashboard = () => {
  const [pickupDate, setPickupDate] = useState(null);
  const [deliveryDate, setDeliveryDate] = useState(null);


  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-background p-10">

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-black font-bold text-3xl">Courier Navigator</h2>
          <div className="flex items-center space-x-4">

            <div className="relative">
              <input
                type="text"
                className="border border-gray-300 rounded-md p-2 pl-10 w-64"
                placeholder="Search..."
              />
              <Search className="absolute left-2 top-2.5" />
            </div>
            <select className="border border-gray-300 rounded-md p-2">
              <option value="en" selected>Eng</option>
              <option value="es">Sns</option>
              <option value="fr">French</option>

            </select>

            <div className="flex space-x-2">
              <button>
                <Bell />
              </button>
              <button>
                <Settings />
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl text-black font-semibold mb-4">Account Details</h3>
          <div className="grid grid-cols-3 gap-4">
            {/* Account Details */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Account</label>
              <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                <option value="c_and_c">C AND C (CH)</option>
                <option value="account_b">Account B</option>
                <option value="account_c">Account C</option>
                <option value="account_d">Account D</option>
                <option value="account_e">Account E</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Booked By</label>
              <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="John" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Vehicle</label>
              <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                <option value="small_van">Small Van</option>
                <option value="large_van">Large Van</option>
                <option value="pickup">Pickup Truck</option>l̥
              </select>
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">Pickup Date</label>
              <DatePicker
                selected={pickupDate}
                onChange={(date) => setPickupDate(date)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md pr-10"
                placeholderText="dd/mm/yyyy"
                dateFormat="dd/MM/yyyy"
              />
              <span className="absolute inset-y-0 right-0 flex items-center pr-3 mt-5">
                <Calendar className="text-gray-500" /> 
              </span>
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">Delivery Date</label>
              <DatePicker
                selected={deliveryDate}
                onChange={(date) => setDeliveryDate(date)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md pr-10"
                placeholderText="dd/mm/yyyy"
                dateFormat="dd/MM/yyyy"
              />
              <span className="absolute inset-y-0 right-0 flex items-center pr-3 mt-5">
                <Calendar className="text-gray-500" /> 
              </span>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Purchase Order Number</label>
              <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="PO-12345" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Consign Note</label>
              <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="CN-6789D" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Total Pieces</label>
              <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="0" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Total Weight</label>
              <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="0.00 kg" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Miles</label>
              <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="0.0 miles" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Cost</label>
              <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="$0.00" />
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-6">
          {/* Collection Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
            <h3 className="text-xl text-black font-semibold mb-4">Collection</h3>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Company Name</label>
                <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" value="C AND C (CH)" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Street" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Town</label>
                  <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Town" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Post Code</label>
                  <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Number" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center"> 
            <div className="bg-white p-6 m-3 shadow-lg rounded-full flex items-center justify-center h-20 w-20 ">
              <ArrowRightLeft />
            </div>
          </div>

          {/* Delivery Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
          <h3 className="text-xl text-black font-semibold mb-4">Delivery</h3>
          <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Company Name</label>
                <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" value="C AND C (CH)" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Street" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Town</label>
                  <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Town" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Post Code</label>
                  <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Number" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-start mt-6">
          <button className="bg-white text-black border border-grey px-6 py-2 rounded-md mr-2">Reset</button>
          <button className="bg-primary text-white px-6 py-2 rounded-md mr-2">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
