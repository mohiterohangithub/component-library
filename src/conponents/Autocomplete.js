import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import {
  useDebounce,
  useOutsideClick,
  useDropDown,
} from "../customhooks/hooks";
import userdata from "../data/userdata.json";
import { IconArrowDownSquareFill } from "../assets/icons";

function Autocomplete() {
  const [value, setValue] = useState("");
  const [list, setList] = useState(userdata);
  const [open, setOpen] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const PARENTREF = useRef(null);
  const CHILDREF = useRef(null);

  useOutsideClick(PARENTREF, () => {
    setOpen(false);
  });
  useDropDown(PARENTREF, CHILDREF, open);

  let debouncedValue = useDebounce(value, 300);

  useEffect(() => {
    console.log("value called");
    if (value) {
      let arr = userdata.filter(({ first_name }) => {
        if (first_name.toLowerCase().indexOf(debouncedValue.toLowerCase()) >= 0)
          return true;
        return false;
      });
      setList([...arr]);
    } else {
      setList(userdata);
    }
  }, [debouncedValue]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleScroll = (event) => {
    setScrollTop(event.currentTarget.scrollTop);
  };

  const startIndex = Math.floor(scrollTop / 30) || 0;
  const endIndex =
    Math.min(list.length - 1, Math.floor((scrollTop + 300) / 30)) || 10;

  const getValue = (e) => {
    let val = e.target.getAttribute("data-value");
    if (val) {
      setValue(val);
    }
  };

  return (
    <ParentWrapper ref={PARENTREF}>
      <Parent>
        <Input
          onFocus={(e) => {
            setOpen(true);
          }}
          value={value}
          onChange={handleChange}
        />
        <Svgwrapper open={open} onClick={() => setOpen((pre) => !pre)}>
          <IconArrowDownSquareFill style={{ width: "100%", height: "100%" }} />
        </Svgwrapper>
      </Parent>
      {open && (
        <DropDownParent
          ref={CHILDREF}
          style={{
            position: "absolute",
            left: 0,
            top: "100%",
            zIndex: "10",
            border: "1px solid black",
          }}
          onScroll={handleScroll}
        >
          <div
            onClick={getValue}
            style={{
              width: "100%",
              position: "relative",
              height: `${list.length * 30}px`,
              overflow: "auto",
            }}
          >
            {list
              .slice(startIndex, endIndex + 1)
              .map(({ first_name, id }, index) => (
                <div
                  data-value={first_name}
                  key={id}
                  style={{
                    position: "absolute",
                    height: "30px",
                    top: `${(startIndex + index) * 30}px`,
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottom: "1px solid black",
                    cursor: "pointer",
                  }}
                >
                  {first_name}
                </div>
              ))}
          </div>
        </DropDownParent>
      )}
    </ParentWrapper>
  );
}

const ParentWrapper = styled.div`
  display: flex;
  width: 300px;
  height: 56px;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Parent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 6px;
  border: 1px solid black;
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
  transform: ${(props) => (props.open ? "rotate(180deg)" : "rotate(0deg)")};
`;

const DropDownParent = styled.div`
  width: 100%;
  max-height: 300px;
  overflow: auto;
  padding: 0;
  background-color: white;
`;

export default Autocomplete;
