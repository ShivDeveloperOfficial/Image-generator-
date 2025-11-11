import React from 'react';
import { DownloadIcon } from './icons';

interface ImageGridProps {
  images: string[];
}

const ImageCard: React.FC<{ src: string; index: number }> = ({ src, index }) => {
  return (
    <div className="relative group overflow-hidden rounded-xl shadow-lg animate-fade-in aspect-square" style={{ animationDelay: `${index * 100}ms` }}>
      <img src={src} alt={`Generated image ${index + 1}`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <a
          href={src}
          download={`ai-image-${Date.now()}-${index}.png`}
          className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors transform hover:scale-110"
          aria-label="Download image"
          title="Download Image"
        >
          <DownloadIcon className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  if (images.length === 0) {
    return null;
  }

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold text-white mb-6 text-center md:text-left">Results</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {images.map((imageSrc, index) => (
          <ImageCard key={index} src={imageSrc} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ImageGrid;
