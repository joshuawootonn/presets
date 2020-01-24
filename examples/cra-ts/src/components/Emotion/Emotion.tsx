/* eslint-disable react/prop-types, react/button-has-type */
import React, { FC } from 'react';
import { css } from '@emotion/core';

const Emotion: FC = ({ children }) => (
  <div
    css={css`
      margin: 10px;
    `}
  >
    {children}
  </div>
);

// eslint-disable-next-line import/no-default-export
export default Emotion;
