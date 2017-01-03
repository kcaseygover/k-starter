import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import ServiceCard from './ServiceCard';
import Welcome from './Welcome';

import '../index.css';
import App from '../App';

import Service from '../components/Service';
import Stack from '../components/Stack';

const CenterDecorator = (story) => (
  <div style={{ textAlign: "center" }}>
    {story()}
  </div>
);

storiesOf('Service', module)
  .add('default view', () => (
    <Service />
  ));

storiesOf('Stack', module)
  .add('default view', () => (
    <Stack />
  ));

storiesOf('App', module)
  .add('default view', () => (
    <App />
  ))

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('Service Card', module)
  .addDecorator(CenterDecorator)
  .add('with text', () => (
    <ServiceCard onClick={action('clicked')}>Hello Button</ServiceCard>
  ))
  .add('with some emoji', () => (
    <ServiceCard onClick={action('clicked')}>😀 😎 👍 💯</ServiceCard>
  ));
