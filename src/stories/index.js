import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import ServiceCard from './ServiceCard';
import Welcome from './Welcome';

import '../index.css';
import App from '../App';

import Service from '../components/Service';
import Stack from '../components/Stack';
import StackService from '../components/StackService';
import StackContainer from '../components/StackContainer';
import HoverService from '../components/HoverService';
import StyleHover from '../components/StyleHover';


const data = {
  serviceName: "Service Name",
  organizationName: "Organization Name",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis quis neque at hendrerit. Fusce vulputate libero non maximus posuere. Mauris sed mauris laoreet, faucibus neque a, rhoncus libero. Etiam fermentum dictum fermentum. Proin sollicitudin auctor nisi at dapibus. Suspendisse lectus erat, commodo eu blandit non, congue quis mauris. Mauris.",
  price: "$0-500/mo",
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
  ));

storiesOf('StackService', module)
  .add('default view', () => (
    <StackService />
  ));

const whatever = {
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

    dataStack: {
      stackName: "Stack Name",
      stackDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis quis neque at hendrerit. Fusce vulputate libero non maximus posuere. Mauris sed mauris laoreet, faucibus neque a, rhoncus libero. Etiam fermentum dictum fermentum. Proin sollicitudin auctor nisi at dapibus. Suspendisse lectus erat, commodo eu blandit non, congue quis mauris. Mauris."
    },

  }

storiesOf('StackContainer', module)
  .add('default view', () => (
    <StackContainer thing={whatever} />
  ));


// storiesOf('Service Card', module)

//   .add('with text', () => (
//     <ServiceCard onMouseOver={action('hover')}><p>Hello Button</p><p>2nd paragraph</p></ServiceCard>
//   ))
//   .add('hover', () => (
//       <ServiceCard onMouseOver={action('hover')}>button</ServiceCard>
//   ));

