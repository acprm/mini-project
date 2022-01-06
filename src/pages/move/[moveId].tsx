import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router';

const MoveDetails: NextPage = () => {
    const router = useRouter();
    const {moveId} = router.query
    return(
        <>
            <Head>
                <title>Move Details</title>
            </Head>
            <div className="container flex text-5xl justify-center items-center mx-auto h-screen">
                Move Details {moveId}
            </div>
        </>
    )
}

export default MoveDetails