export function GeoHeroShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      <div className="geo-block geo-fill w-24 h-24 top-[12%] right-[8%] md:right-[12%]" />
      <div className="geo-block geo-fill-warm w-16 h-16 top-[28%] right-[22%] hidden md:block" />
      <div className="geo-block geo-solid-warm w-8 h-8 top-[18%] right-[28%] hidden lg:block" />
      <div className="geo-block geo-outline w-32 h-32 bottom-[20%] right-[6%] hidden md:block" />
      <div className="geo-block geo-fill-accent w-12 h-12 bottom-[35%] right-[18%] hidden lg:block" />
      <div className="geo-block geo-solid w-6 h-20 top-[45%] left-[4%] hidden xl:block" />
      <div className="geo-block geo-fill w-10 h-10 bottom-[15%] left-[8%] hidden lg:block" />
    </div>
  )
}

export function GeoSectionAccent({ className = '' }: { className?: string }) {
  return (
    <div className={`flex gap-2 ${className}`} aria-hidden>
      <span className="block w-3 h-3 bg-accent" />
      <span className="block w-3 h-3 bg-brand-amber" />
      <span className="block w-3 h-3 bg-brand-cobalt" />
    </div>
  )
}

export function GridDivider() {
  return <div className="section-rule" />
}
