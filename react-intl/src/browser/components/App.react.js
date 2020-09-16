import React from 'react';
import styled from 'styled-components';
import {FormattedMessage, FormattedDate, FormattedNumber, defineMessages} from 'react-intl';

import SwitchLocale from './SwitchLocale.react';
import start from './start';

const Content = styled.div`
  text-size-adjust: none;
  text-align: center;
  font-family: helvetica, arial, sans-serif;
  line-height: 1.8;
  font-size:14px;
  padding: 6px 20px 30px;
`;

export const msg = defineMessages({
  welcome: {
    id: 'welcome',
    defaultMessage: `Hi dear {name}, you have to {unreadCount, number} {unreadCount, plural,
      one {message}
      other {messages}
    }`
  }
});

export const App = () => (
  <Content>
    <SwitchLocale />
     <h1>
      <FormattedDate
        value={Date.now()}
        day="numeric"
        month="long"
        year="numeric"
      />
    </h1>
    <h1>
      <FormattedNumber
        value={1000}
        style="currency"
        currency="EUR"
      />
    </h1>
    <h1>
      <FormattedMessage
        {...msg.welcome}
        values={{name: <b>Eric</b>, unreadCount: 25}}
      />
    </h1>
   
    
  </Content>
);

export default start(App);
