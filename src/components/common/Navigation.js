import { Link, useLocation } from "react-router-dom";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Vehicle list", href: "/" },
  { name: "Manufactor list", href: "/manufactor-list" },
  { name: "Create new manufactor", href: "/new-manufactor" },
  { name: "Create new vehicle", href: "/new-vehicle" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  const location = useLocation();

  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                alt="Your Company"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAjVBMVEUeJjMTITMaJDMAGjRrVy8WIjMAGTT/yB3apSQAEjTjqyNjUi9gUC//xR7/xh4ADTRbTDDUoSTPnSUIHTRUSDB0XS4AFjQAEDRQRTB6YS0ABDTGlyZKQTH/wR7/yR2BZi0ACDSFaS0AADVEPTHmrSL5uyC/kieMbizvtCGaeCu0iiiuhimngSkmKzI0MzKl154/AAABGUlEQVR4Ab3NV2LCAAwDUGU6CZgVyI7JnoX7H6/szWer32dL+PMoKgCoyifTdOOgqqFr72bqZNmqajs0MV9NmzLPrPncmjFPtRdbMOlLWq1oqRMvntRdM208f8m89L0N8dp9sIAp9BDFzHEELyQO3JslqWxtZLFYlsQZ7K2kyUWNJOXchheT43kOxR7snNPEOKFnzawCykR4bWprlqmCwplZ3gnV43kBc0tpWaa0NRGtyDFVXLQ6TeVS15Ifx6nyLnZQrZImgt0StTaiRir3ZoDhdtJk8PveR9ZI5xrAgyqdDBlcF9kgnfFkB1U7GTOcTH2xg6KTn3k2So03A5RdLX0v9U4BPirzFzvovk73X+ygSfLVAMPAP+QXxWMWWEpBCjsAAAAASUVORK5CYII="
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => {
                  const isCurrent = location.pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      aria-current={isCurrent ? "page" : undefined}
                      className={classNames(
                        isCurrent
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div></div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              ></MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => {
            const isCurrent = location.pathname === item.href;
            return (
              <DisclosureButton
                key={item.name}
                as={Link}
                to={item.href}
                aria-current={isCurrent ? "page" : undefined}
                className={classNames(
                  isCurrent
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
              >
                {item.name}
              </DisclosureButton>
            );
          })}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
