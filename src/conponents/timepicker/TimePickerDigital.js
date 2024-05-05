import React, {
  useState,
  useRef,
  useEffect,
  useLayoutEffect,
  useMemo,
  useCallback,
} from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import { IconClockCircle } from "../../assets/icons";
import { useOutsideClick, useDropDown } from "../../customhooks/hooks";

function generateMinutesArray() {
  let minutes = [];
  for (let i = 0; i < 60; i++) {
    minutes.push(i < 10 ? "0" + i : "" + i);
  }
  return minutes;
}

function generateHourArray(hours = 12) {
  let hour = [];
  if (hours === 12) {
    for (let i = 0; i < hours; i++) {
      hour.push(i < 10 ? `0${i}` : "" + i);
    }
  } else if (hours === 24) {
    for (let i = 0; i < hours; i++) {
      hour.push(i < 10 ? `0${i}` : "" + i);
    }
  }
  return hour;
}

function TimePickerDigital(props) {
  const { hours = 12 } = props;

  const ParentREF = useRef(null);
  const ChildREF = useRef(null);

  const [minutes, setMinutes] = useState(dayjs(new Date()).format("hh"));
  const [hour, setHour] = useState(dayjs(new Date()).format("mm"));
  const [ampm, setAMPM] = useState(dayjs(new Date()).format("a"));
  const [open, setOpen] = useState(false);

  useOutsideClick(ParentREF, () => {
    setOpen(false);
  });
  useDropDown(ParentREF, ChildREF, open);

  const HoursArray = useMemo(() => {
    return generateHourArray(hours);
  }, [hours]);

  const MinutesArray = useMemo(() => {
    return generateMinutesArray();
  }, []);

  console.log(
    "HoursArray, MinutesArray",
    HoursArray,
    MinutesArray,
    hour,
    minutes,
    ampm
  );
  const handleHour = (e) => {
    let hour = e.target.getAttribute("data-hour");

    if (hour) {
      setHour(hour);
    }
  };

  const handleMin = (e) => {
    let min = e.target.getAttribute("data-min");

    if (min) {
      setMinutes(min);
    }
  };

  const handleAMPM = (e) => {
    let ampm = e.target.getAttribute("data-ampm");

    if (ampm) {
      setAMPM(ampm);
    }
  };
  return (
    <ParentWrapper ref={ParentREF}>
      <Parent>
        <Input
          onFocus={() => setOpen(true)}
          placeholder="hh:mm aa"
          value={`${hour}:${minutes} ${ampm}`}
        />
        <Svgwrapper>
          <IconClockCircle />
        </Svgwrapper>
      </Parent>
      {open && (
        <DropDownParent ref={ChildREF}>
          <HOURMIN onClick={handleHour}>
            {HoursArray.map((val, index) => (
              <ValueSpan data-hour={val} key={val}>
                {val}
              </ValueSpan>
            ))}
          </HOURMIN>
          <HOURMIN onClick={handleMin}>
            {MinutesArray.map((val, index) => (
              <ValueSpan data-min={val} key={val}>
                {val}
              </ValueSpan>
            ))}
          </HOURMIN>
          <HOURMIN onClick={handleAMPM}>
            {["AM", "PM"].map((val, index) => (
              <ValueSpan data-ampm={val} key={val}>
                {val}
              </ValueSpan>
            ))}
          </HOURMIN>
          <ConformDiv></ConformDiv>
        </DropDownParent>
      )}
    </ParentWrapper>
  );
}

const ParentWrapper = styled.div`
  width: 220px;
  height: 42px;
  position: relative;
`;

const Parent = styled.div`
  width: 100%;
  height: 100%;
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #7f8c8d;
  border-radius: 5px;
`;

const Input = styled.input`
  width: 100%;
  flex: 0.8;
  height: 100%;
  padding-left: 6px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 400;
  box-shadow: none;
  outline: none;
  border: none;
  &:focus {
    border: none;
    box-shadow: none;
    outline: none;
  }
`;
const Svgwrapper = styled.div`
  flex: 0.2;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  cursor: pointer;
`;

const DropDownParent = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 70%;
  display: grid;
  grid-template-columns: repeat(3, 33.33%);
  grid-template-rows: 150px 50px;
  justify-items: center;
  align-items: center;
  border: 2px solid red;
  padding: 2px;
`;

const HOURMIN = styled.div`
  width: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  gap: 4px;
`;
const ValueSpan = styled.span`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 400;
  font-size: 1rem;
  color: black;
  cursor: pointer;
`;

const ConformDiv = styled.div`
  width: 100%;
  height: 100%;
  grid-column-start: 1;
  grid-column-end: -1;
  grid-row-start: 2;
  grid-row-end: -1;
  background-color: red;
`;

export default TimePickerDigital;
