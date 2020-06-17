import React from "react";
import {ShopCarousel} from "../../pages/shop/shop-carousel";

export function BestSellers() {
    return <section className="p-5 d-md-flex flex-column align-items-center justify-content-center commercial">
        <h2 className="text-center pt-3 pb-5">Best sellers</h2>
        <ShopCarousel max="100"/>
    </section>
}
