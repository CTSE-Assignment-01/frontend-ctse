import React, { useEffect, useState } from "react";
import { getDestinations } from "controllers/DestinationService";
import { Text, Img, Heading } from "../../components";
import { Button } from "antd";

function Blog() {
  const [destinations, setDestinations] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);

  const fetchDestinations = async () => {
    try {
      const response = await getDestinations();
      setDestinations(response.data);
    } catch (error) {
      console.error("Error fetching destinations:", error);
    }
  };

  useEffect(() => {
    fetchDestinations();
  }, []);

  const openModal = (destination) => {
    setSelectedDestination(destination);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // Function to chunk the destinations into rows of 3
  const chunkArray = (array, size) => {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  };

  const destinationRows = chunkArray(destinations, 3);

  const truncateText = (text, maxLength) => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <a href="/" className="flex items-center">
                  <span className="font-bold text-xl text-blue-600">Sri Lanka Railways</span>
                </a>
              </div>
              <div className="ml-6 flex space-x-8">
                <a href="/" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                  Home
                </a>
                <a href="/blog" className="inline-flex items-center px-1 pt-1 border-b-2 border-blue-500 text-sm font-medium text-gray-900">
                  Destinations
                </a>
                {/* <a href="/destinations" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                  Destinations
                </a> */}
                <a href="/about" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                  About Us
                </a>
                <a href="/contact" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                  Contact
                </a>
              </div>
            </div>
            <div className="ml-6 flex items-center">
              <a href="/login" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                Sign In
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Content with padding for fixed navbar */}
      <div className="pt-16">
        {/* Blog Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Explore Amazing Destinations
            </h1>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              Discover the world's most breathtaking locations and plan your next adventure
            </p>
          </div>

          {/* Blog Cards - Exactly 3 per row */}
          {destinationRows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-row gap-8 mb-8 md:flex-wrap sm:flex-wrap">
              {row.map((destination) => (
                <div
                  key={destination._id}
                  className="flex-1 bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-xl md:min-w-[300px] sm:min-w-full sm:mb-6"
                  onClick={() => openModal(destination)}
                >
                  <div className="h-48 w-full overflow-hidden">
                    <img
                      src={destination.imageUrl || "/api/placeholder/400/320"}
                      alt={destination.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">{destination.name}</h2>
                    <p className="text-gray-500 line-clamp-3">{truncateText(destination.description, 100)}</p>
                    <div className="mt-4 flex items-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                        View Details
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Add placeholder divs if row has fewer than 3 items */}
              {Array(3 - row.length).fill().map((_, index) => (
                <div key={`empty-${index}`} className="flex-1 sm:hidden md:block"></div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && selectedDestination && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 w-1/2 mx-auto">
            {/* Background overlay */}
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={closeModal}></div>

            {/* Modal panel */}
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                    <div className="h-64 w-full overflow-hidden rounded-lg mb-4">
                      <img
                        src={selectedDestination.imageUrl || "/api/placeholder/400/320"}
                        alt={selectedDestination.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-2xl leading-6 font-bold text-gray-900 mb-4" id="modal-title">
                      {selectedDestination.name}
                    </h3>
                    <div className="mt-2">
                      <p className="text-gray-700">{selectedDestination.description}</p>
                      
                      {selectedDestination.highlights && (
                        <div className="mt-4">
                          <h4 className="text-lg font-medium text-gray-900 mb-2">Highlights</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            {selectedDestination.highlights.map((highlight, index) => (
                              <li key={index} className="text-gray-700">{highlight}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Book Now
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="flex items-center justify-center bg-blue_gray-900 p-10 sm:p-5">
        <div className="mx-auto flex w-full max-w-[1420px] flex-col items-center justify-center gap-[33px]">
          <div className="h-px w-full self-stretch bg-white-A700_19" />
          <div className="flex flex-col gap-8 self-stretch">
            <div className="flex items-start justify-between gap-5 md:flex-col">
              <div className="flex flex-col items-start gap-5">
                <Heading
                  size="md"
                  as="h5"
                  className="!font-extrabold !text-white-A700"
                >
                  Home
                </Heading>
                <div className="flex flex-col items-start gap-3.5">
                  <a href="Home" target="_blank" rel="noreferrer">
                    <Heading as="h6" className="!text-white-A700">
                      Home
                    </Heading>
                  </a>
                  <a href="blog" target="_blank" rel="noreferrer">
                    <Heading as="h6" className="!text-white-A700">
                      Blog
                    </Heading>
                  </a>
                  <a href="#">
                    <Heading as="h6" className="!text-white-A700">
                      About Us
                    </Heading>
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center gap-5">
                <Heading
                  size="md"
                  as="h5"
                  className="!font-extrabold !text-white-A700"
                >
                  Help
                </Heading>
                <a href="#">
                  <Heading as="h6" className="!text-white-A700">
                    Terms of Use
                  </Heading>
                </a>
              </div>
              <div className="flex w-[23%] flex-col items-start gap-5 md:w-full">
                <Heading
                  size="md"
                  as="h5"
                  className="!font-extrabold !text-white-A700"
                >
                  Contacts
                </Heading>
                <div className="flex flex-col gap-[19px] self-stretch">
                  <div className="flex items-center gap-2.5">
                    <Img
                      src="images/img_ci_location.svg"
                      alt="cilocation_one"
                      className="h-[24px] w-[24px]"
                    />
                    <Heading
                      as="h6"
                      className="w-[92%] leading-[26px] !text-white-A700"
                    >
                      <>
                        Sri Lanka Railways Headquarters,
                        <br />
                        Colombo 10 , Sri Lanka
                      </>
                    </Heading>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Img
                      src="images/img_clarity_phone_handset_solid.svg"
                      alt="clarityphone"
                      className="h-[24px] w-[24px] self-start"
                    />
                    <Heading as="h6" className="!text-white-A700">
                      +94 11 4 600 111
                    </Heading>
                  </div>
                  <div className="flex items-center gap-2.5 self-center pr-[29px] sm:pr-5">
                    <Img
                      src="images/img_fluent_mail_16_filled.svg"
                      alt="fluentmailsixte"
                      className="h-[24px] w-[24px] self-start"
                    />
                    <Heading as="h6" className="self-end !text-white-A700">
                      srilankarailway@gmail.com
                    </Heading>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-5">
                <Heading
                  size="md"
                  as="h5"
                  className="!font-extrabold !text-white-A700"
                >
                  Social Media
                </Heading>
                <div className="flex gap-5 self-start">
                  <Button shape="square" className="w-[50px]">
                    <Img src="images/img_ant_design_twit.svg" />
                  </Button>
                  <Button shape="square" className="w-[50px]">
                    <Img src="images/img_entypo_social_f.svg" />
                  </Button>
                  <Button shape="square" className="w-[50px]">
                    <Img src="images/img_ant_design_twit_orange_600.svg" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="h-px bg-white-A700_19" />
          </div>
          <Text as="p" className="text-center !text-white-A700">
            ©2022 Sri Lanka Railways (SLR). All rights Reserved Sri Lanka
            Railways
          </Text>
        </div>
      </footer>
    </div>
  );
}

export default Blog;