'use client'

import {Link, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";
import {Navbar as NextNavbar, NavbarMenu, NavbarMenuItem, NavbarMenuToggle} from "@nextui-org/navbar";
import React from "react";
import {useRouter} from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const router = useRouter();

  return (
    <NextNavbar onMenuOpenChange={setIsMenuOpen} isBordered>
      {/*Left Content*/}
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link className="font-bold text-inherit" href={"/"}>Places Kim Should Try</Link>
        </NavbarBrand>
      </NavbarContent>

      {/*Middle Content*/}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link href="/places" aria-current="page">
            Places
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/about">
            About
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/*Right Content*/}
      <NavbarContent justify="end">
        <NavbarItem>
          <Link>Login</Link>
        </NavbarItem>
      </NavbarContent>

      {/*Hamburger Menu Contents*/}
      <NavbarMenu>
        <NavbarMenuItem>
          <Link color="primary" className="w-full" href="/places" size="lg">Places</Link>
          <Link color="foreground" className="w-full" href="/about" size="lg">About</Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </NextNavbar>
  )
}