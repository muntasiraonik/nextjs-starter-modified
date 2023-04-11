import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const canonicalUrl = process.env.NEXT_PUBLIC_Website_URL + `${router.asPath}`;

  return (
    <>
      <NextSeo
        title="Nextjs Starter Modified"
        description="Your_Website_Description"
        canonical={canonicalUrl}
        openGraph={{
          url: { canonicalUrl },
          title: "Nextjs Starter Modified",
          description: "Your_Page_Description",
        }}
      />
      Home Components
    </>
  );
}
