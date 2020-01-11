import React from 'react';

import CollectionItem from '../collection-item/collection-item.component.jsx';

import { CollectionPreviewContainer, CollectionPreviewTitle, CollectionPreviewItemContainer } from './collection-preview.styles';

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
    <CollectionPreviewTitle>{title.toUpperCase()}</CollectionPreviewTitle>
    <CollectionPreviewItemContainer>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
      ))}
    </CollectionPreviewItemContainer>
  </CollectionPreviewContainer>
);

export default CollectionPreview;
