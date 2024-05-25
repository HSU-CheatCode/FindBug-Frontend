
// import { useState } from 'react';
// import BugsPage from './bugs-page';
// import NoBugsPage from './no-bugs-page';
// const MyShop = () => {
//     const [bugs, isBugs] = useState<boolean>(false); // 벌레 유무에 따라 나의 가게 화면 구분하는 값
//     return bugs ? <BugsPage /> : <NoBugsPage />;
// };
// export default MyShop;

import { useState } from 'react';
import BugsPage from './bugs-page';
import NoBugsPage from './no-bugs-page';

const MyShop = () => {
    const [bugs, setBugs] = useState(true); 
    // 벌레 유무에 따라 나의 가게 화면 구분하는 값
    return bugs ? <BugsPage /> : <NoBugsPage />;
};

export default MyShop;
