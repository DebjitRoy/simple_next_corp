import Hero from '@/components/hero';
import React from 'react';
import performanceImage from 'public/performance.jpg';

function Performance() {
  return (
    <Hero
      imgData={performanceImage}
      imgAlt="performance"
      title="We serve high performance Applications"
    />
  );
}

export default Performance;
