import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="bg-white py-20" id="about">
        <div className="align-element grid md:grid-cols-2 items-center gap-16">
            <img src={aboutSvg} className="w-full h-64" />
            <article>
                <SectionTitle text='code and coffee'/>
                <p className="text-slate-600 mt-8 leading-loose">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui aperiam facilis maxime quae, assumenda dolor non voluptas consequuntur ratione rem nostrum deserunt aspernatur porro eligendi deleniti, magni, itaque possimus nemo rerum et commodi. Itaque, repudiandae minus perferendis animi necessitatibus exercitationem aliquam, vero assumenda aut ab reprehenderit libero quos odio nam?</p>
            </article>
        </div>
    </section>
  )
}
export default About