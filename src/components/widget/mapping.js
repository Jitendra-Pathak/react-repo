import React from 'react';
// import ReactDOMServer from 'react-dom/server'

import { Badge } from "../Badge";
import { DummyBadge } from "../DummyBadge";


const Mapping = {
    'test_wdgt_v0':  <Badge />,
    'wdgt_badge':  <DummyBadge />,
};

// const Mapping = {
//     'test_wdgt_v0':  ReactDOMServer.renderToString(<Badge />),
//     'wdgt_badge':  ReactDOMServer.renderToString(<DummyBadge />),
// };

export default Mapping;