import type { NextPage } from 'next'
import Head from 'next/head'

const PokemonDetails: NextPage = () => {
    return(
        <>
            <Head>
                <title>Pokemon Details</title>
            </Head>
            <div className="container flex text-5xl justify-center items-center mx-auto h-screen">
                Pokemon Details
            </div>
        </>
    )
}

export default PokemonDetails