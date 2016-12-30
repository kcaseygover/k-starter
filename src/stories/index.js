import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import ServiceCard from './ServiceCard';
import Welcome from './Welcome';
import Service from '../components/Service';

const CenterDecorator = (story) => (
  <div style={{ textAlign: "center" }}>
    {story()}
  </div>
);

storiesOf('Service', module)
  .add('with Hover', () => (
    <Service />
  ));

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
