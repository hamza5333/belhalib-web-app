import Link from "next/link";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { DarkThemeToggle, Flowbite } from "flowbite-react";
import {
    Footer,
    FooterBrand,
    FooterCopyright,
    FooterDivider,
    FooterIcon,
    FooterLink,
    FooterLinkGroup,
    FooterTitle,
  } from "flowbite-react";
  import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter,BsTiktok } from "react-icons/bs";
  
 
  
export function DefaultHeader(){
    return(
        <Navbar  >
        <NavbarBrand as={Link} href="https://belhallib.com">
          <span className="self-center whitespace-nowrap text-xl font-semibold text-gray-900 dark:text-white">Belhalib</span>
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink href="/" >Home</NavbarLink>
          <NavbarLink href="/menu" >Menu</NavbarLink>
          <NavbarLink as={Link} href="#" >About</NavbarLink>
          <NavbarLink href="/contact" >Contact</NavbarLink> 
        </NavbarCollapse>
        <DarkThemeToggle/>
      </Navbar>
    )
}



export function DefaultFooter(){
    return(
        <Footer container className="rounded-none">
        <div className="w-full">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div>
              <FooterBrand
                href="https://belhallib.com"
                src="https://flowbite.com/docs/images/logo.svg"
                alt="Belhalib Logo"
                name="Belhalib"
              />
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <FooterTitle title="about" />
              </div>
              <div>
                <FooterTitle title="Follow us" />
                <FooterLinkGroup col>
                  <FooterLink href="#">Github</FooterLink>
                  <FooterLink href="#">Discord</FooterLink>
                </FooterLinkGroup>
              </div>
            </div>
          </div>
          <FooterDivider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
              <FooterCopyright href="#" by="Belhalib™" year={2024} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <FooterIcon href="#" icon={BsFacebook} />
              <FooterIcon href="#" icon={BsInstagram} />
              <FooterIcon href="#" icon={BsTiktok} />
            </div>
          </div>
        </div>
      </Footer>
    )
}