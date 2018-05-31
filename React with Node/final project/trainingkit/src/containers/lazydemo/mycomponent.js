import React from 'react';
import ReactDOM from 'react-dom';
import { lazyload } from 'react-lazyload';

/*@lazyload({
  height: 200,
  once: true,
  offset: 100
})*/

export default class MyComponent extends React.Component {
  render() {
    return <div>this component is lazyloaded by default!</div>;
  }
}