import ProductSectionHeader from "./product-section-header";
import ProductsList from "./products-list";

type ProductsSectionProps = {
  id: string;
  tag: string;
  section_title: string;
  section_description: string;
  cta: {
    id: string;
    text: string;
    link: string;
  }[];
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

export default function ProductsSection(props: ProductsSectionProps) {
  const { tag, section_title, section_description, cta, products_list } = props;

  return (
    <section className="section-container py-24">
      <ProductSectionHeader
        cta={cta}
        section_description={section_description}
        section_title={section_title}
        tag={tag}
      />
      <div className="mt-20">
        <ProductsList products_list={products_list} />
      </div>
    </section>
  );
}
