import React, { Component } from 'react';
import Log from '../../core/services/log.service';

export class ErrorBoundary extends Component<any, any> {
  constructor(props) {
    super(props);

    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    const { boundaryContext } = this.props;
    Log.error(error, boundaryContext);
    console.log(info);
    this.setState({
      hasError: true
    });
  }

  render() {
    const { hasError } = this.state;
    const { fallback, children } = this.props;
    const FallbackComponent = fallback;
    return hasError ? (<FallbackComponent/>) : children;
  }
}
