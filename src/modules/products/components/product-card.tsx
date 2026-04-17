import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Currency } from "@/components/ui/currency";

import { PRODUCTS } from "@/data/products";
import { slugify } from "@/lib/utils";

interface Props {
  data: (typeof PRODUCTS)[number];
}

export const ProductCard = ({ data }: Props) => {
  if (!data) return null;

  const href = `/products/${slugify(data.name)}` as const;
  const imageAlt = `${data.name} \u2013 ${data.category} by Qordz`;

  return (
    <Card className="relative">
      <CardContent className="overflow-hidden">
        <div className="relative aspect-16/11 md:aspect-4/3">
          <Image alt={imageAlt} className="object-cover" fill src={data.images[0]} />
        </div>
        <CardHeader className="text-teal-600">
          <CardTitle>
            <Link
              aria-label={`${data.name} \u2013 Qordz UAE`}
              className="after:absolute after:inset-0 hover:underline focus-visible:underline"
              href={href}
            >
              {data.name}
            </Link>
          </CardTitle>
          <CardDescription className="flex items-center gap-2">
            <p className="flex items-center gap-1 font-semibold text-lg leading-none">
              <Currency className="font-light text-base" /> {data.price}
            </p>
            <Badge>Save 15%</Badge>
          </CardDescription>
        </CardHeader>
      </CardContent>
      <CardFooter className="gap-2">
        <Button asChild className="relative z-10 w-full flex-1">
          <Link aria-label={`Shop ${data.name}`} href={href}>
            Shop now
          </Link>
        </Button>
        <Button asChild className="relative z-10" variant="ghost">
          <Link aria-label={`Learn more about ${data.name}`} href={href}>
            Learn more
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
