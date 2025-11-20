import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Currency } from "@/components/ui/currency";

export const ProductCard = () => {
  return (
    <Card>
      <CardContent>
        <div className="relative aspect-4/3">
          <Image alt="Product 1" className="object-cover" fill src="/images/products/qordz-prime-powerbank.webp" />
        </div>
        <CardHeader className="text-teal-600">
          <CardTitle>Qordz Prime Power Bank (26k, 300W)</CardTitle>
          <CardDescription className="flex items-center gap-2">
            <p className="flex items-center gap-1 font-semibold text-lg leading-none">
              <Currency className="font-light text-base" /> 120.00
            </p>
            <Badge>Save 15%</Badge>
          </CardDescription>
        </CardHeader>
      </CardContent>
      <CardFooter className="gap-2">
        <Button className="w-full flex-1" size="sm">
          Shop now
        </Button>
        <Button size="sm" variant="ghost">
          Learn more
        </Button>
      </CardFooter>
    </Card>
  );
};
