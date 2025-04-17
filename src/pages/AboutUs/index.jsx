import React from "react";
import { Helmet } from "react-helmet";
import {
  Text,
  Button,
  Img,
  Heading,
  TextArea,
  Input,
  GoogleMap,
} from "../../components";

export default function AboutUsPage() {
  return (
    <>
      <Helmet>
        <title>Train Ticket Management System</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="w-full bg-white-A700 pt-[123px] md:pt-5">
        <div className="flex flex-col items-center gap-[135px] md:gap-[101px] sm:gap-[67px]">
          <div className="h-[915px] self-stretch bg-[url(/public/images/img_group_1498.png)] bg-cover bg-no-repeat md:h-auto">
            <div className="flex justify-center bg-black-900_63 px-14 py-[105px] md:p-5">
              <div className="mb-[203px] mt-[122px] flex w-[91%] flex-col items-center gap-[23px] md:w-full">
                <Text
                  size="lg"
                  as="p"
                  className="text-center !font-amita !text-white-A700"
                >
                  Our team cares about your full safety and easiness.
                </Text>
                <Heading
                  size="lg"
                  as="h1"
                  className="w-[52%] text-center !text-white-A700 md:w-full"
                >
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system, and expound the actual
                  teachings of the great explorer of the truth, the
                  master-builder of human happiness.
                </Heading>
                <Button
                  color="white_A700"
                  size="lg"
                  variant="outline"
                  shape="round"
                  className="min-w-[278px] !rounded-[27px] font-semibold sm:px-5"
                >
                  Book Ticket
                </Button>
              </div>
            </div>
          </div>
          <div className="mx-auto flex w-full max-w-[1412px] items-center justify-between gap-5 md:flex-col md:p-5">
            <div className="relative h-[650px] w-[32%] md:w-full">
              <Img
                src="images/img_vector.svg"
                alt="vector_one"
                className="absolute bottom-[0.43px] left-0 right-0 m-auto h-[600px] w-full"
              />
              <div className="absolute left-0 right-0 top-[0.00px] m-auto h-[600px] w-[91%] md:h-auto">
                <Img
                  src="images/img_vector_orange_600.svg"
                  alt="vector_three"
                  className="absolute bottom-[-0.14px] left-0 right-0 m-auto h-[501px] w-[92%]"
                />
                <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[600px] w-[92%]">
                  <Img
                    src="images/img_intersect.png"
                    alt="intersect_one"
                    className="absolute bottom-[-0.14px] left-0 right-0 m-auto h-[501px] w-full object-cover"
                  />
                  <Img
                    src="images/img_smiley_woman_ch.png"
                    alt="smileywomanch"
                    className="absolute right-[15%] top-[0.00px] m-auto h-[417px] w-[57%] object-cover"
                  />
                </div>
                <div className="absolute bottom-1/4 left-[0.00px] m-auto flex w-[51%] flex-col items-start">
                  <Img
                    src="images/img_smiley_woman_ch_248x210.png"
                    alt="smileywomanch"
                    className="h-[248px] w-full object-cover md:h-auto"
                  />
                  <Img
                    src="images/img_upload.svg"
                    alt="upload_one"
                    className="relative ml-[23px] mt-[-8px] h-[8px] md:ml-0"
                  />
                </div>
                <div className="mb-[65px] flex w-[51%] flex-col items-center">
                  <Img
                    src="images/img_smiley_woman_ch_263x210.png"
                    alt="smileywomanch"
                    className="h-[263px] w-full object-cover md:h-auto"
                  />
                  <div className="relative mt-[-16px] flex w-[27%] items-start md:w-full">
                    <Img
                      src="images/img_television.svg"
                      alt="television_one"
                      className="h-[56px] w-[67%]"
                    />
                    <Img
                      src="images/img_contrast.svg"
                      alt="contrast_one"
                      className="relative ml-[-18px] h-[19px]"
                    />
                  </div>
                </div>
                <Img
                  src="images/img_user.svg"
                  alt="user_one"
                  className="absolute bottom-[19%] right-[21%] m-auto h-[10px]"
                />
              </div>
            </div>
            <div className="flex w-[50%] flex-col items-start gap-[29px] md:w-full">
              <div className="flex self-center">
                <Heading size="xl" as="h2">
                  We treat you our best for your journey
                </Heading>
              </div>
              <Text size="s" as="p" className="leading-8 !text-blue_gray-900">
                Join us as we embark on a journey to redefine the future of
                railway transportation and create a world-class travel
                experience for all. Book with us and we will always be available
                for you!
              </Text>
              <div className="flex w-[48%] items-center justify-between gap-5 md:w-full">
                <div className="flex flex-col items-start gap-0.5">
                  <Heading
                    size="xl"
                    as="h3"
                    className="!font-bold !text-orange-600"
                  >
                    12+
                  </Heading>
                  <Text as="p">
                    <>
                      Years
                      <br />
                      Experience
                    </>
                  </Text>
                </div>
                <div className="flex flex-col gap-0.5 self-start">
                  <Heading
                    size="xl"
                    as="h4"
                    className="!font-bold !text-orange-600"
                  >
                    100+
                  </Heading>
                  <Text as="p">
                    <>
                      Happy
                      <br />
                      Customer
                    </>
                  </Text>
                </div>
                <div className="flex flex-col items-start self-start">
                  <Heading
                    size="xl"
                    as="h5"
                    className="!font-bold !text-orange-600"
                  >
                    15+
                  </Heading>
                  <Text as="p">
                    <>
                      Choice <br />
                      of Services
                    </>
                  </Text>
                </div>
              </div>
              <Button
                size="2xl"
                className="min-w-[223px] rounded-lg font-semibold !text-blue_gray-900 shadow-xs sm:px-5"
              >
                Contact Us
              </Button>
            </div>
          </div>
          <div className="flex h-[670px] items-center justify-between gap-5 self-stretch bg-[url(/public/images/img_frame_1508.png)] bg-cover bg-no-repeat p-[38px] md:h-auto md:flex-col sm:p-5">
            <div className="ml-[194px] mt-[22px] flex w-[34%] flex-col items-start gap-[19px] md:ml-0 md:w-full">
              <Heading size="2xl" as="h2" className="text-center">
                Get In Touch!
              </Heading>
              <Heading as="h3" className="w-[78%] md:w-full">
                Fill up the form and our Team will get back to you within 24
                hours.
              </Heading>
              <GoogleMap
                showMarker={false}
                className="h-[417px] self-stretch"
              />
            </div>
            <div className="mr-[279px] flex w-[51%] flex-col items-center gap-[29px] rounded-[24px] bg-white-A700_4c p-[29px] md:mr-0 md:w-full md:p-5">
              <div className="flex flex-col items-start gap-2 self-stretch">
                <Heading as="h4">Name and Surname</Heading>
                <Input
                  size="xs"
                  shape="round"
                  type="text"
                  name="surname"
                  placeholder={`Enter your name and surname`}
                  className="sm:px-5"
                />
              </div>
              <div className="flex flex-col items-start gap-2 self-stretch">
                <Heading as="h5">Email Address</Heading>
                <Input
                  size="xs"
                  shape="round"
                  type="email"
                  name="email"
                  placeholder={`Enter your email address`}
                  className="sm:px-5"
                />
              </div>
              <div className="flex flex-col items-start gap-[5px] self-stretch">
                <Heading as="h6">Message</Heading>
                <TextArea
                  shape="round"
                  name="input_one"
                  placeholder={`Enter your Meesage`}
                  className="self-stretch text-blue_gray-900_7f sm:px-5 sm:pb-5"
                />
              </div>
              <Button
                size="xs"
                className="min-w-[212px] rounded-[23px] font-semibold sm:px-5"
              >
                Send Message
              </Button>
            </div>
          </div>
        </div>
        <footer className="flex items-center justify-center bg-blue_gray-900 p-10 sm:p-5">
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
                  <a href="Book" target="_blank" rel="noreferrer">
                    <Heading as="h6" className="!text-white-A700">
                      Book
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
              ©2022 Sri Lanka Railways (SLR). All rights Reserved Sri Lanka
              Railways
            </Text>
          </div>
        </footer>
      </div>
    </>
  );
}
