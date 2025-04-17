import React from "react";
import { Text, Button, Img, Heading } from "../../components";
const Footer = () => {
  return (
    <footer className="flex items-center justify-center self-stretch bg-blue_gray-900 p-10 sm:p-5">
      <div className="mx-auto flex w-full max-w-[1420px] flex-col items-center justify-center gap-[33px]">
        <div className="h-px w-full self-stretch bg-white-A700_19" />
        <div className="flex items-start justify-between gap-5 self-stretch md:flex-col">
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
        <div className="h-px w-full self-stretch bg-white-A700_19" />
        <Text as="p" className="text-center !text-white-A700">
          ©2022 Sri Lanka Railways (SLR). All rights Reserved Sri Lanka Railways
        </Text>
      </div>
    </footer>
  );
};

export default Footer;
