import React from "react";
import styles from "./MediaGallery.module.css";

const mediaItems = [
  { id: 1, src: "https://via.placeholder.com/300", alt: "Media 1" },
  { id: 2, src: "https://via.placeholder.com/300", alt: "Media 2" },
  { id: 3, src: "https://via.placeholder.com/300", alt: "Media 3" },
  { id: 4, src: "https://via.placeholder.com/300", alt: "Media 4" },
  { id: 5, src: "https://via.placeholder.com/300", alt: "Media 5" },
  { id: 6, src: "https://via.placeholder.com/300", alt: "Media 6" },
  { id: 7, src: "https://via.placeholder.com/300", alt: "Media 7" },
  { id: 8, src: "https://via.placeholder.com/300", alt: "Media 8" },
];

const MediaGallery: React.FC = () => {
  return (
    <div className={styles.gallery}>
      {mediaItems.map((item) => (
        <div key={item.id} className={styles.mediaItem}>
          <img src={item.src} alt={item.alt} className={styles.mediaImage} />
        </div>
      ))}
    </div>
  );
};

export default MediaGallery;
