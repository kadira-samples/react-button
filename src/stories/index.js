import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from '../index';

storiesOf('Button', module)
  .add('default view', () => (
    <pre>
      process.env.STORYBOOK_CLOUD_URL: {process.env.STORYBOOK_CLOUD_URL}
      process.env.STORYBOOK_CLOUD_APPID: {process.env.STORYBOOK_CLOUD_APPID}
      process.env.STORYBOOK_CLOUD_DATABASE: {process.env.STORYBOOK_CLOUD_DATABASE}
    </pre>
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
