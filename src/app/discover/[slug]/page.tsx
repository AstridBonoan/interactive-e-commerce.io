import { easterEggs } from "@/data/catalog";
import { EggDetails } from "@/components/store/EggDetails";

export function generateStaticParams() {
  return easterEggs.map((egg) => ({ slug: egg.slug }));
}

export default async function EggPage({ params }: PageProps<"/discover/[slug]">) {
  const { slug } = await params;
  return <EggDetails slug={slug} />;
}
