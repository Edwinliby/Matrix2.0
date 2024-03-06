'use client';

import React, { useState } from 'react';
import Navbar from "../components/navbar/nav"
import './gallery.css'

export default function Gallery() {

    const [lightboxImage, setLightboxImage] = useState(null);

    const openLightbox = (imageSrc) => {
        setLightboxImage(imageSrc);
    };

    const closeLightbox = () => {
        setLightboxImage(null);
    };

    return (
        <div className="galleryContainer">
            <Navbar />

            <div class="header">
                <h1>
                    Glimpes of the pervious <span>Matrix</span>
                </h1>
            </div>

            <div class="row">
                <div class="column">
                    {[
                        '/images/1.webp',
                        '/images/2.webp',
                        '/images/3.webp',
                        '/images/4.webp',
                        '/images/5.webp',
                        '/images/6.webp',
                        '/images/7.webp',
                    ].map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            onClick={() => openLightbox(image)}
                            alt={`Image ${index + 1}`}
                        />
                    ))}
                </div>

                <div class="column">
                    {[
                        '/images/8.webp',
                        '/images/9.webp',
                        '/images/10.webp',
                        '/images/11.webp',
                        '/images/12.webp',
                        '/images/1.webp',
                        '/images/2.webp',
                    ].map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            onClick={() => openLightbox(image)}
                            alt={`Image ${index + 1}`}
                        />
                    ))}
                </div>
                <div class="column">
                    {[
                        '/images/12.webp',
                        '/images/10.webp',
                        '/images/7.webp',
                        '/images/5.webp',
                        '/images/9.webp',
                        '/images/11.webp',
                        '/images/2.webp',
                    ].map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            onClick={() => openLightbox(image)}
                            alt={`Image ${index + 1}`}
                        />
                    ))}
                </div>
                <div class="column">
                    {[
                        '/images/7.webp',
                        '/images/11.webp',
                        '/images/9.webp',
                        '/images/8.webp',
                        '/images/10.webp',
                        '/images/3.webp',
                        '/images/1.webp',
                    ].map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            onClick={() => openLightbox(image)}
                            alt={`Image ${index + 1}`}
                        />
                    ))}
                </div>

            </div>

            {lightboxImage && (
                <div className="lightbox" onClick={closeLightbox}>
                    <img src={lightboxImage} alt="Lightbox Image" />
                </div>
            )}

        </div>
    )
}
