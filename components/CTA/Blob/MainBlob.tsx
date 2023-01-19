import React, {Suspense} from 'react';
import {Canvas} from "@react-three/fiber";
import Bubble from "../../Background/Bubble/Bubble";
import {OrbitControls} from "@react-three/drei";
import Blob_02 from "./Blob-02";

function MainBlob() {
    return (
        <div className='absolute top-0 h-[100vh] w-[100vw] bg-cover -z-10'>
            <Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
                <Suspense fallback={null}>
                    <Blob_02/>
                </Suspense>
                <OrbitControls enableZoom={false} />
            </Canvas>
        </div>
    );
}

export default MainBlob;