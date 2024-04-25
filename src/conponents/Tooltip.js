import React, { useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

function Tooltip(props) {
  const { title } = props;

  const [open, setOpen] = useState(false);

  const REF = useRef();
  const CLEARTIMEOUT = useRef(null);

  const handleMouseEnter = () => {
    CLEARTIMEOUT.current = setTimeout(() => {
      console.log("innnnnn");
      setOpen(true);
    }, 300);

    console.log(REF.current.getBoundingClientRect());
  };

  const handleMouseLeave = () => {
    if (CLEARTIMEOUT.current && !open) {
      console.log("Clear Timeout");
      clearTimeout(CLEARTIMEOUT.current);
      return;
    }
    if (open) {
      setTimeout(() => {
        setOpen(false);
      }, 300);
    }
  };

  return (
    <div
      ref={REF}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ display: "inline-block" }}
    >
      {props.children}
      {open &&
        createPortal(
          <Parent>
            <TitleSpan>{title}</TitleSpan>
          </Parent>,
          document.body
        )}
    </div>
  );
}

const Parent = styled.div`
  position: absolute;
  z-index: 100;
`;

const TitleSpan = styled.span`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 400;
  font-size: 1rem;
`;

export default Tooltip;
