import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from '../index';

storiesOf('Button', module)
  .add('default view', () => (
    <Button onClick={ action('button clicked') }>Hello</Button>
  ))
  .add('link button', () => (
    <Button onClick={ linkTo('Button', 'some emojies as the text') }>Next Story</Button>
  ))
  .add('some emojies as the text', () => (
    <Button>😀 😎 👍 💯</Button>
  ))
  .add('custom styles', () => {
    const style = {
      fontSize: 20,
      textTransform: 'uppercase',
      color: '#FF8833',
    };
    return (
      <Button style={ style }>Hello</Button>
    );
  });
