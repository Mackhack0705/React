import React, { useState } from 'react'
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
    const [Data,setData] = useState(null);
    const HandleChild=(children)=>{
        setData(children);
    }
  return (
    <div>
      <ChildComponent onDataFromChild={HandleChild} />
      <p>{Data}</p>
    </div>
  )
}

export default ParentComponent
