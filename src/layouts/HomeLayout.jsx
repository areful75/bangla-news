import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../components/Header';
import LetestNews from '../components/LetestNews';
import Navbar from '../components/Navbar';
import LeftAside from '../components/HomeLayout/LeftAside';
import RightAside from '../components/HomeLayout/RightAside';
import Loading from '../Pages/Loading';

const HomeLayout = () => {
    const {state}=useNavigation();
    //console.log(navigation);
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto '>
                    <LetestNews></LetestNews>
                </section>
                <nav className='w-11/12 mx-auto'>
                    <Navbar></Navbar>
                </nav>
            </header> 
            <main className='w-11/12 mx-auto my-3  grid grid-cols-12 gap-5'>
               
               <aside className='col-span-3 sticky h-fit top-0'>
                <LeftAside></LeftAside>
               </aside>
                <section className="main col-span-6">
                 {state =="loading" ?<Loading></Loading>:<Outlet></Outlet>}   
                </section>
              <aside className='col-span-3 sticky h-fit top-0'>
              <RightAside></RightAside>
              </aside>
            </main>

        </div>
    );
};

export default HomeLayout;