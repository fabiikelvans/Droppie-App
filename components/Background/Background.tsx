import React, {Suspense} from 'react';
import Bubble from "./Bubble/Bubble";
import {Canvas} from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";


function Background() {
    return (
        <div className='flex justify-center items-center'>
            <div className='absolute top-0 h-[80vh] md:h-[100vh] w-[80vw] md:w-[100vw] bg-cover -z-10 '>
                <Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
                    <Suspense fallback={null}>
                        <Bubble/>
                    </Suspense>
                    <OrbitControls enableZoom={false} />
                </Canvas>
            </div>
        </div>
    );
}

export default Background;