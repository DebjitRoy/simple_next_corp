import Hero from '@/components/hero';
import scaleImage from 'public/scale.jpg';

function Scale() {
  return <Hero imgData={scaleImage} imgAlt="scale" title="Scale your app to infinity" />;
}

export default Scale;
