import Contacts from "../components/Contacts";
import Intro from "../components/Intro";

export default function AboutMe() {
  return (
    <section className="flex flex-col lg:flex-row justify-between gap-1">
      <Intro />
      <Contacts />
    </section>
  );
}
