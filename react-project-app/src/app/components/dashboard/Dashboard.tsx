'use client'

import {Category} from './components/category';
import {Modal} from './components/Modal';

import {CATEGORIES} from '../../../../assets/constants/Categories'
import { useCallback, useState } from 'react';

const DEFAULT_WIDGET_STATE = (id) => ({
    text: 'widgets',
    name: 'name',
    id,
});

const TAB_ID_VS_WIDGTES = {
    '1': [DEFAULT_WIDGET_STATE('1_0')],
    '2': [DEFAULT_WIDGET_STATE('2_0')],
    '3': [DEFAULT_WIDGET_STATE('3_0')],
    '4': [DEFAULT_WIDGET_STATE('4_0')],
}

export const Dashboard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [widgets, setWidgets] = useState(TAB_ID_VS_WIDGTES);

    const addWidget = useCallback((tabId) => {
        setWidgets(prevWidgets => ({
            ...prevWidgets,
            [tabId]: [...prevWidgets[tabId], DEFAULT_WIDGET_STATE(`${tabId}_${prevWidgets[tabId].length}`)],
        }))
    },[]);

    const removeWidget = useCallback((tabId, index) => {
        setWidgets(prevWidgets => ({
            ...prevWidgets,
            [tabId]: [...prevWidgets[tabId].slice(0,index), ...prevWidgets[tabId].slice(index+1)],
        }))
    },[])

    return <>
        Dashboard name
        <button onClick={() => setIsModalOpen(true)}>add widget</button>
        {CATEGORIES.map(({name, id}) => (
            <div>
            <Category name={name} addWidget={() => addWidget(id)} widgets={widgets[id]} removeWidget={index => removeWidget(id, index)} />
            </div>
            ))}
        {isModalOpen ? 
        <>
            <div style={{height: '100vh', width: '100vw', backgroundColor: 'gray', opacity: '0.5' , position: 'fixed', top: '0px', right: '0px'}} />
            <div style={{backgroundColor: 'white', height: '100%', width: '30%', opacity: 1, zIndex: '10', position: 'fixed', right: '0px', top: '0px'}}>
                <button onClick={() => setIsModalOpen(false)}> close </button>
                <div>
                <Modal widgets={widgets} setWidgets={setWidgets} onClose={() => setIsModalOpen(false)}/>
                </div>
            </div>
        </> : null}
    </>
}