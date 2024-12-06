import { ProductsSection } from "@/components";
import { mockCompanyProductsList } from "@/mock-data/homepage-mock";

export default function GrupoLessaPage() {
  return (
    <div className="bg-green">
      <ProductsSection {...mockCompanyProductsList} />
    </div>
  );
}
