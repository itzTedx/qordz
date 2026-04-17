import Script from "next/script";

interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
  id?: string;
}

export function JsonLd({ data, id }: JsonLdProps) {
  return (
    <Script id={id} type="application/ld+json">
      {JSON.stringify(data).replace(/</g, "\\u003c")}
    </Script>
  );
}
