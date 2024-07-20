import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";
import {
  useDebounce,
  useOutsideClick,
  useDropDown,
} from "../customhooks/hooks";

import { IconArrowDownSquareFill } from "../assets/icons";

const override = {
  display: "block",
  borderColor: "red",
};

function Autocomplete({ options, loading = true, id }) {
  const [value, setValue] = useState("");
  const [selectedOption, setSelectedOption] = useState({});
  const [list, setList] = useState([]);
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const PARENTREF = useRef(null);
  const CHILDREF = useRef(null);

  useLayoutEffect(() => {
    if (Array.isArray(options)) {
      if (options.length > 0 && loading) {
        setIsLoading(false);
      } else if (options.length === 0 && loading) {
        setIsLoading(true);
      }
      setUserData([...options]);
    } else {
      console.error("option is not proper object");
    }
  }, [options]);

  useOutsideClick(PARENTREF, () => {
    setOpen(false);
  });
  useDropDown(PARENTREF, CHILDREF, open);

  let debouncedValue = useDebounce(value, 300);

  useEffect(() => {
    if (value) {
      let arr = userData.filter(({ first_name }) => {
        if (first_name.toLowerCase().indexOf(debouncedValue.toLowerCase()) >= 0)
          return true;
        return false;
      });
      setList([...arr]);
    } else {
      setList(userData);
    }
  }, [debouncedValue, userData]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleScroll = (event) => {
    setScrollTop(event.currentTarget.scrollTop);
  };

  useLayoutEffect(() => {
    setScrollTop(CHILDREF.current?.scrollTop || 0);
  }, [open]);

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
    <ParentWrapper id={id ?? "autocomplete"} ref={PARENTREF}>
      <Parent>
        <InputWrapper>
          <Input
            onFocus={(e) => {
              setOpen(true);
            }}
            value={value}
            onChange={handleChange}
          />
          {loading && isLoading && (
            <div
              style={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                right: "0px",
                top: 0,
              }}
            >
              <ClipLoader
                color="#ffffff"
                loading={isLoading}
                cssOverride={override}
                size={20}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          )}
        </InputWrapper>
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

const InputWrapper = styled.div`
  width: 100%;
  flex: 0.8;
  height: 100%;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
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
