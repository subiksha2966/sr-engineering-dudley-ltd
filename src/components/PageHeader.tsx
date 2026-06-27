interface PageHeaderProps {
  title: string;
  highlight?: string;
  subtitle?: string;
  image: string;
  darkMode: boolean;
}

export default function PageHeader({ title, highlight, subtitle, image, darkMode }: PageHeaderProps) {
  return (
    <section className="relative h-72 sm:h-80 lg:h-96 flex items-end overflow-hidden">
      <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
      <div className={`absolute inset-0 ${darkMode ? 'bg-gray-900/85' : 'bg-[#0f1e3d]/82'}`} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
        <p className="text-blue-400 text-sm font-bold uppercase tracking-widest mb-2">SR Engineering Dudley LTD</p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
          {title} {highlight && <span className="text-blue-400">{highlight}</span>}
        </h1>
        {subtitle && <p className="mt-3 text-base text-gray-300 max-w-xl">{subtitle}</p>}
      </div>
    </section>
  );
}
