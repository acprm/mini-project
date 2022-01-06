import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router';

const TypeDetails: NextPage = () => {
    const router = useRouter();
    const {typeId} = router.query
    return(
        <>
            <Head>
                <title>Type Details</title>
            </Head>
            <div className="container flex text-5xl justify-center items-center mx-auto h-screen">
                Type Details {typeId}
            </div>
        </>
    )
}

export default TypeDetails