import React from 'react';
import {Item} from "../../../dataApi";
import styles from "./listing-item.module.css"

export type ListingItemProps = {
    item: Item
}

export function ListingItem(props: ListingItemProps) {
    const {item} = props;
    return (
        <div className={styles.item}>
            <div className={styles["item-image"]}>
                <a href={item.url}>
                    <img src={item.MainImage ? item.MainImage.url_570xN : ""} alt={item.title}/>
                </a>
            </div>
            <div className={styles["item-details"]}>
                <p className={styles["item-title"]}>{item.title}</p>
                <p className={styles["item-price"]}>{item.currency_code + "" +  item.price}</p>
                <p className={[styles["item-quantity"], styles["level-medium"]].join(" ")}>{item.quantity + " left"}</p>
            </div>
        </div>
    );
}
