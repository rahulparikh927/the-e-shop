import { getProductById } from "@/actions/product.actions";
import AddToCart from "@/components/AddToCart";
import Container from "@/components/Container";
import ProductImage from "@/components/ProductImage";
import { capitalizeFirstLetter } from "@/lib/utils";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function SingleProduct({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProductById({ id: params.id });

  if (!product.hasOwnProperty("id")) {
    throw notFound();
  }

  return (
    <Container>
      <div className="flex sm:flex-col md:flex-row">
        <div className="w-[50%] sm:w-[100%] h-[400px] py-4 rounded-lg shadow-sm content-center border">
          <ProductImage
            src={product.image}
            alt={`${product.title} Image`}
            width={400}
            height={400}
            style={{
              objectFit: "contain",
            }}
            className="h-64 w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="w-[50%] pl-6 sm:w-[100%] sm:mt-12 md:mt-0">
          <h3 className="text-2xl mb-4">{product.title}</h3>
          <p className="mb-4">{product.description}</p>
          <div className="mb-4">
            <span className="text-sm text-muted-foreground">Category: </span>
            <Link href={`/category/${product.category}`}>
              <span className="text-sm font-medium">
                {capitalizeFirstLetter(product.category)}
              </span>
            </Link>
          </div>
          <AddToCart product={product} />
        </div>
      </div>
    </Container>
  );
}
