import React, { useEffect, useLayoutEffect, useRef , Children, useState } from "react";
import styled from "styled-components";


function Slider(props) {
    const [childCount , setChildCount] = useState(0)
    const REF = useRef();


    const handleClick = ()=>{
        console.log('scroll LEFT', REF.current.scrollLeft , REF.current.scrollWidth )
        console.log('width', REF.current.getBoundingClientRect())
    }

    useLayoutEffect(()=>{
        setChildCount(Children.count(props.children))  
    },[])

  return (
    <div>
      <Parent ref={REF} length={childCount} >
        {props.children}
      </Parent>
      <div>
        <button onClick={handleClick}  >Click</button>
      </div>
    </div>
  );
}

const Parent = styled.div`
  width: 500px;
  height: 100px;
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.length}, auto)`};
  justify-items: center;
  align-items: center;
  padding: 4px 10px;
  overflow: auto;
  gap: 6px;
  border: 2px solid black;
`;


export default Slider;
