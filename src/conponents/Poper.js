import React, { useRef, useState } from "react";
import styled from "styled-components";
import  {useOutsideClick , useDropDown} from "../customhooks/hooks"

function Poper(props) {
  const [open, setOpen] = useState(false);
  const REF = useRef();
  const ChildREF = useRef();
  useOutsideClick(REF , ()=>{
    setOpen(false)
  })
  useDropDown(REF, ChildREF , open)
  return (
    <Parent ref={REF}>
      <input onFocus={()=> setOpen(true)} style={{ width: "100%", height: "100%" }} placeholder="Search" />

      {open && (
        <div
          ref={ChildREF}
          style={{
            width: "100%",
            height: "300px",
            backgroundColor: "lightcoral",
            position: "absolute",
            top: "100%",
            left: "0",
          }}
        ></div>
      )}
    </Parent>
  );
}

const Parent = styled.div`
  width: 300px;
  height: 70px;
  padding: 8px;
  border: 1px solid black;
  position: relative;
`;

export default Poper;
