"use client";

import PlansCarousel from "./PlansCarousel";
import ProductHeader from "./ProductHeader";

type ProductPlansProps = {
  products: {
    id: number;
    name: string;
    description: string;
    link: string;
    page_product: {
      tag: string;
      title: string;
      description: string;
    };
    plans: {
      id: string;
      name: string;
      is_highlighted: boolean;
      price: number;
      whatsapp_text: string;
      features: {
        id: string;
        name: string;
        icon: {
          url: string;
        };
      }[];
    }[];
    whatsapp_text: string;
  }[];
};

export default function ProductPlans(props: ProductPlansProps) {
  const { products } = props;

  return (
    <section className="py-24">
      <div className="section-container">
        {products.map((product) => {
          const { page_product, plans } = product;
          const sectionId = product.link.split("#")[1];

          return (
            <div key={product.id} id={sectionId} className="pb-24">
              <ProductHeader page_product={page_product} />
              <PlansCarousel plans={plans} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
