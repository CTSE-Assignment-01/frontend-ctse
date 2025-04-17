import React from "react";
import { Button, Img, Heading, SelectBox } from ".";
import { DatePicker, TimePicker } from "antd";
import state from "store";
const dropDownOptions = [
  { label: "Colombo Fort", value: "colombo_fort" },
  { label: "Kandy", value: "kandy" },
  { label: "Ella", value: "ella" },
  { label: "Badulla", value: "badulla" },
];
const MakeBooking = () => {
  return (
    <div className="flex flex-col items-start self-stretch rounded-[12px] bg-white-A700_33 p-5">
      <Button
        size="xl"
        className="min-w-[195px] rounded-tl-[12px] rounded-tr-[12px] font-semibold"
      >
        General Passenger{" "}
      </Button>
      <div className="relative mt-[-1px] flex items-center justify-center self-stretch rounded-bl-[12px] rounded-br-[12px] rounded-tr-[12px] bg-white-A700 p-3 md:flex-col">
        <div className="flex w-[40%] bg-white-A700 p-4 md:w-full md:p-5">
          <div className="flex w-[78%] flex-col items-start gap-[5px] md:w-full">
            <Heading as="h2" className="text-center">
              From
            </Heading>
            <SelectBox
              shape="square"
              indicator={
                <Img
                  src="images/img_arrowdown.svg"
                  alt="arrow_down"
                  className="h-[20px] w-[20px]"
                />
              }
              name="selectfrom"
              placeholder={`Select From`}
              options={dropDownOptions}
              className="gap-px self-stretch text-blue_gray-900_cc opacity-0.7 sm:pr-5"
            />
          </div>
        </div>
        <div className="ml-6 flex w-[40%] bg-white-A700 p-4 md:ml-0 md:w-full md:p-5">
          <div className="flex w-[65%] flex-col items-start gap-[5px] md:w-full">
            <Heading as="h3" className="text-center">
              To
            </Heading>
            <SelectBox
              shape="square"
              indicator={
                <Img
                  src="images/img_arrowdown.svg"
                  alt="arrow_down"
                  className="h-[20px] w-[20px]"
                />
              }
              name="selectto"
              placeholder={`Select To`}
              options={dropDownOptions}
              className="gap-px self-stretch text-blue_gray-900_cc opacity-0.7 sm:pr-5"
            />
          </div>
        </div>
        <div className="ml-6 flex w-[48%] items-center gap-6 md:ml-0 md:w-full md:flex-row sm:flex-col">
          <div className="flex items-start gap-[7px] bg-white-A700 p-[15px]">
            <Img
              src="images/img_system_uicons_clock.svg"
              alt="time_one"
              className="h-[24px] w-[24px]"
            />
            <div className="flex flex-col items-start gap-[5px]">
              <Heading as="h4" className="text-center">
                Time
              </Heading>
              <div className="flex items-center gap-5 opacity-0.7">
                <TimePicker
                  placeholder="Choose Time"
                  className="!text-blue_gray-900_cc"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>
          <div className="h-[50px] w-px bg-blue_gray-900_19" />
          <div
            style={{ width: 400 }}
            className="flex flex-1 w-[40%] items-start gap-[7px] rounded-bl-[12px] bg-white-A700 p-4"
          >
            <Img
              src="images/img_calendar.svg"
              alt="calendar_one"
              className="h-[24px] w-[24px]"
            />
            <div className="flex flex-col items-start gap-[5px]">
              <Heading as="h5" className="text-center">
                Date
              </Heading>

              <div className="flex items-center gap-5 opacity-0.7">
                <DatePicker
                  placeholder="Choose Date"
                  className="!text-blue_gray-900_cc"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            state.trainsModalVisible = true;
          }}
          className="ml-3 flex flex-col items-center justify-center rounded-[12px] bg-orange-600 p-[26px] md:ml-0 md:p-5"
        >
          <Img
            src="images/img_search.svg"
            alt="search_one"
            className="h-[25px] w-[25px]"
          />
        </div>
      </div>
    </div>
  );
};

export default MakeBooking;
