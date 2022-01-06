import type { NextPage } from 'next'
import Head from 'next/head'

const Favorites: NextPage = () => {
    return(
        <>
            <Head>
                <title>Favorites</title>
            </Head>
            <div className="container flex text-5xl justify-center items-center mx-auto h-screen">
                Favorites
            </div>
        </>
    )
}

export default Favorites