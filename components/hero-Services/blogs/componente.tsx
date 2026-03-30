"use client";

export function Barra() {
  return (
    <div className="relative px-4 lg:mb-0">
      <div className="flex flex-wrap  justify-center rounded-2xl gap-5 p-3 dark:bg-white/5  bg-white/50 border dark:border-[hsl(207,68%,60%)] dark:shadow-[0_0_25px_rgba(28,126,201,0.4)] shadow-[0_0_5px_rgba(28,126,201,0.4)] ">
        {[
          { label: "Todos" },
          { label: "Seguridad" },
          { label: "Cloud" },
          { label: "Inteligencia Artificial" },
          { label: "Legal Tech" },
          { label: "loT" },
          { label: "Transformación Dígital" },
        ].map((tag) => (
          <span
            key={tag.label}
            className="flex items-center gap-4 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white rounded-xl border border-border bg-white/70 px-4 py-2 text-sm shadow-sm backdrop-blur dark:bg-white/5"
          >
            {tag.label}
          </span>
        ))}
      </div>
    </div>
  );
}
