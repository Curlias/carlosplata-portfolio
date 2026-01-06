"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { LucideIcon, Languages } from "lucide-react"
import { cn } from "@/lib/utils"
import { locales, type Locale } from "@/lib/i18n/config"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
  locale: Locale
}

export function NavBar({ items, className, locale }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)
  const [showLangMenu, setShowLangMenu] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const changeLanguage = (newLocale: Locale) => {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`
    window.location.reload()
  }

  const languages = {
    en: { name: 'EN', flag: '🇺🇸' },
    es: { name: 'ES', flag: '🇲🇽' },
  }

  return (
    <div
      className={cn(
        "fixed bottom-6 sm:bottom-auto sm:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] sm:w-auto",
        className,
      )}
    >
      <div className="flex items-center justify-center gap-1 sm:gap-3 bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-3 sm:px-6 py-2 rounded-full transition-colors",
                "text-foreground/80 hover:text-primary",
                isActive && "bg-muted text-primary",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full hidden sm:block">
                    <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}

        {/* Language Switcher Integrated */}
        <div className="relative">
          <button
            onClick={() => setShowLangMenu(!showLangMenu)}
            className={cn(
              "relative cursor-pointer text-sm font-semibold px-3 sm:px-6 py-2 rounded-full transition-colors",
              "text-foreground/80 hover:text-primary flex items-center gap-1 sm:gap-2",
            )}
          >
            <span className="text-base sm:text-lg">{languages[locale].flag}</span>
            <span className="hidden sm:inline">
              <Languages size={18} strokeWidth={2.5} />
            </span>
            <span className="hidden lg:inline text-xs">{languages[locale].name}</span>
          </button>

          {showLangMenu && (
            <>
              {/* Backdrop to close menu */}
              <div 
                className="fixed inset-0 z-40" 
                onClick={() => setShowLangMenu(false)}
              />
              <motion.div
                initial={{ opacity: 0, y: isMobile ? 10 : -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={cn(
                  "absolute right-0 bg-background/95 backdrop-blur-lg border border-border rounded-lg shadow-lg overflow-hidden min-w-[120px] z-50",
                  isMobile ? "bottom-full mb-2" : "top-full mt-2"
                )}
              >
                {locales.map((loc) => (
                  <button
                    key={loc}
                    onClick={() => {
                      changeLanguage(loc)
                      setShowLangMenu(false)
                    }}
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-muted transition-colors",
                      loc === locale && "bg-muted text-primary font-semibold"
                    )}
                  >
                    <span className="text-lg">{languages[loc].flag}</span>
                    <span>{languages[loc].name}</span>
                    {loc === locale && (
                      <svg className="w-4 h-4 ml-auto text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                ))}
              </motion.div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
