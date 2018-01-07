import * as React from "react";
import * as ReactDOM from "react-dom";
import { MovieDB } from "./components/MovieDB";
import { initializeIcons } from '@uifabric/icons';
import { MovieCard } from "./components/movieCard/MovieCard";
import './index.less';



initializeIcons();
/* ReactDOM.render(
    <MovieDB compiler="TypeScript" framework="React"/>,
    document.getElementById("content")
); */

ReactDOM.render(
    <MovieDB/>,
    document.getElementById("content")
);