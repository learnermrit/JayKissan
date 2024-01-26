import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'
import TopCard from './homebanner/TopCard';
import KisaanServices from './homebanner/KisaanServices';
import Pethiya from './homebanner/Pethiya';
import PlantAdopter from './homebanner/PlantAdopter';
import BookMyTree from './homebanner/BookMyTree';
import CropSuggestion from './homebanner/CropSuggestion';

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  
    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8 px-2'>

               
            <TopCard/>
            <KisaanServices/>
            <Pethiya/>
            <PlantAdopter/>
            <BookMyTree/>
            <CropSuggestion/>


            {/* <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                        
                    ))}
                </div>
            </Container> */}
          
        </div>
    )
}

export default Home