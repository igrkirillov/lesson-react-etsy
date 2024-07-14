import React from 'react';
import {Item} from "../../../dataApi";
import styles from "./listing-item.module.css"
import {formatLongText} from "../../../utils.ts"
import {formatPrice} from "../../../utils.ts"
import {getClassNameForStock} from "../../../utils.ts"

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
                <p className={styles["item-title"]}>{formatLongText(item.title)}</p>
                <p className={styles["item-price"]}>{formatPrice(item.currency_code, item.price)}</p>
                <p className={[styles["item-quantity"], styles[getClassNameForStock(item.quantity)]].join(" ")}>{item.quantity + " left"}</p>
            </div>
        </div>
    );
}
