import Hero from '@/components/hero';
import React from 'react';
import reliabilityImage from 'public/reliability.jpg';

function Reliability() {
  return (
    <Hero imgData={reliabilityImage} imgAlt="reliability" title="> 99.99% reliable and Uptime" />
  );
}

export default Reliability;
