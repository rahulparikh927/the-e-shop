import { getCategories } from "@/actions/category.action";
import { capitalizeFirstLetter } from "@/lib/utils";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

export default async function CategoryMenu() {
  const categories = await getCategories();
  return (
    <>
      <nav className="hidden items-center gap-6 lg:flex">
        {categories.map((category) => (
          <Link key={category} href={"/category/" + category} className="mr-2">
            {capitalizeFirstLetter(category)}
          </Link>
        ))}
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="top" className="lg:hidden">
          <nav className="grid gap-4 py-6">
            {categories.map((category) => (
              <Link
                key={category}
                href={"/category/" + category}
                className="flex w-full items-center py-2 text-lg font-semibold"
                prefetch={false}
              >
                {capitalizeFirstLetter(category)}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
}
