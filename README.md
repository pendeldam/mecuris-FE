# mecuris-three-fe

### App components:

Frontend part of application implemented with React libraries:

    Basics:
        axios: network requests to the API ,
        react-router-dom: client-side routing,
        reactstrap, react-transition-group, bootstrap: UI

    Visualisation:
        three - rendering models
        @react-three/fiber - for rendering models converted in JSX
        @react-three/drei - for different visual effects

Actual models were downloaded as GLTF-files, compressed in glb format and
converted in JSX using gltfjsx package (https://github.com/pmndrs/gltfjsx).

For now there's implemented only changing color functionality on
primitives like spheres or boxes and saving it on the backend.
Complex models consist with need more detailed approach.
