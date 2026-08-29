export default function PageHero({
  index,
  eyebrow,
  title,
  description,
  children,
}: {
  index?: string
  eyebrow: string
  title: React.ReactNode
  description?: string
  children?: React.ReactNode
}) {
  return (
    <section className="pt-[56px] md:pt-[64px] border-b border-stone-200 bg-stone-50">
      <div className="container-wide">
        <div className="py-12 md:py-16 lg:py-20 border-x border-stone-200 px-6 md:px-10 lg:px-14 bg-white">
          {index && (
            <p className="font-mono text-sm text-stone-400 mb-4">{index}</p>
          )}
          <p className="eyebrow mb-5">{eyebrow}</p>
          <h1 className="heading-xl mb-6 max-w-5xl">{title}</h1>
          {description && <p className="body-lg max-w-3xl mb-8">{description}</p>}
          {children}
        </div>
      </div>
    </section>
  )
}
