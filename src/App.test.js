import React from 'react';
import SamuraiApp from "./App";
import ReactDOM from 'react-dom';
import {create} from "react-test-renderer";
import ProfileStatus from "./components/Profile/ProfileInfo/ProfileStatus/ProfileStatus";

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SamuraiApp/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

