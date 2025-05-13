
import React, { useState } from "react";

interface GalleryImage {
  id: string;
  imageUrl: string;
  caption: string;
  date: string;
  category: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
  categories: string[];
}

const GalleryGrid = ({ images, categories }: GalleryGridProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages =
    selectedCategory === "all"
      ? images
      : images.filter((image) => image.category === selectedCategory);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6 justify-center">
        <button
          onClick={() => setSelectedCategory("all")}
          className={`px-4 py-2 rounded-full text-sm ${
            selectedCategory === "all"
              ? "bg-tour-orange text-white"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          ทั้งหมด
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm ${
              selectedCategory === category
                ? "bg-tour-orange text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className="group relative overflow-hidden rounded-lg cursor-pointer h-64"
            onClick={() => openLightbox(image)}
          >
            <img
              src={image.imageUrl}
              alt={image.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex flex-col justify-end p-4">
              <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-medium text-sm">{image.caption}</h3>
                <p className="text-white/80 text-xs">{image.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <div
            className="max-w-4xl w-full max-h-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedImage.imageUrl}
                alt={selectedImage.caption}
                className="mx-auto max-h-[80vh] w-auto object-contain"
              />
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white text-2xl bg-tour-orange rounded-full w-10 h-10 flex items-center justify-center"
              >
                ✕
              </button>
            </div>
            <div className="bg-white p-4 mt-2 rounded">
              <h3 className="font-bold">{selectedImage.caption}</h3>
              <p className="text-gray-600 text-sm">
                {selectedImage.date} | {selectedImage.category}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryGrid;
