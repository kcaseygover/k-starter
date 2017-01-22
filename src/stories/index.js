import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import '../index.css';

import Service from '../components/Service';
import Stack from '../components/Stack';
import StackService from '../components/StackService';
import StackContainer from '../components/StackContainer';
import HoverService from '../components/HoverService';
import StyleHover from '../components/StyleHover';

//data to be fed to main container (StackContainer)
const mockData = {
  services:  [{
    serviceName: "Service Name",
    organizationName: "Organization Name",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis quis neque at hendrerit. Fusce vulputate libero non maximus posuere. Mauris sed mauris laoreet, faucibus neque a, rhoncus libero. Etiam fermentum dictum fermentum. Proin sollicitudin auctor nisi at dapibus. Suspendisse lectus erat, commodo eu blandit non, congue quis mauris. Mauris.",
    price: "$0-500/mo",
  },
  {
    serviceName: "Service Name2",
    organizationName: "Organization Name2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis quis neque at hendrerit. Fusce vulputate libero non maximus posuere. Mauris sed mauris laoreet, faucibus neque a, rhoncus libero. Etiam fermentum dictum fermentum. Proin sollicitudin auctor nisi at dapibus. Suspendisse lectus erat, commodo eu blandit non, congue quis mauris. Mauris.",
    price: "$0-500/mo",
  },
  {
    serviceName: "Service Name3",
    organizationName: "Organization Name3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis quis neque at hendrerit. Fusce vulputate libero non maximus posuere. Mauris sed mauris laoreet, faucibus neque a, rhoncus libero. Etiam fermentum dictum fermentum. Proin sollicitudin auctor nisi at dapibus. Suspendisse lectus erat, commodo eu blandit non, congue quis mauris. Mauris.",
    price: "$0-500/mo",
  },
  {
    serviceName: "Service Name4",
    organizationName: "Organization Name4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis quis neque at hendrerit. Fusce vulputate libero non maximus posuere. Mauris sed mauris laoreet, faucibus neque a, rhoncus libero. Etiam fermentum dictum fermentum. Proin sollicitudin auctor nisi at dapibus. Suspendisse lectus erat, commodo eu blandit non, congue quis mauris. Mauris.",
    price: "$0-500/mo",
  },
  ],
  stack: {
    stackName: "Stack Name",
    stackDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis quis neque at hendrerit. Fusce vulputate libero non maximus posuere. Mauris sed mauris laoreet, faucibus neque a, rhoncus libero. Etiam fermentum dictum fermentum. Proin sollicitudin auctor nisi at dapibus. Suspendisse lectus erat, commodo eu blandit non, congue quis mauris. Mauris.",
    trending: true,
  },
};
//stories for individual service cards

storiesOf('Service', module)
  .add('single service card default view', () => {
    const data = {
      serviceName: "Service Name",
      organizationName: "Organization Name",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis quis neque at hendrerit. Fusce vulputate libero non maximus posuere. Mauris sed mauris laoreet, faucibus neque a, rhoncus libero. Etiam fermentum dictum fermentum. Proin sollicitudin auctor nisi at dapibus. Suspendisse lectus erat, commodo eu blandit non, congue quis mauris. Mauris.",
      price: "$0-500/mo",
    };
    return getItem(data);
  })
  .add('single service card with hover activated', () => {
    const data = {
      serviceName: "Service Name",
      organizationName: "Organization Name",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis quis neque at hendrerit. Fusce vulputate libero non maximus posuere. Mauris sed mauris laoreet, faucibus neque a, rhoncus libero. Etiam fermentum dictum fermentum. Proin sollicitudin auctor nisi at dapibus. Suspendisse lectus erat, commodo eu blandit non, congue quis mauris. Mauris.",
      price: "$0-500/mo",
    };
    return getHover(data);
  })
  .add('single service card in hover style', () => {
    const data = {
      serviceName: "Service Name",
      organizationName: "Organization Name",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis quis neque at hendrerit. Fusce vulputate libero non maximus posuere. Mauris sed mauris laoreet, faucibus neque a, rhoncus libero. Etiam fermentum dictum fermentum. Proin sollicitudin auctor nisi at dapibus. Suspendisse lectus erat, commodo eu blandit non, congue quis mauris. Mauris.",
      price: "$0-500/mo",
    };
    return getHoverStyle(data);
  });

  function getItem(data) {
    return (
      <Service
      service={data}
      />
    )
  };

  function getHover(data) {
    return (
      <HoverService
      service={data}
      onMouseOver={action('hover')}
      onMouseOut={action('exit card')}
      />
    )
  };

  function getHoverStyle(data) {
    return (
      <StyleHover
      service={data}
      />
    )
  };

storiesOf('Stack', module)
  .add('default view', () => {
    const data = {
      stackName: "Stack Name",
      stackDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis quis neque at hendrerit. Fusce vulputate libero non maximus posuere. Mauris sed mauris laoreet, faucibus neque a, rhoncus libero. Etiam fermentum dictum fermentum. Proin sollicitudin auctor nisi at dapibus. Suspendisse lectus erat, commodo eu blandit non, congue quis mauris. Mauris.",
      trending: false,
    };
    return getStack(data);
  })
  .add('with trending', () => {
    const data = {
      stackName: "Stack Name",
      stackDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis quis neque at hendrerit. Fusce vulputate libero non maximus posuere. Mauris sed mauris laoreet, faucibus neque a, rhoncus libero. Etiam fermentum dictum fermentum. Proin sollicitudin auctor nisi at dapibus. Suspendisse lectus erat, commodo eu blandit non, congue quis mauris. Mauris.",
      trending: true,
    };
    return getStack(data);
  });

  function getStack(data) {
    return (
      <Stack
      stack={data}
      />
    )
  };

storiesOf('StackContainer', module)
  .add('Trending Stack with 2 cards with hover & 2 cards without hover', () => (
    <StackContainer data={mockData} />
  ));



