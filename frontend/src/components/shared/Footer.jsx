import React from 'react'
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="border-t border-t-gray-200 py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Brand & Description */}
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="text-2xl font-bold text-[#F83002]">Job<span className="text-[#6A38C2]">Hunt</span></h1>
              <p className="text-sm text-gray-500 mt-2">
                Connecting talent with opportunity. Find your dream job or the perfect candidate with our industry-leading platform.
              </p>
            </div>
            {/* Social Icons */}
            <div className="flex gap-4 mt-2">
              <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:text-[#6A38C2] hover:shadow-md transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:text-[#6A38C2] hover:shadow-md transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:text-[#6A38C2] hover:shadow-md transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:text-[#6A38C2] hover:shadow-md transition-all">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-2 text-gray-600">
              <li className="hover:text-[#F83002] cursor-pointer transition-colors">Home</li>
              <li className="hover:text-[#F83002] cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-[#F83002] cursor-pointer transition-colors">Latest Jobs</li>
              <li className="hover:text-[#F83002] cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="flex flex-col gap-2 text-gray-600">
              <li className="hover:text-[#F83002] cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-[#F83002] cursor-pointer transition-colors">Terms & Conditions</li>
              <li className="hover:text-[#F83002] cursor-pointer transition-colors">Fraud Alert</li>
              <li className="hover:text-[#F83002] cursor-pointer transition-colors">Trust & Safety</li>
            </ul>
          </div>

          {/* Column 4: Newsletter / Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Support</h3>
            <ul className="flex flex-col gap-2 text-gray-600">
              <li>123 Job Street, Tech City</li>
              <li>support@jobhunt.com</li>
              <li>+92 300 1234567</li>
            </ul>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-gray-200 mt-10 pt-6 text-center text-gray-500 text-sm">
          <p>© 2025 JobHunt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer