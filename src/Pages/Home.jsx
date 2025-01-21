import React from 'react'

const Home = () => {
    return (
        <div>
            <div>
                <header className="bg-blue-500 text-white">
                    <div className="container mx-auto flex flex-col items-center justify-center py-20 px-6 text-center">
                        <h1 className="text-4xl font-bold mb-4">
                            Welcome to MyShop!
                        </h1>
                        <p className="text-lg mb-6">
                            Discover the best products at unbeatable prices.
                        </p>
                        <button className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-full shadow-lg hover:bg-gray-200">
                            Shop Now
                        </button>
                    </div>
                </header>

            </div>
        </div>
    )
}

export default Home