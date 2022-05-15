import React from 'react';

interface GalleryProps {
  images: string[],
  show: boolean
}

const Gallery = (props: GalleryProps) => {
  const { show } = props;
  return (
    <div style={{ display: show ? 'block' : 'none' }}>Gallery</div>
  )
}

export default Gallery;