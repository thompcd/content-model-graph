import { FaSitemap } from 'react-icons/fa';
import React from 'react';
import schema from 'part:@sanity/base/schema';
import Switch from 'part:@sanity/components/toggles/switch';

import ContentModelGraph from './component';

// eslint-disable-next-line no-underscore-dangle
const { types } = schema._source;

const boundContentModelGraph = <ContentModelGraph types={types} Switch={Switch} />;

export default {
  component: () => boundContentModelGraph,
  icon: FaSitemap,
  name: 'contentModelGraph',
  title: 'Content Model Graph',
};
