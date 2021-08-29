import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard';
import MediumCard from '../components/MediumCard';

export default function Home({ exploreData, cardData }) {
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
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {exploreData?.map(({img, location, distance}) => (
            <SmallCard
             key={img} 
             img={img} 
             distance={distance} 
             location={location}/>
          ))}
          </div>
        </section>
        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
          
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {cardData?.map(({img, location, distance}) => (
            <MediumCard
            key={img} 
            img={img} 
            distance={distance} 
            location={location}/>
          ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps(){ //whatever we use hinside here is happening on the server.
  const exploreData = await fetch("https://links.papareact.com/pyp").
    then(res => res.json()
  );

  const cardData = await fetch("https://links.papareact.com/zp1").
    then(res => res.json()
  );

  return {
    props: {
      exploreData,
      cardData
    }
  }
}