'use client'
import {memo} from 'react';

export const EmptyWidget = memo(({addWidget}) => <div style={{width: '100px', height: '100px', backgroundColor: 'white', margin: '4px', color: 'black', border: '1px solid yellow'}}><button onClick={addWidget}>add</button></div>);