import { FC } from 'react';
import './Spinner.scss';

interface ISpinner {
    size?: number;
    color?: string;
}

export const Spinner: FC<ISpinner> = ({ size = 60, color = '#000' }) => {
    return (
      <div className='spinner'>
        <svg
          width={`${size}px`}
          height={`${size}px`}
          viewBox="0 0 50 50"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
        >
          <circle
            cx="25"
            cy="25"
            fill="none"
            r="20"
            stroke={color}
            strokeWidth="4"
            strokeLinecap="round"
            opacity=".5"
          >
            <animate
              attributeName="stroke-dashoffset"
              dur="1s"
              repeatCount="indefinite"
              from="0"
              to="502"
            />
            <animate
              attributeName="stroke-dasharray"
              dur="1s"
              repeatCount="indefinite"
              values="150.6 100.4;1 250;150.6 100.4"
            />
          </circle>
        </svg>
      </div>
      );
};
