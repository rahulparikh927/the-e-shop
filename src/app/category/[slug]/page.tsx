import { getProductsByCategory } from "@/actions/product.actions";
import Container from "@/components/Container";
import GridTitle from "@/components/GridTitle";
import Loader from "@/components/Loader";
import ProductCard from "@/components/Product";
import { capitalizeFirstLetter } from "@/lib/utils";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";

export default async function SingleCategory({
  params,
}: {
  params: { slug: string };
}) {
  const products = await getProductsByCategory({ category: params.slug });
  if (!products.length) {
    throw notFound();
  }
  return (
    <Container>
      <GridTitle title={capitalizeFirstLetter(products[0].category)} />
      <Suspense fallback={<Loader />}>
        <div className="grid grid-cols-4 gap-4">
          {products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </Suspense>
    </Container>
  );
}
