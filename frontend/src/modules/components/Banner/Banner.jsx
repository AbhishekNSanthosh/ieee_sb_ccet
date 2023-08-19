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
        }, 5000); // Change image every 2 seconds

        return () => {
            clearInterval(interval);
        };
    }, [currentImageIndex]);
    return (
        <div className={styles.bannerContainer} style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
        }}>
            {/* <img src={BannerImg} alt="CCET_logo" className={styles.bannerImg} />
            <div className={styles.absoluteTxt}>
                <h4 className={styles.txtTop}>
                    IEEE STUDENT BRANCH
                </h4>
                <h2 className={styles.clgTxt}>
                    Carmel college of engineering and technology
                </h2>
            </div> */}
            <div className={styles.left}>
                <img src={IEEEBLUE} alt="" className={styles.ieeeLogo} />
                <h4 className={styles.txtTop}>
                    IEEE STUDENT BRANCH
                </h4>
                {/* <img src={CARMEL} alt="" className={styles.carmelLogo} /> */}
                <div className={styles.clgNameBox}>
                    <h3 className={styles.clgTxt}>
                        Carmel College of engineering and technology
                    </h3>
                    {/* <h2 className={styles.clgTxt}>
                        college of
                    </h2>
                    <h2 className={styles.clgTxt}>
                        engineering
                    </h2>
                    <h2 className={styles.clgTxt}>
                        and
                    </h2>
                    <h2 className={styles.clgTxt}>
                        technology
                    </h2> */}
                </div>

            </div>
            {/* <div className={styles.right}> */}
                {/* <></> */}
            {/* </div> */}
        </div>
    )
}

export default Banner