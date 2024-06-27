import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="who i am?" />
          <p className="text-slate-600 mt-8 leading-loose">
            My name is Firss Sharief. I am a professional and enthusiastic programmer
            in my daily life. I am a quick learner with a self-learning
            attitude. I love to learn and explore new technologies and i'm
            passionate about problem-solving. I love almost all the stacks of
            web application development and love to make the web more open to
            the world. My core skill is based on JavaScript and I love to do
            most of the things using JavaScript. I am available for any kind of
            job opportunity that suits my skills and interests.
          </p>
        </article>
      </div>
    </section>
  );
}
export default About