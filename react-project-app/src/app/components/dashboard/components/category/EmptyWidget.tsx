'use client'
import {memo} from 'react';

export const EmptyWidget = memo(({addWidget}) => <div style={{width: '330px', height: '211px', backgroundColor: 'white',  color: 'black',display:'flex',alignItems:'center',justifyContent:'center',borderRadius:'6px',marginTop:'20px'}}>
    <button onClick={addWidget}>Add Widget</button></div>);