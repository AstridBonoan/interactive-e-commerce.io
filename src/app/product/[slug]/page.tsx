import { products } from "@/data/catalog";
import { ProductDetails } from "@/components/store/ProductDetails";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({ params }: PageProps<"/product/[slug]">) {
  const { slug } = await params;
  return <ProductDetails slug={slug} />;
}
