import React from 'react';

const Extrasection = () => {
    return (

        <div>

            <h1 className='text-5xl text-center font-bold my-20 text-white'>Our Best Laptop</h1>
            <div className='container mx-auto my-20 grid lg:grid-cols-2 gap-10'>

                <div className="card lg:card-side bg-base-100 shadow-xl my-5 p-5 ">
                    <figure><img className='w-96' src="https://www.startech.com.bd/image/cache/catalog/laptop/hp-laptop/15s-du1116tu/15s-du1116tu-05-500x500.jpg" alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-4xl">HP 15s-du1116TU Pentium Silver N5030 15.6" HD Laptop</h2>
                        <p>Price: $1200</p>
                        <div className="card-actions justify-end">

                        </div>
                    </div>
                </div>

                <div className="card lg:card-side bg-base-100 shadow-xl my-5 p-5">
                    <figure><img className='w-96' src="https://www.startech.com.bd/image/cache/catalog/laptop/hp-laptop/15s-fq2644tu/15s-fq2644tu-03-500x500.jpg" alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-4xl">HP 15s-du3560TU Core i3 11th Gen 15.6" FHD Laptop</h2>
                        <p>Price: $1000</p>
                        <div className="card-actions justify-end">

                        </div>
                    </div>
                </div>

                <div className="card lg:card-side bg-base-100 shadow-xl my-5 p-5">
                    <figure><img className='w-96' src="https://www.startech.com.bd/image/cache/catalog/laptop/asus/vivobook-x515ma/vivobook-x515ma-01-500x500.jpg" alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-4xl">Asus Vivobook X515MA Celeron N4020 15.6" HD Laptop
                        </h2>
                        <p>Price: $1800</p>
                        <div className="card-actions justify-end">

                        </div>
                    </div>
                </div>

                <div className="card lg:card-side bg-base-100 shadow-xl my-5 p-5">
                    <figure><img className='w-96' src="https://www.netstar.com.bd/wp-content/uploads/2022/03/ASUS-VIVOBOOK-X515MA-N4020-ITL-CELERON-PROCESSOR-SILVER-4.jpg" alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-4xl">ASUS X515MA 15.6-Inch Full HD Display Celeron N4020 4GB Ram 1TB HDD Laptop
                        </h2>
                        <p>Price: $1500</p>
                        <div className="card-actions justify-end">

                        </div>
                    </div>
                </div>



            </div>

        </div>

    );
};

export default Extrasection;