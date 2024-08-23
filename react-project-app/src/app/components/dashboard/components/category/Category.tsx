'use client'

import { useCallback, useState } from "react";

import {Widget} from './Widget';
import { EmptyWidget } from "./EmptyWidget";

type Props = any;

const DEFAULT_WIDGET_VALUE = (id) => ({
    text: `widgets ${id}`
});

const DEFAULT_VALUE = [DEFAULT_WIDGET_VALUE(0)];

export const Category = ({name, addWidget, widgets, removeWidget}: Props ) => {
    // const [widgets, setWidgets] = useState(DEFAULT_VALUE);

    // const addWidget = useCallback(() => setWidgets((prevValue) => [...prevValue, DEFAULT_WIDGET_VALUE(prevValue.length)]),[]);

//     const removeWidget = useCallback((index) => setWidgets(prevValue => {
//         // const some = prevValue.splice(index, index+1);

//         // console.log("Dhairya ", some)

//         return [...prevValue.slice(0,index), ...prevValue.slice(index+1)];
        
//         // return prevValue;
// }), []);

console.log("Dhairya render", widgets);

    return <>{name}
    <div style={{display: 'flex'}}>
    {widgets.map(((widgetConfig, index) => <Widget key={widgetConfig.id} {...widgetConfig} index={index} removeWidget={removeWidget}/>))}
    <EmptyWidget addWidget={addWidget}/>
    </div>
    </>
}