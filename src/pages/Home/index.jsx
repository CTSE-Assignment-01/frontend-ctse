import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Img, Heading, SelectBox } from "../../components";
import HomeTourpackages from "../../components/HomeTourpackages";
import { getDestinations } from "controllers/DestinationService";
import MakeBooking from "components/MakeBooking";
import TrainsModal from "components/TrainsModal";

export default function HomePage() {
  const [destinations, setDestinations] = useState([]);

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
  return (
    <>
      <Helmet>
        <title>Train Ticket Management System</title>
        <meta name="description" content="Train ticket management system" />
      </Helmet>
      <div className="flex w-full flex-col gap-[50px] bg-white-A700 pt-[123px] md:pt-5">
        <div className="flex flex-col items-center gap-[133px] md:gap-[99px] sm:gap-[66px]">
          <div className="h-[915px] self-stretch bg-[url(/public/images/main_bg.jpg)] bg-cover bg-no-repeat md:h-auto">
            <div className="flex justify-center bg-black-900_63 px-14 py-[227px] md:p-5">
              <div className="mx-auto flex w-full max-w-[1259px] flex-col items-center gap-[60px] sm:gap-[30px]">
                <div className="flex flex-col items-center gap-[15px]">
                  <Text
                    size="lg"
                    as="p"
                    className="text-center !font-amita !text-white-A700"
                  >
                    Enjoy your train journy!
                  </Text>
                  <Heading
                    size="lg"
                    as="h1"
                    className="text-center !text-white-A700"
                  >
                    We provide our best for your Journy
                  </Heading>
                </div>
                <MakeBooking />
              </div>
            </div>
          </div>
          <div className="mx-auto flex w-full max-w-[1401px] items-start justify-between gap-5 md:flex-col md:p-5">
            <Heading size="xl" as="h2" className="text-center">
              Explore Popular Destinations{" "}
            </Heading>
          </div>
          <div className="mx-auto flex w-full max-w-[1427px] flex-col gap-[140px] md:gap-[105px] md:p-5 sm:gap-[70px]">
            <div className="flex gap-[35px] md:flex-col">
              {destinations.map((destination) => (
                <HomeTourpackages
                  key={destination._id}
                  destination={destination}
                />
              ))}
            </div>
            <div className="flex items-center justify-between gap-5 md:flex-col">
              <div className="relative h-[650px] w-[32%] md:w-full">
                <Img
                  src="images/img_vector.svg"
                  alt="vector_one"
                  className="absolute bottom-[0.43px] left-0 right-0 m-auto h-[600px] w-full"
                />
                <div className="absolute left-0 right-0 top-[0.00px] m-auto h-[600px] w-[91%]">
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
                  <div className="absolute bottom-[11%] right-[-0.52px] m-auto flex w-[51%] flex-col items-center">
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
                  <Heading size="xl" as="h6">
                    We treat you our best for your journey
                  </Heading>
                </div>
                <Text size="s" as="p" className="leading-8 !text-blue_gray-900">
                  Join us as we embark on a journey to redefine the future of
                  railway transportation and create a world-class travel
                  experience for all. Book with us and we will always be
                  available for you!
                </Text>
                <div className="flex w-[48%] items-center justify-between gap-5 md:w-full">
                  <div className="flex flex-col items-start gap-0.5">
                    <Heading
                      size="xl"
                      as="h2"
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
                      as="h2"
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
                      as="h2"
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
          </div>
        </div>
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
        <TrainsModal />
      </div>
    </>
  );
}
