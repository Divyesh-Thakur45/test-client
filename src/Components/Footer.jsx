import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-900 text-gray-400">
                {/* Top Section */}
                <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-5 gap-6 border-b border-gray-700">
                    {/* About Section */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">ABOUT</h3>
                        <ul>
                            <li className="mb-2 hover:text-gray-200">
                                <a href="#">Contact Us</a>
                            </li>
                            <li className="mb-2 hover:text-gray-200">
                                <a href="#">About Us</a>
                            </li>
                            <li className="mb-2 hover:text-gray-200">
                                <a href="#">Careers</a>
                            </li>
                            <li className="mb-2 hover:text-gray-200">
                                <a href="#">Flipkart Stories</a>
                            </li>
                            <li className="hover:text-gray-200">
                                <a href="#">Press</a>
                            </li>
                        </ul>
                    </div>

                    {/* Group Companies */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">GROUP COMPANIES</h3>
                        <ul>
                            <li className="mb-2 hover:text-gray-200">
                                <a href="#">Myntra</a>
                            </li>
                            <li className="mb-2 hover:text-gray-200">
                                <a href="#">Cleartrip</a>
                            </li>
                            <li className="hover:text-gray-200">
                                <a href="#">Shopsy</a>
                            </li>
                        </ul>
                    </div>

                    {/* Help Section */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">HELP</h3>
                        <ul>
                            <li className="mb-2 hover:text-gray-200">
                                <a href="#">Payments</a>
                            </li>
                            <li className="mb-2 hover:text-gray-200">
                                <a href="#">Shipping</a>
                            </li>
                            <li className="mb-2 hover:text-gray-200">
                                <a href="#">Cancellation & Returns</a>
                            </li>
                            <li className="hover:text-gray-200">
                                <a href="#">FAQ</a>
                            </li>
                        </ul>
                    </div>

                    {/* Consumer Policy */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">CONSUMER POLICY</h3>
                        <ul>
                            <li className="mb-2 hover:text-gray-200">
                                <a href="#">Cancellation & Returns</a>
                            </li>
                            <li className="mb-2 hover:text-gray-200">
                                <a href="#">Terms Of Use</a>
                            </li>
                            <li className="mb-2 hover:text-gray-200">
                                <a href="#">Security</a>
                            </li>
                            <li className="mb-2 hover:text-gray-200">
                                <a href="#">Privacy</a>
                            </li>
                            <li className="hover:text-gray-200">
                                <a href="#">Sitemap</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Mail Us:</h3>
                        <p className="text-sm mb-4">
                            Flipkart Internet Private Limited, Buildings Alyssa, Begonia & Clove
                            Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village,
                            Bengaluru, 560103, Karnataka, India.
                        </p>
                        <h3 className="text-white font-semibold mb-4">Social:</h3>
                        {/* <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaYoutube />
              </a>
            </div> */}
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="bg-gray-800 py-4">
                    <div className="container mx-auto px-6 flex flex-wrap items-center justify-between">
                        <div className="text-sm text-gray-400">
                            <a href="#" className="hover:text-white">Become a Seller</a> |{" "}
                            <a href="#" className="hover:text-white">Advertise</a> |{" "}
                            <a href="#" className="hover:text-white">Gift Cards</a> |{" "}
                            <a href="#" className="hover:text-white">Help Center</a>
                        </div>
                        <div className="text-sm text-gray-400">
                            © Backend Project | Made By : Divyeshthakur370@gmail.com
                        </div>

                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer