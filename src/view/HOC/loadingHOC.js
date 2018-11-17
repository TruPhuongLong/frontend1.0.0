import React, { Component } from 'react';
import './loadingHOC.css';

const LoadingHOC = (loadingProp) => (WrappedComponent) => {
  return class LoadingHOC extends Component {
    render() {
      return this.props[loadingProp] 
        ? <div className="loader" /> 
        : <WrappedComponent {...this.props}/>;
    }
  }
}


export default LoadingHOC;