import React from 'react';

import { Badge } from "../Badge";
import { DummyBadge } from "../DummyBadge";


// const Mapping = {
//     'test_wdgt_v0': <Badge />,
//     'wdgt_badge': <DummyBadge />
//   };


const Mapping = (path) => {
  switch(path) {
    case 'test_wdgt_v0':
      return Badge;
      break;

    case 'wdgt_badge':
      return DummyBadge
      break;

    default:
      return Badge;
  }
}

export default Mapping;