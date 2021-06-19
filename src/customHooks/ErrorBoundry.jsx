import React, { Component } from 'react';
import ErrorPageContainer from '../component/models/ErrorPageContainer';
export default class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <ErrorPageContainer />;
    }

    return this.props.children;
  }
}
