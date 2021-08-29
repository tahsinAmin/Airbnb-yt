import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'

export default function Home({ exploreData }) {
  return (
    <div className="">
      <Head>
        <title>PAPA - Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Banner/>

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
          {/* Pul some data from a server - API  */}
          {exploreData?.map((item) => (
            <h1>{item.location}</h1>
          ))}
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps(){ //whatever we use hinside here is happening on the server.
  const exploreData = await fetch("https://links.papareact.com/pyp").
    then(res => res.json()
  );

  return {
    props: {
      exploreData
    }
  }
}