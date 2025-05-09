import React from "react";
import { Text, Heading, Img } from "./..";

export default function HomeTourpackages({ destination }) {
  return (
    <div className="flex-1 bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-xl md:min-w-[300px] sm:min-w-full sm:mb-6"
      onClick={() => {
        window.location.href = `/blog`;
      }} >
      <Img
        src={destination?.imageUrl}
        alt="image"
        className="w-full rounded-[24px] object-cover md:h-auto"
      />
      <div className="flex flex-col items-start gap-[11px] self-stretch px-8 py-3">
        <Heading size="lg" as="h1" className="text-center">
          {destination?.name}
        </Heading>
        <div className="flex flex-wrap items-start gap-2.5">
          <Heading as="h2" className="mt-[3px] !text-blue_gray-900_cc">
            {destination?.departureLocation}
          </Heading>
          <Heading
            size="lg"
            as="h3"
            className="!font-extrabold !text-orange-600"
          >
            {"Colombo Fort"}
          </Heading>
        </div>
        <div className="flex items-center gap-1.5">
          <Img
            src="images/img_calendar_orange_600_24x24.svg"
            alt="calendar_one"
            className="h-[24px] w-[24px]"
          />
          <Heading size="xs" as="h2" className="text-center !text-orange-600">
            {destination?.schedule}
          </Heading>
        </div>
        {/* <Text size="s" as="p" className="leading-[26px] !text-blue_gray-900">
          {badullaisa}
        </Text> */}
      </div>
    </div>
  );
}
