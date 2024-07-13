import Cart from "./Cart";
import Container from "./Container";
import SearchCommand from "./SearchCommand";
import Link from "next/link";
import SearchCategorySuggestion from "./SearchCategorySuggestion";
import SearchProductSuggestion from "./SearchProductSuggestion";
import { Suspense } from "react";
import CategoryMenu from "./CategoryMenu";

const Header = () => {
  return (
    <header className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <Container className="flex flex-row md:justify-between">
        <div className="sm:w-[30%] md:w-[30%] h-auto flex items-center sm:order-2 lg:order-1">
          <Link href={"/"}>
            <div>The E-Commerce Shop</div>
          </Link>
        </div>
        <div className="sm:w-[10%] lg:w-[40%] sm:order-1 lg:order-2 content-center">
          <CategoryMenu />
        </div>
        <div className="sm:w-[60%] lg:w-[50%] flex justify-end items-center pr-4 sm:order-3">
          <Suspense key={1} fallback={"Loading..."}>
            <SearchCommand>
              <Suspense key={2} fallback={<h3>Loading category</h3>}>
                <SearchCategorySuggestion />
              </Suspense>
              <Suspense key={3} fallback={<h3>Loading product</h3>}>
                <SearchProductSuggestion />
              </Suspense>
            </SearchCommand>
          </Suspense>
          <Cart />
        </div>
      </Container>
    </header>
  );
};

export default Header;
