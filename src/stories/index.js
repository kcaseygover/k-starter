import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import '../index.css';

import Service from '../components/Service';
import Stack from '../components/Stack';
import StackService from '../components/StackService';
import StackContainer from '../components/StackContainer';
import HoverService from '../components/HoverService';
import StyleHover from '../components/StyleHover';

//mock data
const mockData = {
  services:  [{
    serviceName: "Service Name",
    organizationName: "Organization Name",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis quis neque at hendrerit. Fusce vulputate libero non maximus posuere. Mauris sed mauris laoreet, faucibus neque a, rhoncus libero. Etiam fermentum dictum fermentum. Proin sollicitudin auctor nisi at dapibus. Suspendisse lectus erat, commodo eu blandit non, congue quis mauris. Mauris.",
    price: "$0-500/mo",
  },
  { serviceName: "Service Name2",
    organizationName: "Organization Name2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis quis neque at hendrerit. Fusce vulputate libero non maximus posuere. Mauris sed mauris laoreet, faucibus neque a, rhoncus libero. Etiam fermentum dictum fermentum. Proin sollicitudin auctor nisi at dapibus. Suspendisse lectus erat, commodo eu blandit non, congue quis mauris. Mauris.",
    price: "$0-500/mo",
  },
  ],
  stack: {
    stackName: "Stack Name",
    stackDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis quis neque at hendrerit. Fusce vulputate libero non maximus posuere. Mauris sed mauris laoreet, faucibus neque a, rhoncus libero. Etiam fermentum dictum fermentum. Proin sollicitudin auctor nisi at dapibus. Suspendisse lectus erat, commodo eu blandit non, congue quis mauris. Mauris.",
    trending: "false",
  },
};

storiesOf('Service', module)
  .add('default view', () => (
    <Service />
  ))
  .add('hover activated', () => (
    <HoverService onMouseOver={action('hover')} onMouseOut={action('exit card')} />
  ))
  .add('hover style', () => (
      <StyleHover />
  ));


storiesOf('Stack', module)
  .add('default view', () => (
    <Stack />
  ))
  .add('with trending', () => (
    <Stack/>
  ));

storiesOf('StackService', module)
  .add('default view', () => (
    <StackService />
  ));



storiesOf('StackContainer', module)
  .add('2 cards with hover & 2 cards without', () => (
    <StackContainer data={mockData} />
  ))
  .add('Trending Stack with 2 cards with hover & 2 cards without', () => (
    <StackContainer data={mockData} />
  ));



