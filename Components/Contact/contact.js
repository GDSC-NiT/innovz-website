import Head from 'next/head';

export default function Contact() {
    return (
        <div className="container mx-auto px-4 py-8">
            <Head>
                <title>Contact Us</title>
            </Head>
            <div className="px-4 py-2 flex justify-start items-center">
                <h3 className="text-gray-800 text-5xl font-NexaBlack tracking-wider uppercase animate-pulse mr-4">
                    <span className="text-pink-500">C</span><span className="text-white">on</span>tacts
                </h3>
            </div>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:pr-6 mb-8 lg:mb-0">
                    <div className="lg shadow-lg p-6">
                        <form id="contact-form">
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <div className="bg-white rounded-lg overflow-hidden border border-gray-300 h-16">
                                    <input className="appearance-none border-none w-full h-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="John Doe" />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
                                    Contact Number
                                </label>
                                <div className="bg-white rounded-lg overflow-hidden border border-gray-300 h-16">
                                    <input className="appearance-none border-none w-full h-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="tel" placeholder="123-456-7890" />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                                    Email Address
                                </label>
                                <div className="bg-white rounded-lg overflow-hidden border border-gray-300 h-16">
                                    <input className="appearance-none border-none w-full h-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="johndoe@example.com" />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="company">
                                    College or Company
                                </label>
                                <div className="bg-white rounded-lg overflow-hidden border border-gray-300 h-16">
                                    <select className="appearance-none border-none w-full h-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="company">
                                        <option value="college">College</option>
                                        <option value="company">Company</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:pl-6 ab">
                    <div className="mt-8">
                        <iframe src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.926764684758!2d88.3768763144279!3d22.67692968112897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0276f3c5d5d5d5%3A0x7c7d7d7d7d7d7d7d!2sLocation%20Name!5e0!3m2!1sen!2sus!4v1619719479265`} width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
                    </div>
                </div>

            </div>

        </div>
    );
}
