import { Home, Package, FileText, MessageCircle, Users, HelpCircle, Settings, CreditCard, DollarSign, User, LogOut } from 'lucide-react';
import logo from '../assets/britna_logo_red.png';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen p-6 flex flex-col">
      <div className="mb-10">
        <img src={logo} alt="Logo" className="w-32 mx-auto" />
      </div>

      <ul className="space-y-4 flex-grow">
        <li><a href="#" className="flex items-center space-x-2 hover:bg-secondary p-2 rounded"><Home /> <span>Dashboard</span></a></li>
        <li><a href="#" className="flex items-center space-x-2 hover:bg-secondary p-2 rounded"><Package /> <span>Shipment</span></a></li>
        <li><a href="#" className="flex items-center space-x-2 hover:bg-secondary p-2 rounded"><FileText /> <span>Order</span></a></li>
        <li><a href="#" className="flex items-center space-x-2 hover:bg-secondary p-2 rounded"><MessageCircle /> <span>Message</span></a></li>
        <li><a href="#" className="flex items-center space-x-2 hover:bg-secondary p-2 rounded"><Users /> <span>Customers</span></a></li>
        <li><a href="#" className="flex items-center space-x-2 hover:bg-secondary p-2 rounded"><HelpCircle /> <span>Help & Support</span></a></li>
        <li><a href="#" className="flex items-center space-x-2 hover:bg-secondary p-2 rounded"><Settings /> <span>Settings</span></a></li>
        <h1 className="text-2xl font-bold mb-8">Payment</h1>
        <li><a href="#" className="flex items-center space-x-2 hover:bg-secondary p-2 rounded"><CreditCard /> <span>Taxes</span></a></li>
        <li><a href="#" className="flex items-center space-x-2 hover:bg-secondary p-2 rounded"><CreditCard /> <span>Payment</span></a></li>
      </ul>

      <div className="mt-60 p-2 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <User className="text-gray-600" />
            <span className="text-lg font-semibold">Janvi Rathod</span>
          </div>
          <a href="#" className="p-2 hover:bg-secondary rounded-full">
            <LogOut className="text-gray-600" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
