import React, { useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

function Tooltip(props) {
  const { title } = props;

  const [open, setOpen] = useState(false);

  const REF = useRef();
  const ToolTipREF = useRef();
  const CLEARTIMEOUT = useRef(null);

  useLayoutEffect(() => {
    if (open) {
      let MIDDLE =
        REF.current.firstChild.getBoundingClientRect()
          .left +
        REF.current.firstChild.getBoundingClientRect()
          .width /
          2;
      let TOP =
        REF.current.firstChild.getBoundingClientRect()
          .bottom + 10;
      let LEFT = MIDDLE - ToolTipREF.current.getBoundingClientRect().width / 2;

      if(TOP > window.innerHeight)
      {
        TOP =
        REF.current.firstChild.getBoundingClientRect()
          .top -  ToolTipREF.current.getBoundingClientRect().height - 10;
      }

      if(LEFT < 0 ||(LEFT + ToolTipREF.current.getBoundingClientRect().width ) >=window.innerWidth)
      {
            if(LEFT < 0)
            {
              LEFT = REF.current.firstChild.getBoundingClientRect().right + 20;
              TOP = REF.current.firstChild.getBoundingClientRect().top +  (REF.current.firstChild.getBoundingClientRect().height /2)
            }

            if((LEFT + ToolTipREF.current.getBoundingClientRect().width ) > window.innerWidth)
            {
              TOP = REF.current.firstChild.getBoundingClientRect().top +  (REF.current.firstChild.getBoundingClientRect().height /2)
              LEFT = REF.current.firstChild.getBoundingClientRect().left - ToolTipREF.current.getBoundingClientRect().width - 20;

            }
      }

      ToolTipREF.current.style.visibility = "visible";
      ToolTipREF.current.style.top = `${TOP}px`;
      ToolTipREF.current.style.left = `${LEFT}px`;
    }
  }, [open]);

  const handleMouseEnter = () => {
    CLEARTIMEOUT.current = setTimeout(() => {
      setOpen(true);
    }, 300);
  };

  const handleMouseLeave = () => {
    if (CLEARTIMEOUT.current && !open) {
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
          <Parent ref={ToolTipREF} style={{ visibility: "hidden" }}>
            <TitleWrapper>
              <TitleSpan>{title}</TitleSpan>
            </TitleWrapper>
          </Parent>,
          document.body
        )}
    </div>
  );
}

const Parent = styled.div`
  position: absolute;
  z-index: 100;
  display: inline-block;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px;
  width: 300px;
  height: 45px;
  background-color: red;
`;

const TitleSpan = styled.span`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 400;
  font-size: 1rem;
`;

export default Tooltip;
