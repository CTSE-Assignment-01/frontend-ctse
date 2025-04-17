import React, { useState } from "react";
import { Text, Button, Img, Heading, Input, SelectBox } from "../../components";
import { useNavigate } from "react-router-dom";
import { useSnapshot } from "valtio";
import state from "store";
import { Footer } from "antd/es/layout/layout";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function BookTwoPage() {
  const navigate = useNavigate();
  const snap = useSnapshot(state);
  const selectedTrain = snap.selectedTrain;

  // State to store user details
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    nicOrPassport: "",
    phoneNumber: "",
    adult: 0,
    child: 0,
    infant: 0,
  });

  // Handler for input changes
  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    await new Promise((resolve) => {
      setUserDetails((prevState) => ({
        ...prevState,
        [name]: value,
      }));
      resolve();
    });
  };

  const handleClick = () => {
    state.ticketUserData = userDetails;
    navigate("/bookthree");
  };

  return (
    <div>
      <div className="flex w-full flex-col items-center p-32 justify-center gap-[142px] bg-white-A700 pt-[228px] md:gap-[106px] md:pt-5 sm:gap-[71px]">
        <div className="mx-auto flex w-full max-w-[1437px] flex-col items-center gap-[110px] md:gap-[82px] md:p-5 sm:gap-[55px]">
          <div className="flex w-[82%] justify-between gap-5 md:w-full md:flex-col">
            <div className="flex items-center md:flex-col">
              <div className="flex flex-col items-center gap-[9px]">
                <Heading
                  size="md"
                  as="h1"
                  className="flex h-[37px] w-[37px] items-center justify-center rounded-[18px] bg-orange-600 text-center !text-white-A700"
                >
                  1
                </Heading>
                <Heading
                  size="md"
                  as="h2"
                  className="text-center !text-orange-600"
                >
                  Train Details
                </Heading>
              </div>
              <div className="ml-[209px] flex flex-col items-center gap-[9px] md:ml-0">
                <Heading
                  size="md"
                  as="h3"
                  className="flex h-[37px] w-[37px] items-center justify-center rounded-[18px] bg-orange-600 text-center !text-white-A700"
                >
                  2
                </Heading>
                <Heading
                  size="md"
                  as="h4"
                  className="text-center !text-orange-600"
                >
                  Your Details
                </Heading>
              </div>
              <div className="ml-[173px] flex flex-col items-center gap-[11px] md:ml-0">
                <Heading
                  size="md"
                  as="h5"
                  className="flex h-[37px] w-[37px] items-center justify-center rounded-[18px] bg-gray-200 text-center !text-blue_gray-900_66"
                >
                  3
                </Heading>
                <Text
                  size="md"
                  as="p"
                  className="text-center !text-blue_gray-900_66"
                >
                  Confirmation & Payment
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-center gap-[11px]">
              <Heading
                size="md"
                as="h6"
                className="flex h-[37px] w-[37px] items-center justify-center rounded-[18px] bg-gray-200 text-center !text-blue_gray-900_66"
              >
                4
              </Heading>
              <Text
                size="md"
                as="p"
                className="text-center !text-blue_gray-900_66"
              >
                Ticket Summery
              </Text>
            </div>
          </div>
          <div className="flex items-start justify-between gap-5 self-stretch md:flex-col">
            <div className="flex w-[48%] flex-col items-start gap-[45px] md:w-full">
              <Heading size="xl" as="h2" className="ml-1 text-center md:ml-0">
                Your Details
              </Heading>

              <div className="flex flex-col gap-6 self-stretch">
                <div className="flex flex-col items-start gap-[19px]">
                  <label htmlFor="firstName" className="text-lg font-semibold">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={userDetails.firstName}
                    placeholder="Enter your First name"
                    onChange={handleInputChange}
                    className="border border-solid border-blue_gray-900_33 font-semibold sm:pr-5 p-2 rounded"
                  />
                </div>
                <div className="flex flex-col items-start gap-[18px]">
                  <label htmlFor="lastName" className="text-lg font-semibold">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={userDetails.lastName}
                    placeholder="Enter your last name"
                    onChange={handleInputChange}
                    className="border border-solid border-blue_gray-900_33 font-semibold sm:px-5 p-2 rounded"
                  />
                </div>
                <div className="flex gap-[33px] md:flex-col">
                  <div className="flex w-full flex-col items-start gap-[19px]">
                    <label htmlFor="gender" className="text-lg font-semibold">
                      Gender
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      value={userDetails.gender}
                      onChange={handleInputChange}
                      className="border border-solid border-blue_gray-900_33 font-semibold sm:px-5 p-2 rounded"
                    >
                      <option value="" disabled selected>
                        Select the Gender
                      </option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-4">
                  <label
                    htmlFor="nicOrPassport"
                    className="text-lg font-semibold"
                  >
                    NIC Number or Passport number
                  </label>
                  <input
                    type="number"
                    id="nicOrPassport"
                    name="nicOrPassport"
                    placeholder="200057902768"
                    value={userDetails.nicOrPassport}
                    onChange={handleInputChange}
                    className="border border-solid border-blue_gray-900_33 font-semibold !text-blue_gray-900 sm:px-5 p-2 rounded"
                  />
                </div>
                <div className="flex flex-col items-start gap-[19px]">
                  <label
                    htmlFor="phoneNumber"
                    className="text-lg font-semibold"
                  >
                    Mobile Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="+94 740741307"
                    value={userDetails.phoneNumber}
                    onChange={handleInputChange}
                    className="border border-solid border-blue_gray-900_33 font-semibold !text-blue_gray-900 sm:px-5 p-2 rounded"
                  />
                </div>
              </div>

              {/* Ticket Selection Section */}
              <div className="flex flex-col items-start gap-23 self-stretch">
                <h4 className="font-semibold">Select Your Tickets</h4>
                <div className="flex flex-col gap-30 self-stretch">
                  {/* Adult Ticket */}
                  <div className="flex flex-1 items-center justify-between gap-5 rounded-12 border-0.5px border-solid border-blue_gray-900_33 p-4">
                    <div className="ml-2 flex flex-col gap-7 md:ml-0">
                      <div className="font-bold">Adult (18+)</div>
                      <input
                        type="text"
                        className="font-bold text-orange-600"
                        placeholder="Rs.1400.00"
                      />
                    </div>
                    <div className="mr-2 flex rounded-md border border-solid border-gray-200 md:mr-0">
                      <input
                        type="number"
                        className="gray_200 sm font-semibold"
                        name="adult"
                        value={userDetails.adult}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  {/* Child Ticket */}
                  <div className="flex flex-1 items-center justify-between gap-5 rounded-12 border-0.5px border-solid border-blue_gray-900_33 p-4 sm:flex-col">
                    <div className="ml-2 flex flex-col items-start gap-2 md:ml-0">
                      <div className="font-bold">Child (6-17)</div>
                      <p className="s">Only in combination with: Adult (18+)</p>
                      <input
                        type="text"
                        className="font-bold text-orange-600"
                        placeholder="Rs. 700.00"
                      />
                    </div>
                    <div className="mr-13px flex rounded-md border border-solid border-gray-200 md:mr-0">
                      <input
                        type="number"
                        className="gray_200 sm font-semibold"
                        name="child"
                        value={userDetails.child}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-[43%] flex-col items-start gap-[29px] rounded-[24px] border border-solid border-blue_gray-900_33 bg-white-A700 p-[30px] md:w-full sm:p-5">
              <Heading size="lg" as="h4" className="!font-extrabold">
                Your Tickets Overview
              </Heading>
              <div className="self-stretch">
                <div className="border-b border-solid border-gray-200 py-5">
                  <div className="flex flex-col items-start gap-2.5">
                    <Heading size="lg" as="h4">
                      {selectedTrain?.name}
                    </Heading>
                    <div className="flex w-[55%] flex-col gap-3 md:w-full">
                      <div className="flex items-center gap-2.5 self-start">
                        <Img
                          src="images/img_calendar_orange_600.svg"
                          alt="calendar_one"
                          className="h-[24px] w-[24px] self-start"
                        />
                        <Heading as="h6">FRI, 23 DEC 2024</Heading>
                      </div>
                      <div className="flex gap-2.5 self-start">
                        <Img
                          src="images/img_system_uicons_clock_orange_600.svg"
                          alt="systemuicons"
                          className="h-[24px] w-[24px] self-start"
                        />
                        <Heading as="h6">14:30 - 18:05 PM</Heading>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-px border-b border-solid border-gray-200 py-5">
                  <div className="flex flex-1 items-center justify-between gap-5 py-4">
                    <div className="flex flex-wrap items-center gap-[13px]">
                      <Heading
                        size="md"
                        as="h5"
                        className="flex h-[37px] w-[37px] items-center justify-center rounded-[18px] bg-gray-200 text-center !text-blue_gray-900_cc"
                      >
                        {userDetails.adult}
                      </Heading>
                      <Text
                        size="md"
                        as="p"
                        className="mb-[3px] self-end text-center !text-blue_gray-900_cc"
                      >
                        Adult (18+){" "}
                      </Text>
                    </div>
                    <Heading size="md" as="h5" className="text-center">
                      Rs.{userDetails.adult * 2500}
                    </Heading>
                  </div>
                  <div className="flex flex-1 items-center justify-between gap-5 py-4">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <Heading
                        size="md"
                        as="h5"
                        className="flex h-[37px] w-[37px] items-center justify-center rounded-[18px] bg-gray-200 text-center !text-blue_gray-900_cc"
                      >
                        {userDetails.child}
                      </Heading>
                      <Text
                        size="md"
                        as="p"
                        className="mb-[3px] self-end text-center !text-blue_gray-900_cc"
                      >
                        Child (6-17)
                      </Text>
                    </div>
                    <Heading size="md" as="h5" className="text-center">
                      Rs.{userDetails.child * 1000}
                    </Heading>
                  </div>
                  <div className="flex flex-1 items-center justify-between gap-5 py-4">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <Heading
                        size="md"
                        as="h5"
                        className="flex h-[37px] w-[37px] items-center justify-center rounded-[18px] bg-gray-200 text-center !text-blue_gray-900_cc"
                      >
                        {userDetails.infant}
                      </Heading>
                      <Text
                        size="md"
                        as="p"
                        className="mb-[3px] self-end text-center !text-blue_gray-900_cc"
                      >
                        Infant (0-5){" "}
                      </Text>
                    </div>
                    <Heading
                      size="md"
                      as="h5"
                      className="text-center"
                    ></Heading>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-5 py-[5px] pl-[5px]">
                  <Heading
                    size="lg"
                    as="h4"
                    className="mb-3.5 mt-[15px] !text-blue_gray-900_cc"
                  >
                    Total Price
                  </Heading>
                  <Heading
                    size="lg"
                    as="h4"
                    className="text-right !text-orange-600"
                  >
                    Rs.
                    {userDetails.adult * 2500 +
                      userDetails.child * 2500 +
                      userDetails.infant * 2500}
                  </Heading>
                </div>
              </div>
              <Button
                size="xl"
                shape="round"
                className="w-full font-bold sm:px-5"
                onClick={handleClick}
              >
                Go to the Next Step
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
