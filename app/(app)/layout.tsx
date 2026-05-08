import PhoneFrame from "@/app/components/PhoneFrame";
import { ReactNode } from "react";

/**
 * All user-facing app routes live under (app)/.
 * They are rendered inside the phone frame mockup.
 * Admin pages are NOT in this group and keep their full-width layout.
 */
export default function AppGroupLayout({ children }: { children: ReactNode }) {
  return <PhoneFrame>{children}</PhoneFrame>;
}
