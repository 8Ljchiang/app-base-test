import React from 'react';

import { storiesOf } from '@storybook/react';

import { ItemCard, ExpandedItemCard, ExpandibleListItemCard } from '../apps/react-base/src/app/components/units/ListItemCard';

const itemCardProps = {
  title: 'title',
  titleTag: 't-tag',
  subTitle: 'subtitle',
  tagText: 'text-tag',
  description: 'description',
}



storiesOf('Item Card', module)
  .add('Item Card', () => {
    return (
      <ItemCard {...itemCardProps}/>
    );
  })
  .add('Expanded Item Card', () => {
    return (
      <ExpandedItemCard {...itemCardProps}/>
    );
  })
  .add('Expandable Item Card', () => {
    return (
      <ExpandibleListItemCard {...itemCardProps}/>
    );
  });
