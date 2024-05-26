import React from 'react';
import { useRoute } from '@react-navigation/native';
import BugsExistPage from './bugs-exist-page';
import NoBugsExistPage from './no-bugs-exist-page';

const MyShopDetail = () => {
  const { params } = useRoute();
  const { bugs } = params;
  return bugs ? <BugsExistPage /> : <NoBugsExistPage />;
};

export default MyShopDetail;

