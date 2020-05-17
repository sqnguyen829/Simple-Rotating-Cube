import React, {useRef} from 'react'
//this next line allows us to get prebuild objects from react-three-fiber as canvas, along with some pre-built functions
import { Canvas ,extend, useThree, useFrame } from 'react-three-fiber'
//this next line allows us to rotate the object but we also need to add extend and useThree to the line above 
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

//extend allows us to use controls created by three-fiber
extend({OrbitControls})
function Model() {
    
    const Controls = () => {
        //<orbitControls> needs this to view at different angles with user mouse controls
        const {camera, gl} = useThree()
        
        //this allows the usage of the autoRotate property in orbitControls, using the controls that we make in the next line
        const controls = useRef()
        useFrame(() => {
            controls.current.update()
            // debugger
        })

        //<orbitControls> needs to lowerCase, we can add autoRotate to the orbitControls as a property
        return (
            <orbitControls  args={[camera, gl.domElement]} autoRotate ref = { controls } ></orbitControls>
        )
    }

    return(
        <div>
            <Canvas>
                <mesh>
                <Controls/>
                    {/* {boxBufferGeometry takes 2 elements, first is the attach and second dimension of the cube} */}
                    <boxBufferGeometry attach = "geometry" args={[1,1,1]} ></boxBufferGeometry>
                    {/* {meshBasicMaterial takes 2 elements too, attach type and color, by adding wireframe this will create the object with wired frame} */}
                    <meshBasicMaterial attach= "material" color="white" wireframe></meshBasicMaterial>
                </mesh>
            </Canvas>
        </div>
    )
}

export default Model