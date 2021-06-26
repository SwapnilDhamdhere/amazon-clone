import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/Zeitgeist/Mar20/Covid19/2021/IN_GWD_Covid19_CustomerMsg_MH_ENG_1x_v1._CB669806110_.jpg" alt="slider"/>

                <div className="home__row">
                    <Product
                        id="12321341"
                        title="Testing"
                        price={30}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                        rating={5} 
                    />
                    <Product
                        id="49538094"
                        title="testing 2"
                        price={120}
                        image="https://images-eu.ssl-images-amazon.com/images/I/71pypU7iWuL._AC_UL115_.jpg"
                        rating={4}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="49538976"
                        title="testing 3"
                        price={170}
                        image="https://images-eu.ssl-images-amazon.com/images/I/41vkWkERzhL._AC_SX184_.jpg"
                        rating={5}
                    />
                    <Product
                        id="56438976"
                        title="testing 4"
                        price={2170}
                        image="https://images-eu.ssl-images-amazon.com/images/I/51lUOfAUQ5L._AC_SX184_.jpg"
                        rating={2}
                    />
                    <Product
                        id="49068476"
                        title="testing 5"
                        price={200}
                        image="https://images-eu.ssl-images-amazon.com/images/I/31R57GvM9PL._AC_SX184_.jpg"
                        rating={3}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="12345476"
                        title="testing 6"
                        price={3999}
                        image="https://m.media-amazon.com/images/I/319Qcp4jrNL.jpg"
                        rating={4}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home