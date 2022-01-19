import React from 'react';
import NewItem from './NewItem';
import Items from './Items';
import {inject, observer} from 'mobx-react'


const UnpackedItems = inject('itemList')(
  observer(({itemList}) => {
   return <Items title='Unpacked Items' items= {itemList.unpackedItems} />
  }),
);

const PackedItems = inject('itemList')(
  observer(({itemList}) => {
   return <Items title='Packed Items' items= {itemList.packedItems} />
  }),
);

const Application = () => {
  return (
    <div className="Application">
      <NewItem />
     <UnpackedItems />
     <PackedItems />
      <button className="button full-width">Mark All As Unpacked</button>
    </div>
  );
};

export default Application;
