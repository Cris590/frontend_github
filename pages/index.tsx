
import { NextPage , GetStaticProps} from 'next';
import { useEffect, useState } from 'react';
import { Layout, Navbar } from '../components'
import { useRouter } from "next/router";
import React from 'react';

const HomePage: NextPage = () => {
    const router = useRouter()
   
    useEffect(() => {
      router.push(`/project/frontend_github`)
    }, [])
    
    return (
      <Layout title='Listado Pokemons'>
        
      </Layout>
    )
}

export default HomePage