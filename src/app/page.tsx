"use client"; 

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const HorizontalImageGallery: React.FC = () => {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const gallery = galleryRef.current;
      if (!gallery) return;

      const children = Array.from(gallery.children) as HTMLElement[];

      children.forEach((child) => {
        const rect = child.getBoundingClientRect();
        const screenWidth = window.innerWidth;
        const centerX = screenWidth / 2;

        // Calculate the distance of the image from the center
        const distanceFromCenter = Math.abs(rect.left + rect.width / 2 - centerX);

        // Scale the image based on distance from the center (closer to center = larger)
        const scale = Math.max(0.8, 1 - distanceFromCenter / screenWidth);

        child.style.transform = `scale(${scale})`;
      });
    };

    const galleryElement = galleryRef.current;
    if (galleryElement) {
      galleryElement.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial call to scale elements when the page loads
    }

    return () => {
      if (galleryElement) {
        galleryElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <section
      className="min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 py-16 flex justify-center items-center"
      style={{ border: 'none', boxShadow: 'none', outline: 'none', overflow: 'hidden' }} // Remove borders/shadows
    >
      <div
        ref={galleryRef}
        className="overflow-x-scroll flex gap-8 w-full max-w-7xl px-8 snap-x snap-mandatory scroll-smooth border-0 shadow-none"
        style={{ paddingLeft: '50vw', paddingRight: '50vw', border: 'none', boxShadow: 'none', outline: 'none' }}
      >
        {/* Image 1 */}
        <div className="shrink-0 rounded-lg overflow-hidden snap-center transition-transform duration-300 min-w-[300px] border-0 shadow-none">
          <Image
            src="https://magnumx.me/wp-content/uploads/2023/06/Minji-NewJeans-FanArt-02.jpg"
            alt="Portrait 1"
            width={300}
            height={450}
            className="object-cover w-full h-full rounded-lg border-0 shadow-none"
          />
        </div>

        {/* Image 2 */}
        <div className="shrink-0 rounded-lg overflow-hidden snap-center transition-transform duration-300 min-w-[300px] border-0 shadow-none">
          <Image
            src="https://cdn.pixabay.com/photo/2024/02/01/04/29/woman-8545254_1280.png"
            alt="Portrait 2"
            width={300}
            height={450}
            className="object-cover w-full h-full rounded-lg border-0 shadow-none"
          />
        </div>

        {/* Image 3 */}
        <div className="shrink-0 rounded-lg overflow-hidden snap-center transition-transform duration-300 min-w-[300px] border-0 shadow-none">
          <Image
            src="https://cdn.pixabay.com/photo/2024/01/15/13/05/ai-woman-8510166_1280.png"
            alt="Portrait 3"
            width={300}
            height={450}
            className="object-cover w-full h-full rounded-lg border-0 shadow-none"
          />
        </div>

        {/* Image 4 */}
        <div className="shrink-0 rounded-lg overflow-hidden snap-center transition-transform duration-300 min-w-[300px] border-0 shadow-none">
          <Image
            src="https://e7.pngegg.com/pngimages/292/13/png-clipart-anime-drawing-manga-anime-girl-black-hair-fictional-character.png"
            alt="Portrait 4"
            width={300}
            height={450}
            className="object-cover w-full h-full rounded-lg border-0 shadow-none"
          />
        </div>

        {/* Image 5 */}
        <div className="shrink-0 rounded-lg overflow-hidden snap-center transition-transform duration-300 min-w-[300px] border-0 shadow-none">
          <Image
            src="https://cdn.pixabay.com/photo/2024/03/03/12/42/ai-generated-8610368_640.png"
            alt="Portrait 5"
            width={300}
            height={450}
            className="object-cover w-full h-full rounded-lg border-0 shadow-none"
          />
        </div>
      </div>
    </section>
  );
};

export default HorizontalImageGallery;
