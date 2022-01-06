import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

const PokemonDetails: NextPage = () => {
    const router = useRouter();
    const {pokemonId} = router.query
    return(
        <>
            <Head>
                <title>Pokemon Details</title>
            </Head>
            <div className="container flex text-5xl justify-center items-center mx-auto h-screen">
                Pokemon Details {pokemonId}
            </div>
        </>
    )
}

export default PokemonDetails