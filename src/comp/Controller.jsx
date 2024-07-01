import React, { useContext, useState } from "react";
import ValueContext from "../lib/ValueContext";

function Controller() {
    const { values, setValues, finalVal, record, setRecord } =
        useContext(ValueContext);

    const [tog, setTog] = useState(false);
    const [isPlay, setIsPlay] = useState(false)

    const handalReset = () => {
        setValues({
        baseVal: 180,
        firstChildVal: 0,
        secondChildVal: 0,
        thirdChildVal: 180,
        forthChildVal: 0,
        });
    };

    const handalDone = () => {
        if(tog == true) {
            setTog(!tog)
            // setRecord([])
            setValues({
                baseVal: 180,
                firstChildVal: 0,
                secondChildVal: 0,
                thirdChildVal: 180,
                forthChildVal: 0,
            });
        }
    }

    const handalStart = () => {
        setIsPlay(!isPlay)
        if (record.length === 0) {
            console.log("No recorded values to play");
            return;
        }

        record.forEach((recordedValues, index) => {
            setTimeout(() => {
                setValues(recordedValues);
                console.log(`Playing record`, recordedValues);
            }, index * 800);
        });
        setIsPlay(false)
    };

    const handalRecord = () => {
        if (!tog) {
        setTog(!tog);
        setValues({
            baseVal: 180,
            firstChildVal: 0,
            secondChildVal: 0,
            thirdChildVal: 180,
            forthChildVal: 0,
        });
        }
        setRecord([...record, values]);
        // console.log(record);
    };

    return (
        <div className="control">
        <div
            className="range"
            onDoubleClick={() => setValues({ ...values, forthChildVal: 0 })}
        >
            <strong>{`Fourth child rotation ${finalVal.forthChild}`}</strong>
            <input
            type="range"
            value={values.forthChildVal}
            max={90}
            min={-90}
            onChange={(e) =>
                setValues({ ...values, forthChildVal: e.target.value })
            }
            />
        </div>
        <div
            className="range"
            onDoubleClick={() => setValues({ ...values, thirdChildVal: 180 })}
        >
            <strong>{`Third child rotation ${finalVal.thirdChild}`}</strong>
            <input
            type="range"
            value={values.thirdChildVal}
            max={360}
            min={0}
            onChange={(e) =>
                setValues({ ...values, thirdChildVal: e.target.value })
            }
            />
        </div>
        <div
            className="range"
            onDoubleClick={() => setValues({ ...values, secondChildVal: 0 })}
        >
            <strong>{`Second child rotation ${finalVal.secondChild}`}</strong>
            <input
            type="range"
            value={values.secondChildVal}
            max={90}
            min={-90}
            onChange={(e) =>
                setValues({ ...values, secondChildVal: e.target.value })
            }
            />
        </div>
        <div
            className="range"
            onDoubleClick={() => setValues({ ...values, firstChildVal: 0 })}
        >
            <strong>{`First child rotation ${finalVal.firstChild}`}</strong>
            <input
            type="range"
            value={values.firstChildVal}
            max={90}
            min={-90}
            onChange={(e) =>
                setValues({ ...values, firstChildVal: e.target.value })
            }
            />
        </div>
        <div
            className="range"
            onDoubleClick={() => setValues({ ...values, baseVal: 180 })}
        >
            <strong>{`Base rotation ${finalVal.base}`}</strong>
            <input
            type="range"
            value={values.baseVal}
            max={360}
            min={0}
            onChange={(e) => setValues({ ...values, baseVal: e.target.value })}
            />
        </div>

        {tog ? (
            <div className="show">
                <h3>
                    {
                        isPlay ? "Running..." : "Recording Start..."
                    }
                </h3>
                <div className="keyBox">
                    {record.map((_, index) => (
                    <span key={index} className="key"></span>
                    ))}
                </div>
            </div>
        ) : (
            <span></span>
        )}

        <div className="range-btn">
            <button className="reBtn" onClick={handalRecord}>
            {!tog ? "Record" : "Set"}
            </button>
            <button className="reBtn" onClick={handalDone}>
            Done
            </button>
            <button className="reBtn" onClick={handalStart}>
            Start
            </button>
            <button className="reBtn" onClick={handalReset}>
            Reset
            </button>
        </div>
        </div>
    );
}

export default Controller;
