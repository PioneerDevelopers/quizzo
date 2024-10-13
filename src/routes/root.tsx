import * as React from 'react';
import Hero from '../components/Hero';
import BasicCard from '../components/Card';
import Footer from '../components/Footer';
import FunZone from '../components/FunZone';

export interface IHomeProps {
}

export default function Home (props: IHomeProps) {
  return (
    <div className='grid grid-col-6 gap-4'>
        <Hero />

        <FunZone />

        <Footer />
    </div>
  );
}
