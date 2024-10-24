import React from "react";
import ProductCard from "../product-card";

type ProductsListProps = {
  products_list: {
    id: number;
    name: string;
    description: string;
    link: string;
    cover_image: {
      id: string;
      url: string;
      alt: string;
    };
  }[];
};

export default function ProductsList({ products_list }: ProductsListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 items-start">
      {products_list.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
}
