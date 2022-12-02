import React from 'react';
// import './Banner.css'
import './BannerItem.css'
const BannerItem = ({ slide }) => {
    const { image, next, prev, id } = slide
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-image'>
                <img src={image} alt='' className="w-[100vw] h-full" />
            </div>


            <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 top-1/4">
                <h1 className='text-5xl font-bold text-white'>Laptop Resale</h1>
            </div>

            <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 top-2/4">
                <p className='font-bold text-white'>We are proud of our emphasis on high quality, tested and working products. Our business thrives on the basis of these principles of integrity, as we want our customers to be pleased with our products.</p>
            </div>

            <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;