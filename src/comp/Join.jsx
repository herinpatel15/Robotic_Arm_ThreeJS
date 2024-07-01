import React from "react";

function Join() {
    return (
        <mesh rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.05, 0.05, 1, 0]} />
            <meshStandardMaterial color="saddlebrown" />
        </mesh>
    );
}

export default Join;
