import render from "./render";
import dot from "./dot";
import renderDot from "./renderDot";
import transition from "./transition";
import engine from "./engine";
import totalMemory from "./totalMemory";
import keyMode from "./keyMode";
import tweenPaths from "./tweenPaths";
import tweenShapes from "./tweenShapes";
import tweenPrecision from "./tweenPrecision";

export function Graphviz(selection) {
    this._selection = selection;
    this._active = false;
    this._jobs = [];
    this._keyModes = new Set([
        'title',
        'id',
        'tag-index',
        'index'
    ]);
    this._engine = 'dot';
    this._totalMemory = undefined;
    this._keyMode = 'title';
    this._tweenPaths = true;
    this._tweenShapes = true;
    this._tweenPrecision = 1;
}

export default function graphviz() {
  var g = new Graphviz;
  return g;
}

Graphviz.prototype = graphviz.prototype = {
    constructor: Graphviz,
    engine: engine,
    totalMemory: totalMemory,
    keyMode: keyMode,
    tweenPaths: tweenPaths,
    tweenShapes: tweenShapes,
    tweenPrecision: tweenPrecision,
    render: render,
    dot: dot,
    renderDot: renderDot,
    transition: transition,
};
