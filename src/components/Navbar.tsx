import Cart from "./Cart";
import Container from "./Container";
import SearchCommand from "./SearchCommand";
import Link from "next/link";
import SearchCategorySuggestion from "./SearchCategorySuggestion";
import SearchProductSuggestion from "./SearchProductSuggestion";
import { Suspense } from "react";
import Loader from "./Loader";

const Navbar = () => {
  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <Container className="flex flex-row justify-between">
        <div className="w-[20%] sm:w-[50%] h-auto flex items-center">
          <Link href={"/"}>
            <div>The E-Commerce Shop</div>
          </Link>
        </div>
        <div className="w-[30%] sm:w-[50%] flex justify-end items-center pr-4">
          <Suspense key={1} fallback={<Loader />}>
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
    </nav>
  );
};

export default Navbar;
