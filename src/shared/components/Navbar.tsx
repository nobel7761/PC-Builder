import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon, CheckIcon } from "lucide-react";
import Link from "next/link";
import React, { useState, Fragment } from "react";
import { RiComputerFill } from "react-icons/ri";
import { useSession, signOut } from "next-auth/react";
import { Button } from "./shadcn/button";

const options = [
  {
    label: "CPU",
    path: "/cpu",
  },
  {
    label: "Motherboard",
    path: "/motherboard",
  },
  {
    label: "RAM",
    path: "/ram",
  },
  {
    label: "Power Supply Unit",
    path: "/power-supply-unit",
  },
  {
    label: "Storage Device",
    path: "/storage-device",
  },
  {
    label: "Monitor",
    path: "/monitor",
  },
  {
    label: "Others",
    path: "/others",
  },
];

const Navbar = () => {
  const [selected, setSelected] = useState<{ label: string; path: string }>({
    label: "",
    path: "",
  });

  const { data: session } = useSession();

  return (
    <div className="md:px-6 px-2 py-2 md:flex justify-between items-center bg-[#0F172A]">
      <Link href="/" className="flex md:gap-x-4 gap-x-2 text-white">
        <RiComputerFill className="md:text-6xl text-3xl" />
        <p className="md:text-4xl text-xl uppercase font-bold">PC Builder</p>
      </Link>

      <div className="md:flex items-center md:gap-x-2">
        <div className="md:mt-0 mt-2">
          <Listbox value={selected} onChange={setSelected}>
            <div className="relative">
              <Listbox.Button className="relative w-full cursor-default rounded-lg bg-transparent border border-gray-300 text-gray-400 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate">
                  {selected.label ? selected.label : "Select Category"}
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute mt-1 w-fit overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {options.map((option, index) => (
                    <Link key={index} href={option.path}>
                      <Listbox.Option
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-8 pr-4 ${
                            active ? "bg-[#0F172A] text-white" : "text-gray-900"
                          }`
                        }
                        value={option}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {option.label}
                            </span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-1 text-[#0F172A]">
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    </Link>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>

        <Link href="/build-pc">
          <Button className="w-full md:w-[150px] md:px-4 md:mt-0 mt-2 md:py-2 px-3 py-1.5 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            PC Builder
          </Button>
        </Link>
        {session?.user?.email && (
          <Button
            variant="destructive"
            onClick={() => signOut({ callbackUrl: "http://localhost:3000" })}
          >
            Logout
          </Button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
