import React, { useEffect, useState } from 'react'
import styles from './Banner.module.css'
import BannerImg from '../../../assets/carmel.svg'
import BannerImg2 from '../../../assets/carmel2.svg'
import IEEEBLUE from '../../../assets/IEEE_White.png'
import CARMEL from '../../../assets/LOGO_CARMEL.svg'

const Banner = () => {
    const images = [
        BannerImg,
        BannerImg2
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // Increment the index to switch to the next image
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, [currentImageIndex]);
    return (
        <div className={styles.bannerContainer} style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
        }}>
            <div className={styles.left}>
                <img src={IEEEBLUE} alt="" className={styles.ieeeLogo} />
                <h4 className={styles.txtTop}>
                    IEEE STUDENT BRANCH
                </h4>
                <div className={styles.clgNameBox}>
                    <h3 className={styles.clgTxt}>
                        Carmel College of engineering and technology
                    </h3>
                </div>

            </div>
        </div>
    )
}

export default Banner