import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { navLinks } from "@/constants/links"
import { NavLink } from "react-router"

export function HamBurger() {
  return (
    <Sheet>
      <SheetTrigger asChild className="lg:hidden">
        <Menu className="h-5 w-5 cursor-pointer text-muted-foreground transition-colors hover:text-primary" />
      </SheetTrigger>
      <SheetContent className="w-50 font-tagesschrift">
        <SheetHeader>
          <SheetTitle>Prajwol Karki</SheetTitle>
        </SheetHeader>
        {navLinks.map((item, index) => (
          <NavLink
            key={index}
            to={item.link}
            className={({ isActive }) =>
              `relative mx-4 pb-1 text-gray-600 dark:text-white 
              ${
                isActive
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500"
                  : "hover:text-fuchsia-600"
              }
              group`
            }
          >
            {item.title}
            <span className="absolute left-0 -bottom-0.5 h-[2px] w-1/4 scale-x-0 transform bg-gradient-to-r from-pink-500 to-purple-500 transition-transform duration-300 group-hover:scale-x-100" />
          </NavLink>
        ))}
      </SheetContent>
    </Sheet>
  )
}
