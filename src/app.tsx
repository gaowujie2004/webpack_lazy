import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


const Home = React.lazy(() => import(/* webpackChunkName: "Home" */'./home'));
const Profile = React.lazy(() => import(/* webpackChunkName: "Profile" */'./profile'));


const App = () => {
    return <BrowserRouter>
        <Routes>
            <Route path='/profile' element={<Profile />} />
            <Route index path='/' element={<Home />} />
        </Routes>
        <hr />

        <nav>
            <p><Link to="/">首页</Link></p>        
            <p><Link to="/profile">个人中心</Link>  </p>      
        </nav>
    </BrowserRouter>
};

export default App