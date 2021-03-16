import styled from 'styled-components';
import { ReactComponent as Image } from './loadingSpinnerImage.svg';

// eslint-disable-next-line import/prefer-default-export
export const SpinnerImage = styled(Image)`
    animation: spin 1.5s infinite;
    -webkit-animation: spin 1.5s infinite;
    @keyframes spin {
        to {
            -webkit-transform: rotate(360deg);
        }
    }
    @-webkit-keyframes spin {
        to {
            -webkit-transform: rotate(360deg);
        }
    }
    margin-bottom: 10px;
    position: relative;
    top: 15px;
`;
