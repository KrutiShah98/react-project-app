'use client'

import {memo} from 'react';

export const Widget = memo(({text, removeWidget, id, index}) => (
    <div style={{width: '100px', height: '100px', backgroundColor: 'white', color: 'black', border: '1px solid yellow', margin: '4px'}}>{text} {id}
    <button onClick={() => removeWidget(index)}>remove</button>
    </div>
));