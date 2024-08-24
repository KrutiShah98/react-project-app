'use client'

import {memo} from 'react';

export const Widget = memo(({text, removeWidget, id, index}) => (
    <div style={{width: '330px', height: '200px', backgroundColor: 'white',  color: 'black',display:'flex',alignItems:'center',justifyContent:'center',borderRadius:'6px',marginRight:'20px'}}>{text} {id}
    <br /><div>
    <button onClick={() => removeWidget(index)}>Remove</button>
    </div>
    </div>
));