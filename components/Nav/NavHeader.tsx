import React from "react";
import LeftMenu from "../LeftMenu/LeftMenu";
import Logo from "../Logo/Logo";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import { Container } from "@/ui";
// import Search from "../Search/Search";

function NavHeader() {
  return (
    <header className="top-0 sticky z-[1000] bg-white lg:relative">
      <Container className="flex justify-between items-center w-full py-2 lg:py-8  ">
        <LeftMenu />
        <Logo />
        <div className="flex items-center justify-center gap-6">
          {/* <Search /> */}
          <Link
            className="hidden lg:block uppercase font-bold"
            as={NextLink}
            _hover={{ color: "blue.600", textDecoration: "underline" }}
            href="/admin"
          >
            Login
          </Link>
        </div>
      </Container>
    </header>
  );
}

export default NavHeader;
