import React, { createContext, useState } from "react";

const ValueContext = createContext()

export const ValueProvider = ({children}) => {
    const [values, setValues] = useState({
        baseVal: 180,
        firstChildVal: 0,
        secondChildVal: 0,
        thirdChildVal: 180,
        forthChildVal: 0
    })

    const finalVal = {
        base: values.baseVal,
        firstChild: parseInt(values.firstChildVal) + 90,
        secondChild: parseInt(values.secondChildVal) + 90,
        thirdChild: values.thirdChildVal,
        forthChild: parseInt(values.forthChildVal) + 90
    }

    const [record, setRecord] = useState([])

    return (
        <ValueContext.Provider value={{values, setValues, finalVal, record, setRecord}}>
            {children}
        </ValueContext.Provider>
    )
}

export default ValueContext;
