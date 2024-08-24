'use client'

import {memo} from 'react';

export const Widget = memo(({text, removeWidget, id, index}) => (
    <div style={{padding:'5px',position:'relative',width: '330px', height: '200px', backgroundColor: 'white',  color: 'black',display:'flex',borderRadius:'6px',marginRight:'20px',marginTop:'20px'}}>{text} {id}
    <br />
    <div>
    <button onClick={() => removeWidget(index)}
        className='removebtn'>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
      width="20px"
      height="20px"
      fill="currentColor"
    >
      <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
    </svg>
    </button>
    </div>
    </div>
));