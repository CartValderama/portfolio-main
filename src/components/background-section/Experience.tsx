import Timeline from "../Timeline";
import { experience } from "@/data/staticData";

export default function Experience() {
  return (
    <div className="flex flex-col gap-y-5 border bg-secondary py-6 px-8 md:rounded-md dark:bg-white/10 dark:border-white/10">
      <h2 className="text-xl">Experience</h2>
      <Timeline data={experience} />
    </div>
  );
}
