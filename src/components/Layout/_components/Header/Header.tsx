import { useState } from "react";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

  return (
    <>
      {/* HEADER FIXO */}
      <header
        className="fixed top-0 left-0 w-full bg-white shadow-sm z-50"
        role="banner"
      >
        <MobileHeader />
        <DesktopHeader
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          dropdownPosition={dropdownPosition}
          setDropdownPosition={setDropdownPosition}
        />
      </header>

      {/* SPACER AUTOMÁTICO */}
      <div className="h-[80px] lg:h-[80px]"></div>
    </>
  );
}
