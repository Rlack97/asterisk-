import Nav from "./Nav";
import Section from "./Section";
import Footer from "./Footer";
import HeadPhone from "./HeadPhone";
import data from "./data.json";

export default function Landing() {
  return (
    <div>
      <Nav />
      {/* <HeadPhone /> */}
      {data.map((section, index) => (
        <Section index={index} title={section.title} cards={section.cards} />
      ))}

      <Footer />
    </div>
  );
}
