import { Link } from "gatsby";
import React from "react";
import { moon, sun } from "../../assets/icons";
import { pagePaths } from "../../constants/pagePaths";
import { Container } from "../container";
import { Logo } from "../logo";
import { Navigation } from "../navigation";
import { Socials } from "../socials";

const links = [
  { name: "Home", link: pagePaths.home },
  { name: "Blog", link: pagePaths.blog },
  { name: "About", link: pagePaths.about },
  { name: "Work", link: pagePaths.work },
  { name: "Contact", link: pagePaths.contact },
];

export const Header = () => {
  return (
    <header className="py-10">
      <Container className="flex items-center justify-between">
        <Logo />

        <Navigation links={links} />

        <button className="text-black w-8">{moon}</button>
      </Container>
    </header>
  );
};

// export const Header = () => {
//   return (
//     <header className="py-4">
//       <Container>
//         <div className="flex items-center justify-between">
//           <Logo />
//           <Socials />
//         </div>
//       </Container>
//     </header>
//   );
// };
