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
    return <>{name}
    <div style={{display: 'flex'}}>
    {widgets.map(((widgetConfig, index) => <Widget key={widgetConfig.id} {...widgetConfig} index={index} removeWidget={removeWidget}/>))}
    <EmptyWidget addWidget={addWidget}/>
    </div>
    </>
}