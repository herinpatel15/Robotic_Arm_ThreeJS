import { useContext, useRef, useEffect } from "react";
import ValueContext from "../lib/ValueContext";

import BaseCube from "./BaseCube";

import { useFrame } from "@react-three/fiber";

function Arm() {
    const { values } = useContext(ValueContext);

    const baseRef = useRef();
    const firstRef = useRef();
    const secondRef = useRef();
    const thirdRef = useRef();
    const forthRef = useRef();

    const handalValue = (val) => {
        let value = (val * Math.PI) / 180;
        return value;
    };

    useEffect(() => {
        if (firstRef.current) {
            firstRef.current.children.forEach(child => {
                child.position.y += 1.9; 
            });
            firstRef.current.position.y -= 1.9; 
        }

        if (secondRef.current) {
            secondRef.current.children.forEach(child => {
                child.position.y += 0.8;
            });
            secondRef.current.position.y -= 0.8;
        }

        if (thirdRef.current) {
            thirdRef.current.children.forEach(child => {
                child.position.y += 0.1;
            });
            thirdRef.current.position.y -= 0.1;
        }

        if (forthRef.current) {
            forthRef.current.children.forEach(child => {
                child.position.y += -0.4;
            });
            forthRef.current.position.y -= -0.4;
        }
    }, []);

    useFrame((state) => {
        baseRef.current.rotation.y = handalValue(values.baseVal);
        firstRef.current.rotation.z = handalValue(values.firstChildVal);
        secondRef.current.rotation.z = handalValue(values.secondChildVal);
        thirdRef.current.rotation.y = handalValue(values.thirdChildVal);
        forthRef.current.rotation.z = handalValue(values.forthChildVal);
        // console.log(state)
    });
    return (
        <group ref={baseRef}>
            <group ref={firstRef}>
                <group ref={secondRef}>
                    <group ref={thirdRef}>
                        <group ref={forthRef}>
                            <BaseCube
                                pos={[0, 0.6, 0]}
                                size={[0.2, 0.5, 0.2]}
                                color={"red"}
                            />
                        </group>
                        <BaseCube
                            pos={[0, 0.12, 0]}
                            size={[0.4, 0.4, 0.4]}
                            color={"blue"}
                        />
                    </group>
                    <BaseCube
                        pos={[0, -0.4, 0]}
                        size={[0.6, 0.6, 0.6]}
                        color={"red"}
                    />
                </group>
                <BaseCube
                    pos={[0, -1.2, 0]}
                    size={[0.8, 0.8, 0.8]}
                    color={"blue"}
                />
            </group>
            <BaseCube
                pos={[0, -2.2, 0]}
                size={[1, 1, 1]}
                color={"red"}
            />
        </group>
    );
}

export default Arm;
