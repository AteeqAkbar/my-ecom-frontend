"use client";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
function getEndOfDayTimestamp() {
  const now = new Date();

  // Set the time to the last millisecond of the current day
  const endOfDay = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    23,
    59,
    59,
    999
  );

  return endOfDay.getTime();
}
const Countdown = () => {
  return (
    <>
      <style>{`.flip-clock {
  --fcc-flip-duration: 0.5s; /* transition duration when flip card */
  --fcc-spacing: 8px; /* space between unit times and separators */
  --fcc-digit-block-width: 40px; /* width of digit card */
  --fcc-digit-block-height: 60px; /* height of digit card, highly recommend in even number */
  --fcc-digit-block-radius: 5px; /* border radius of digit card */
  --fcc-digit-block-spacing: 5px; /* space between blocks in each unit of time */
  --fcc-digit-font-size: 30px; /* font size of digit */
  --fcc-digit-color: white; /* color of digit */
  --fcc-label-font-size: 10px; /* font size of label */
  --fcc-label-color: ##757C83; /* color of label */
  --fcc-background: linear-gradient(35deg, #fbcfe8, #bfdbfe ); /* gradient background */
  --fcc-divider-color: white; /* color of divider */
  --fcc-divider-height: 1px; /* height of divider */
  --fcc-separator-size: 6px; /* size of colon */
  --fcc-separator-color: #757C83; /* color of colon */
}
`}</style>
      <FlipClockCountdown
        to={getEndOfDayTimestamp()}
        // to={new Date().getTime() + 24 * 3600 * 1000 + 5000}
        labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
        labelStyle={{
          fontSize: 10,
          fontWeight: 500,
          textTransform: "uppercase",
        }}
        digitBlockStyle={{ width: 35, height: 45, fontSize: 30 }}
        dividerStyle={{ color: "white", height: 1 }}
        separatorStyle={{ size: "6px" }}
        duration={0.5}
        className="flip-clock"
      />
    </>
  );
};
export default Countdown;
// .flip-clock {
//     --fcc-flip-duration: 0.5s; /* transition duration when flip card */
//     --fcc-spacing: 8px; /* space between unit times and separators */
//     --fcc-digit-block-width: 40px; /* width of digit card */
//     --fcc-digit-block-height: 60px; /* height of digit card, highly recommend in even number */
//     --fcc-digit-block-radius: 5px; /* border radius of digit card */
//     --fcc-digit-block-spacing: 5px; /* space between blocks in each unit of time */
//     --fcc-digit-font-size: 30px; /* font size of digit */
//     --fcc-digit-color: white; /* color of digit */
//     --fcc-label-font-size: 10px; /* font size of label */
//     --fcc-label-color: #ffffff; /* color of label */
//     --fcc-background: black; /* background of digit card */
//     --fcc-divider-color: white; /* color of divider */
//     --fcc-divider-height: 1px; /* height of divider */
//     --fcc-separator-size: 6px; /* size of colon */
//     --fcc-separator-color: red; /* color of colon */
//   }
