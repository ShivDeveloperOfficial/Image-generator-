import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ImageGeneratorForm from './components/ImageGeneratorForm';
import ImageGrid from './components/ImageGrid';
import Loader from './components/Loader';
import { ImageStyle, AspectRatio } from './types';
import { generateImages } from './services/geminiService';
import { ASPECT_RATIO_OPTIONS } from './constants';

const App: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [style, setStyle] = useState<ImageStyle>(ImageStyle.REALISTIC);
  const [aspectRatio, setAspectRatio] = useState<AspectRatio['value']>(ASPECT_RATIO_OPTIONS[0].value);
  
  const [images, setImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [hasGenerated, setHasGenerated] = useState<boolean>(false);

  const handleGenerate = useCallback(async () => {
    if (!prompt.trim()) {
      setError("Please enter a prompt.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setImages([]); // Clear previous images for a new generation

    try {
      const generated = await generateImages(prompt, style, aspectRatio);
      if (generated.length === 0) {
        setError("The model could not generate images for this prompt. Please try a different one.");
      } else {
        setImages(generated);
      }
      setHasGenerated(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred.");
    } finally {
      setIsLoading(false);
    }
  }, [prompt, style, aspectRatio]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white flex flex-col font-sans">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-start w-full px-4 pb-12">
        <ImageGeneratorForm
          prompt={prompt}
          setPrompt={setPrompt}
          style={style}
          setStyle={setStyle}
          aspectRatio={aspectRatio}
          setAspectRatio={setAspectRatio}
          onSubmit={handleGenerate}
          isLoading={isLoading}
          hasGenerated={hasGenerated}
        />
        
        {isLoading && <Loader />}
        
        {error && (
          <div className="mt-6 bg-red-500/30 text-red-300 p-4 rounded-lg max-w-4xl w-full text-center">
            <p><strong>Error:</strong> {error}</p>
          </div>
        )}
        
        {!isLoading && images.length > 0 && <ImageGrid images={images} />}
      </main>
      <Footer />
    </div>
  );
};

export default App;
