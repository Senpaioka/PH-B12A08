import { useLoaderData } from "react-router";

import Hero from '../components/Hero';
import Stats from '../components/Stats';
import AppBox from '../components/AppBox';


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