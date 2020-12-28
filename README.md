# three-universal

Versions of Three.js compatible with Browsers, NodeJS, React Native Threads, etc by using JSDOM

## Unsupported DOM elements

So far, JSDOM doesn't support every object of the native DOM API. If one of the utils you intend to 
run transitively uses one object in the list below, you might encounter non three.js related issues.

List of currently unsupported DOM objects used by Three.js: 
-   ActiveXObject
-   AudioContext
-   DeviceOrientationEvent
-   ImageBitmap
-   TextDecoder
-   TextEncoder
-   WebGL2RenderingContext
-   WebGLRenderingContext
-   XRHand
-   createImageBitmap
-   orientation
-   webkitAudioContext
<!-- please don't add documentation below this point -->