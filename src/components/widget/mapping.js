import React from 'react';

import { Badge } from "../Badge";
import { DummyBadge } from "../DummyBadge";


const Mapping = () => {
  return {
    'test_wdgt_v0': <Badge />,
    'wdgt_badge': <DummyBadge />
  }
};

export default Mapping;