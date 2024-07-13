import React from 'react';
import {Item} from "../../dataApi";
import styles from "./listing.module.css"
import {ListingItem} from "./ListingItem";

export type ListingProps = {
    items: Item[]
}

export function Listing(props: ListingProps) {
    const {items} = props;
    return (
        <div className={styles["item-list"]}>
            {items.map(item => <ListingItem key={item.listing_id + " " + item.title} item={item}></ListingItem>)}
        </div>
    );
}
