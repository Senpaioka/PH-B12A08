import { useLoaderData, Await } from "react-router";

import Hero from '../components/Hero';
import Stats from '../components/Stats';
import AppBox from '../components/AppBox';
import { Suspense } from "react";


function Home(){
    
    const data = useLoaderData();


    return(
        <>
            <Hero></Hero>
            <Stats></Stats>
            <AppBox info={data}></AppBox>
        </>
    )
}

export default Home;