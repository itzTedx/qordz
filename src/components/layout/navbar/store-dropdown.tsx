import { CreditCard, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { IconChevronDownFill } from "@/assets/icons";

export const StoreDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button aria-label="Browse store" className="rounded-full bg-card shadow-sm" size="sm" variant="ghost">
          Store <IconChevronDownFill aria-hidden="true" className="text-stone-300" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48" sideOffset={8}>
        <DropdownMenuLabel>Online Store</DropdownMenuLabel>

        <DropdownMenuGroup className="rounded-md bg-card">
          <DropdownMenuItem>
            <User aria-hidden="true" />
            <span>Noon</span>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <CreditCard aria-hidden="true" />
            <span>Amazon</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuLabel>Retailers</DropdownMenuLabel>

        <DropdownMenuGroup className="rounded-md bg-card">
          <DropdownMenuItem>
            <User aria-hidden="true" />
            <span>Dubai</span>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <CreditCard aria-hidden="true" />
            <span>Abu Dhabi</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard aria-hidden="true" />
            <span>Sharjah</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
