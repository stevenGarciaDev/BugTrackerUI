import React from 'react';
import { SpinnerImage } from './loading-spinner.styles';

export const LoadingSpinner = () => (
  <div>
    <SpinnerImage data-testid="loading-spinner" />
    <h3>Loading...</h3>
  </div>
);

export default LoadingSpinner;
