# React Ratty component boilerplate

Required Glyphicons

### Component library transpilation

The library source code, which is located in `src/lib`, is transpiled with Babel but is _not_ bundled with Webpack. Bundling is completely unnecessary, since the developer who will in the end use your library for their application will bundle their entire codebase, which includes your library. More importantly, if your library has any dependencies, bundling them together with your code would be a disaster since it could cause duplication and therefore larger final bundle size. The components still have to be transpiled since many developers have Webpack configured to not transpile their node_modules folder. Some may not be using JSX or ES6 at all, and would therefore be unable to transpile your component.

### Demo app transpilation

The demo app source code lives inside the `src/docs` folder. It is transpiled, bundled and minified by Webpack and Babel into the `docs` folder in the root directory (by running `npm run docs:prod`). This is a completely normal react app with minimal configuration that imports the component library. It has two purposes: 1. To have a way of inspecting your components while you develop the library, and 2. As a demo to showcase to people who try to figure out what your library does.

The reason that the folder doesn't have a logical name like `demo` is that GitHub Pages requires it to be called `docs` for some reason...

## Getting started
```
import ReactRaty from '@fishingbooker/react-raty';
 
export default function ReviewRating(){
    return <ReactRaty rating={4.48}/>
}