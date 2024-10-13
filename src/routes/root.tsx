import * as React from 'react';
import Hero from '../components/Hero';

export interface IHomeProps {
}

export default function Home (props: IHomeProps) {
  return (
    <div>
        <Hero />
      <h1 className="text-3xl font-bold underline">
        Welcome
      </h1>
    </div>
  );
}
