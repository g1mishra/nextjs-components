"use client";

import clsx from "clsx";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

import styles from "./link.module.css";

export default function Link({ children, href, className = "" }) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <NextLink className={clsx(styles.link, className)} href={href}>
      <span
        className={clsx(
          styles.navItem,
          { [styles.activeNavItem]: active },
          styles.text_wrapper,
        )}
      >
        {children}
      </span>
    </NextLink>
  );
}
