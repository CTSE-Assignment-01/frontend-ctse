import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Img, Heading, Radio } from "../../components";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useSnapshot } from "valtio";
import state from "store";
import { createBooking } from "controllers/BookingService";
import { message } from "antd";

export default function BookThreePage() {
  const navigate = useNavigate();
  const snap = useSnapshot(state);
  const selectedTrain = snap.selectedTrain;
  const userDetails = snap.ticketUserData;
  console.log("user details", localStorage.getItem("user"));
  const placeBooking = async () => {
    console.log("Clicked");

    const total =
      userDetails.adult * 2500 +
      userDetails.child * 2500 +
      userDetails.infant * 2500;
    const bookingData = {
      passengerFirstName: userDetails.firstName,
      passengerLastName: userDetails.lastName,
      bookedBy: "6635b0a86d435efe221ef0c7",
      gender: userDetails.gender,
      nicOrPassport: userDetails.nicOrPassport,
      mobileNumber: userDetails.phoneNumber,
      trainDetails: {
        trainId: selectedTrain._id,
        departureDate: selectedTrain.date,
        departureTime: selectedTrain.departureTime,
      },
      tickets: {
        adults: userDetails.adult,
        children: userDetails.child,
        infants: userDetails.infant,
      },
      totalPrice: total,
    };

    try {
      console.log(bookingData);
      await createBooking(bookingData);
      message.success("Booking created successfully");
      navigate("/");
    } catch (error) {
      message.error("Error creating your booking");
    } finally {
      // state.selectedTrain = null;
      // state.ticketUserData = null;
      // state.ticketData = null;
    }
  };
  return (
    <>
      <Helmet>
        <title>Train Ticket Management System</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex w-full flex-col items-center justify-center gap-[131px] bg-white-A700 pt-[241px] md:gap-[98px] md:pt-5 sm:gap-[65px]">
        <div className="mx-auto flex w-full max-w-[1356px] flex-col items-center md:p-5">
          <div className="flex w-[86%] justify-between gap-5 md:w-full md:flex-col">
            <div className="relative h-[76px] w-[73%] md:w-full">
              <div className="absolute bottom-0 left-[0.00px] top-0 my-auto flex h-max w-[88%] items-start justify-between gap-5 sm:relative sm:flex-col">
                <div className="flex w-[59%] justify-between gap-5 sm:w-full">
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
                  <div className="flex flex-col items-center gap-[9px]">
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
                </div>
                <Heading
                  size="md"
                  as="h5"
                  className="flex h-[37px] w-[37px] items-center justify-center rounded-[18px] bg-orange-600 text-center !text-white-A700"
                >
                  3
                </Heading>
              </div>
              <Heading
                size="md"
                as="h6"
                className="absolute bottom-[-0.75px] right-[0.00px] m-auto text-center !text-orange-600"
              >
                Confirmation & Payment
              </Heading>
            </div>
            <div className="flex flex-col items-center gap-[11px]">
              <Heading
                size="md"
                as="h5"
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
          <Heading
            size="xl"
            as="h2"
            className="ml-2 mt-[81px] self-start md:ml-0"
          >
            Select a payment method
          </Heading>
          <div className="mt-12 flex items-start justify-between gap-5 self-stretch md:flex-col">
            <div className="mt-[25px] flex w-[47%] flex-col gap-[17px] md:w-full">
              <div className="flex items-start rounded-[12px] border border-solid border-blue_gray-900_33 bg-white-A700 p-1.5 md:flex-col">
                <Radio
                  value="paypal1"
                  name="paypal"
                  label="PayPal"
                  className="mt-[9px] gap-2 text-lg font-semibold text-blue_gray-900"
                />
                <Text
                  as="p"
                  className="ml-[15px] mt-1 w-[76%] leading-6 !text-blue_gray-900 md:ml-0 md:w-full"
                >
                  You will be redirected to the PayPal website after submitting
                  your order
                </Text>
                <div className="ml-[29px] mt-[3px] flex w-[7%] justify-center rounded border border-solid border-blue_gray-200 bg-white-A700 p-[5px] md:ml-0 md:w-full md:p-5">
                  <Img
                    src="images/img_call.svg"
                    alt="call_one"
                    className="h-[14px] w-[13px]"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start rounded-[12px] border border-solid border-yellow-800 p-2.5">
                <div className="mr-[3px] flex gap-[17px] self-end md:mr-0">
                  <div className="flex rounded border border-solid border-blue_gray-200 bg-white-A700 p-[5px]">
                    <Img
                      src="images/img_settings.svg"
                      alt="settings_one"
                      className="my-[3px] h-[8px]"
                    />
                  </div>
                  <div className="flex rounded border border-solid border-blue_gray-200 bg-white-A700 p-px">
                    <Img
                      src="images/img_settings_blue_gray_900.svg"
                      alt="settings_three"
                      className="mt-[9px] h-[15px]"
                    />
                  </div>
                  <div className="flex rounded border border-solid border-blue_gray-200 bg-white-A700 p-[5px]">
                    <Img
                      src="images/img_close.svg"
                      alt="close_one"
                      className="h-[15px] self-start"
                    />
                  </div>
                  <div className="flex rounded border border-solid border-blue_gray-200 bg-white-A700 p-[5px]">
                    <Img
                      src="images/img_user_red_a700.svg"
                      alt="user_one"
                      className="h-[15px] self-start"
                    />
                  </div>
                </div>
                <div className="ml-1 mt-[34px] flex w-[79%] flex-col items-start gap-[15px] md:ml-0 md:w-full">
                  <Radio
                    value="paywithcreditcard"
                    name="paywithcredit"
                    label="Pay with Credit Card"
                    className="gap-2 rounded-[12px] text-lg font-semibold text-blue_gray-900"
                  />
                  <div className="flex gap-[17px] self-stretch sm:flex-col">
                    <div className="flex flex-1 gap-px rounded border border-solid border-orange-600 py-[11px] pl-3.5 pr-[35px] text-left text-base font-semibold text-blue_gray-900 sm:self-stretch sm:pr-5">
                      1234 5678 9101 3456
                    </div>
                    <div className="w-[46%] rounded-[12px] pb-[11px] pl-3.5 pr-[35px] pt-[23px] text-left font-poppins text-[15px] text-gray-600 sm:pr-5 sm:pt-5">
                      MM/YY
                    </div>
                  </div>
                </div>
                <div className="mb-[30px] ml-1 mt-4 w-[42%] rounded-[12px] bg-orange-50 pb-[13px] pl-3.5 pr-[35px] pt-[21px] text-left text-sm text-blue_gray-900_7c md:ml-0 sm:pr-5 sm:pt-5">
                  Card Security Code
                </div>
              </div>
            </div>
            <div className="flex w-[45%] flex-col items-start gap-[29px] rounded-[24px] border border-solid border-blue_gray-900_33 bg-white-A700 p-[30px] md:w-full sm:p-5">
              <Heading size="lg" as="h2" className="!font-extrabold">
                Your Tickets Overview
              </Heading>
              <div className="self-stretch">
                <div className="border-b border-solid border-gray-200 py-5">
                  <div className="flex flex-col items-start gap-[11px]">
                    <Heading size="lg" as="h3">
                      {selectedTrain?.name}
                    </Heading>
                    <div className="flex items-center gap-2.5">
                      <Img
                        src="images/img_calendar_orange_600_24x24.svg"
                        alt="calendar_one"
                        className="h-[24px] w-[24px] self-start"
                      />
                      <Heading as="h4">FRI, 23 DEC 2024</Heading>
                    </div>
                    <div className="flex gap-2.5">
                      <Img
                        src="images/img_system_uicons_clock_orange_600.svg"
                        alt="systemuicons"
                        className="h-[24px] w-[24px] self-start"
                      />
                      <Heading as="h5">14:30 - 18:05 PM</Heading>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-px border-b border-solid border-gray-200 py-5">
                  <div className="flex flex-1 items-center justify-between gap-5 py-4">
                    <div className="flex flex-wrap items-center gap-[13px]">
                      <Heading
                        size="md"
                        as="h6"
                        className="flex h-[37px] w-[37px] items-center justify-center rounded-[18px] bg-gray-200 text-center !text-blue_gray-900_cc"
                      >
                        2
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
                      Rs.1400.00
                    </Heading>
                  </div>
                  <div className="flex flex-1 items-center justify-between gap-5 py-4">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <Heading
                        size="md"
                        as="h5"
                        className="flex h-[37px] w-[37px] items-center justify-center rounded-[18px] bg-gray-200 text-center !text-blue_gray-900_cc"
                      >
                        1
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
                      Rs.700.00
                    </Heading>
                  </div>
                  <div className="flex flex-1 items-center justify-between gap-5 py-4">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <Heading
                        size="md"
                        as="h5"
                        className="flex h-[37px] w-[37px] items-center justify-center rounded-[18px] bg-gray-200 text-center !text-blue_gray-900_cc"
                      >
                        1
                      </Heading>
                      <Text
                        size="md"
                        as="p"
                        className="mb-[3px] self-end text-center !text-blue_gray-900_cc"
                      >
                        Infant (0-5){" "}
                      </Text>
                    </div>
                    <Heading size="md" as="h5" className="text-center">
                      Rs.0.00
                    </Heading>
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
                    Rs.2100.00
                  </Heading>
                </div>
              </div>
              <Button
                size="xl"
                shape="round"
                className="w-full font-bold sm:px-5"
                onClick={() => placeBooking()}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
        <footer className="flex items-center justify-center self-stretch bg-blue_gray-900 p-10 sm:p-5">
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
    </>
  );
}
