import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbShoppingBag } from "react-icons/tb";
import { useState } from "react";

const ROUTES = ["Home", "About", "Services", "Pricing", "Contact"];

export function Nav({ onClickShoppingBtn }) {
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);
  return (
    <nav className="relative z-10 flex flex-wrap items-center justify-between">
      {/*Logo*/}
      <a href="#">
        <NikeLogo className="h-20 w-20 dark:fill-white" />
      </a>
      {/*  Burger button*/}
      <button
        className="dark:text-gray-400 dark:hover:bg-gray-700 lg:hidden p-2 rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-gray-200"
        onClick={() => setIsMobileMenuShown(!isMobileMenuShown)}
      >
        <RxHamburgerMenu size={25} />
      </button>
      {/*  Menu List*/}
      <div
        className={`${
          !isMobileMenuShown && "hidden"
        } w-full lg:w-auto lg:block`}
      >
        <ul className="space-x-8 flex flex-col lg:flex-row rounded-lg border border-gray-100 lg:border-none bg-gray-50 lg:bg-transparent text-lg lg:dark:text-white">
          {ROUTES.map((route, index) => (
            <li
              className={`lg:hover:text-blue-500 lg:hover:bg-transparent px-3 py-2 cursor-pointer rounded ${
                index === 0
                  ? "bg-blue-500 text-white lg:bg-transparent lg:text-blue-500"
                  : "hover:bg-gray-100"
              } ${(index == 3 || index == 4) && " lg:text-white"}`}
              key={route}
            >
              {route}
            </li>
          ))}
        </ul>
      </div>
      {/*    Cart button */}
      <div
        className="btn-press-anim fixed left-4 bottom-4 lg:static lg:mr-8"
        onClick={onClickShoppingBtn}
      >
        <div className="flex-center h-12 w-12 rounded-full bg-white shadow-md">
          <TbShoppingBag />
        </div>
      </div>
    </nav>
  );
}
