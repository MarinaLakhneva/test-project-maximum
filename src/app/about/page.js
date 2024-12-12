"use client";
import Image from "next/image";
import Carousel from "../../app/components/Carousel/carousel";
import {useModelStore} from "../../app/store/store";
import styles from "./page.module.scss";
import Warranty from "../../../public/assets/warranty.svg";
import Advertisemet from "../../../public/assets/advertisemet.png";
import icon1 from "../../../public/assets/specifications/icon1.png";
import icon2 from "../../../public/assets/specifications/icon2.png";
import icon3 from "../../../public/assets/specifications/icon3.png";

function formatPrice(price) {
    return (price || 0).toLocaleString('ru-RU', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
}


export default function About() {
    const initialData = useModelStore(state => state.modelData);
    const data = JSON.parse(initialData);
    const imgs = data?.photos?.imgs?.map(img => img.url) || [];
    const price = data?.price;

    return (
        <>
            <main className={styles.main}>
                <div className={styles.model}>
                    <p className={styles.brand}>{data?.brandName} {data?.modelName}</p>
                    <p className={styles.vin}>vin 123456789123</p>
                </div>
                <div className={styles.container}>
                    <div className={styles.information}>
                        <div className={`${styles.general} ${styles.price}`}>{`${formatPrice(price)} ₽`}</div>
                        <div className={styles.general}>
                            <Image className={styles.done} src={Warranty} alt="warranty"/>
                            <p className={styles.warranty}>Гарантия юр. чистоты</p>
                        </div>
                        <p className={styles.additional}>Характеристики</p>
                        <div className={styles.specifications}>
                            <div className={styles.specification}>
                                <Image className={styles.icon} src={icon1} alt="icon"/>
                                <p className={styles.text}>{data?.modelYear} год выпуска</p>
                            </div>
                            <div className={styles.specification}>
                                <Image className={styles.icon} src={icon2} alt="icon"/>
                                <p className={styles.text}>{data?.EngineSize} л. / {data?.Power} л. с.
                                    / {data?.Transmission}</p>
                            </div>
                            <div className={styles.specification}>
                                <Image className={styles.icon} src={icon3} alt="icon"/>
                                <p className={styles.text}>КП - Вариатор</p>
                            </div>
                        </div>
                    </div>
                    <Carousel images={imgs}/>
                </div>
            </main>
            <footer className={styles.footer}>
                <div className={styles.content}>
                    <p className={styles.title}>Кредит на новый Chery Tiggo</p>
                    <p className={styles.description}>Оформите кредит на любой автомобиль ассортимента дилерского
                        центра «Максимум»</p>
                    <button className={styles.next}>Оформить</button>
                </div>
                <div>
                    <Image className={styles.car} src={Advertisemet} alt="car"/>
                </div>
            </footer>
        </>
    )
}
