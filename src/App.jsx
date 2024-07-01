import { Canvas } from "@react-three/fiber";
import Controller from "./comp/Controller";
import Arm from "./comp/Arm";

function App() {
  return (
    <main className="main">
      <div className="canvas">
        <Canvas>
          <directionalLight intensity={0.5} position={[0, 0, 2]} />
          <Arm />
        </Canvas>
      </div>
      <Controller />
    </main>
  );
}

export default App;
