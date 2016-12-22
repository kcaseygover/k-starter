import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import ServiceCard from './ServiceCard';
import Welcome from './Welcome';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('Service Card', module)
  .add('with text', () => (
    <ServiceCard onClick={action('clicked')}>Hello Button</ServiceCard>
  ))
  .add('with some emoji', () => (
    <ServiceCard onClick={action('clicked')}>😀 😎 👍 💯</ServiceCard>
  ));
