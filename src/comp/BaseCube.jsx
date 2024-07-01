
const BaseCube = ({ pos, size, color }) => {

    return (
        <mesh position={pos}>
            <boxGeometry args={size} />
            <meshStandardMaterial color={color} />
        </mesh>
    );
};

export default BaseCube