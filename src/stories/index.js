/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import {
  Source as SearchWidgetSource,
  FormattedComponent as SearchWidget,
  searchData,
} from '../challenges/SearchWidget';

console.log('searchData', searchData.results);

storiesOf('Search Widget', module)
  .add('source image', () => <SearchWidgetSource />)
  .add('formatted component', () =>
    <SearchWidget users={searchData.results} query="joe" />,
  );
