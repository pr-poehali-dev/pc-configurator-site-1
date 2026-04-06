import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { categoryIcons } from './types';

interface ComponentImageProps {
  src: string;
  alt: string;
  categoryId: string;
}

export default function ComponentImage({ src, alt, categoryId }: ComponentImageProps) {
  const [error, setError] = useState(false);
  if (error) {
    return (
      <div className="w-16 h-16 flex-shrink-0 bg-secondary flex items-center justify-center text-muted-foreground">
        <Icon name={categoryIcons[categoryId] ?? 'Package'} fallback="Package" size={22} />
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      onError={() => setError(true)}
      className="w-16 h-16 flex-shrink-0 object-contain bg-secondary p-1"
    />
  );
}
