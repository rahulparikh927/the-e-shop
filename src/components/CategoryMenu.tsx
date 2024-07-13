import { getCategories } from "@/actions/category.action";
import { capitalizeFirstLetter } from "@/lib/utils";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import NavItem from "./NavItem";
import { TooltipProvider } from "./ui/tooltip";
import Container from "./Container";

export default async function CategoryMenu() {
  const categories = await getCategories();
  return (
    <>
      <nav className="hidden items-center gap-6 lg:flex">
        <TooltipProvider>
          {categories.map((category) => (
            <NavItem
              href={"/category/" + category}
              key={category}
              label={capitalizeFirstLetter(category)}
            >
              {capitalizeFirstLetter(category)}
            </NavItem>
          ))}
        </TooltipProvider>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="top" className="lg:hidden pt-12">
          <Container>
            <nav className="grid gap-4 py-6">
              <TooltipProvider>
                {categories.map((category) => (
                  <NavItem
                    href={"/category/" + category}
                    key={category}
                    label={capitalizeFirstLetter(category)}
                  >
                    {capitalizeFirstLetter(category)}
                  </NavItem>
                ))}
              </TooltipProvider>
            </nav>
          </Container>
        </SheetContent>
      </Sheet>
    </>
  );
}
