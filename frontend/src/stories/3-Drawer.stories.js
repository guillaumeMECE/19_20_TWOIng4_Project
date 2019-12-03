import React from 'react';
import Drawer from '../components/drawer';

export default {
  title: 'Drawer',
};

export const drawer = () => <Drawer child={() => ("Hello World")} pathname="Transaction" />;

