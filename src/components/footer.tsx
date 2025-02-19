import React from "react";
import { DiscordLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-base-300 shadow-xl p-5 flex flex-col items-center space-y-5">
      <Image src="/icon.png" alt="logo" width="100" height="100" />
      <div className="flex space-x-5 items-center">
       
      </div>
      <p className="text-sm text-gray-300">
        Hobaz Anime does not store any files on the server, we only link to the
        media which is hosted on 3rd party services.
      </p>
      <p className="text-sm text-gray-300">&copy; Hobaz Anime</p>
    </footer>
  );
};

export default Footer;
