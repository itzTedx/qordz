import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Currency } from "@/components/ui/currency";

import { PRODUCTS } from "@/data/products";

interface Props {
  data: (typeof PRODUCTS)[number];
}

export const ProductCard = ({ data }: Props) => {
  if (!data) return null;

  return (
    <Card>
      <CardContent>
        <div className="relative aspect-16/11 md:aspect-4/3">
          <Image alt={data.name ?? "Product Image"} className="object-cover" fill src={data.images[0]} />
        </div>
        <CardHeader className="text-teal-600">
          <CardTitle>{data.name}</CardTitle>
          <CardDescription className="flex items-center gap-2">
            <p className="flex items-center gap-1 font-semibold text-lg leading-none">
              <Currency className="font-light text-base" /> {data.price}
            </p>
            <Badge>Save 15%</Badge>
          </CardDescription>
        </CardHeader>
      </CardContent>
      <CardFooter className="gap-2">
        <Button className="w-full flex-1">Shop now</Button>
        <Button variant="ghost">Learn more</Button>
      </CardFooter>
    </Card>
  );
};
