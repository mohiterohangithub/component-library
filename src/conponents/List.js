import React, {useState} from 'react'
import userdata from "../data/userdata.json"

function List() {

    const [scrollTop, setScrollTop] = useState(0);

    const onScroll = e => setScrollTop(e.currentTarget.scrollTop);

    const innerHeight = userdata.length * 30;
    const startIndex = Math.floor(scrollTop / 30);
    const endIndex = Math.min(
        userdata.length - 1, // don't render past the end of the list
      Math.floor((scrollTop + 300) / 30)
    );
  return (
    <div onScroll={onScroll} style={{overflow:"auto" , position:"relative", border:"1px solid black", height:"300px" , width:"500px"}}  >
        <div style={{position:"relative", height:`${userdata.length * 30}px`}} >

        </div>
    </div>
  )
}

export default List 