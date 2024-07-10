import { getProducts } from "@/actions/product.actions";
import Container from "@/components/Container";
import GridTitle from "@/components/GridTitle";
import ProductCard from "@/components/Product";
import { Loader } from "lucide-react";
import { Suspense } from "react";

export default async function Home() {
  const products = await getProducts();

  return (
    <Container>
      <GridTitle title="Best Sellers" />
      <Suspense fallback={<Loader className="m-auto" />}>
        <div className="grid grid-cols-4 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </Suspense>
    </Container>
  );
}
