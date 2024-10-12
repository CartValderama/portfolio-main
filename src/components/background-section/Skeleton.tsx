export default function Skeleton() {
  return (
    <div
      className="border flex flex-col bg-secondary md:rounded-md py-6 px-8 dark:bg-white/10 dark:border-white/10"
      aria-live="polite"
      role="status"
      aria-busy="true"
    >
      <div className="flex flex-col p-6">
        <div className="flex justify-between items-center mb-2">
          <div className="bg-stone-200 animate-pulse w-72 h-10 rounded-sm"></div>
          <div className="bg-stone-200 animate-pulse w-32 h-10 rounded-sm"></div>
        </div>
        <div className="bg-stone-200 animate-pulse w-56 h-5 rounded-sm"></div>

        <div className="bg-stone-200 animate-pulse w-full h-48 mt-8 mb-2 rounded-sm"></div>
        <div className="flex flex-wrap w-3/4 gap-x-2 gap-y-1">
          <div className="bg-stone-200 animate-pulse w-20 h-5 rounded-sm"></div>
          <div className="bg-stone-200 animate-pulse w-10 h-5 rounded-sm"></div>
          <div className="bg-stone-200 animate-pulse w-12 h-5 rounded-sm"></div>
          <div className="bg-stone-200 animate-pulse w-32 h-5 rounded-sm"></div>
          <div className="bg-stone-200 animate-pulse w-20 h-5 rounded-sm"></div>
          <div className="bg-stone-200 animate-pulse w-28 h-5 rounded-sm"></div>
          <div className="bg-stone-200 animate-pulse w-12 h-5 rounded-sm"></div>
          <div className="bg-stone-200 animate-pulse w-24 h-5 rounded-sm"></div>
        </div>
      </div>
    </div>
  );
}
