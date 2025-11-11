import React from 'react';
import { ImageStyle } from '../types';
import { STYLE_OPTIONS, ASPECT_RATIO_OPTIONS } from '../constants';
import { RegenerateIcon } from './icons';

interface ImageGeneratorFormProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  style: ImageStyle;
  setStyle: (style: ImageStyle) => void;
  aspectRatio: string;
  setAspectRatio: (ratio: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
  hasGenerated: boolean;
}

const ImageGeneratorForm: React.FC<ImageGeneratorFormProps> = ({
  prompt,
  setPrompt,
  style,
  setStyle,
  aspectRatio,
  setAspectRatio,
  onSubmit,
  isLoading,
  hasGenerated,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoading && prompt.trim()) {
      onSubmit();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-4xl mx-auto p-6 md:p-8 bg-black/30 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl space-y-6"
    >
      <div className="relative">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe the image you want to create..."
          rows={3}
          className="w-full bg-black/40 text-white rounded-xl p-4 pr-12 border border-white/20 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all placeholder-gray-400 resize-none"
          disabled={isLoading}
        />
        {hasGenerated && !isLoading && (
          <button
            type="button"
            onClick={onSubmit}
            className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
            title="Regenerate with same prompt"
            aria-label="Regenerate with same prompt"
          >
            <RegenerateIcon className="w-6 h-6" />
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <select
          value={style}
          onChange={(e) => setStyle(e.target.value as ImageStyle)}
          className="w-full bg-black/40 text-white rounded-xl p-3 border border-white/20 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all"
          disabled={isLoading}
        >
          {STYLE_OPTIONS.map((s) => (
            <option key={s} value={s} className="bg-gray-800">
              {s}
            </option>
          ))}
        </select>

        <select
          value={aspectRatio}
          onChange={(e) => setAspectRatio(e.target.value)}
          className="w-full bg-black/40 text-white rounded-xl p-3 border border-white/20 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all"
          disabled={isLoading}
        >
          {ASPECT_RATIO_OPTIONS.map((ratio) => (
            <option key={ratio.value} value={ratio.value} className="bg-gray-800">
              {ratio.label}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        disabled={isLoading || !prompt.trim()}
        className="w-full text-lg font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl py-3 px-6 transition-all duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 glow-on-hover"
      >
        {isLoading ? 'Generating...' : 'Generate Image'}
      </button>
    </form>
  );
};

export default ImageGeneratorForm;
