'use client'

import {useState, useRef, useEffect} from 'react';

import {CATEGORIES} from '../../../../../assets/constants/Categories';

export const Modal = ({widgets, setWidgets, onClose}) => {
    const [selectedTab, setSelectedTab] = useState(CATEGORIES[0].id);

    const [selectedValues, setSelectedValues] = useState(new Set(widgets[selectedTab].map(({id}) => id)));

    return(
    <>
    {/* <div style={{marginTop:'20px',backgroundColor:'red'}}> */}
        {CATEGORIES.map(({id, name}) => 
            <button style={{color: selectedTab === id ? 'blue' : 'black' }} onClick={() => {
                setSelectedTab(id)
                setSelectedValues(new Set(widgets[id].map(({id: _id}) => _id)));
            }}>
                {name}
            </button>
        )}
        <br />
        {widgets[selectedTab].map(({name, id}) => <>
                <input type="checkbox" id={id} name={name} value={id} checked={selectedValues.has(id)} onChange={e => {
                    setSelectedValues(prevSelectedValues => {
                        const someSet = new Set(prevSelectedValues);
                        e.checked ? someSet.add(id) : someSet.delete(id)
                        return someSet;
                });
                }}/>
                <label for={id}>{name} {id}</label><br />
            </>
        )
        }
        <button onClick={() => {
            setWidgets(prevValues => ({
                ...prevValues,
                [selectedTab]: prevValues[selectedTab].filter(({id}) => selectedValues.has(id))
            }))
            onClose()
        }}>confirm</button>
                {/* </div> */}

        </>
        )
}