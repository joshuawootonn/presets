import React, { FC } from 'react';
import Emotion from './Emotion';
import Button from '../Button/Button';

// eslint-disable-next-line import/no-default-export
export default { title: 'Emotion', component: Emotion };

export const Default: FC = () => (
  <Emotion>
    <span role='img' aria-label='crying'>
      😭😭😭
    </span>
  </Emotion>
);
