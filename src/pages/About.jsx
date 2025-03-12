import dude from "../assets/smilingatacamera.jpg";
import "../styles/About.css";

export default function About() {
  return (
    <div className="about">
      <div className="aboutContainer">
        <div className="aboutText">
          <h2>¿What are we about?</h2>
          <div className="aboutDesc">
            Here at (insert generic company name), we are all about money,
            that's it, all we care is reselling the cheapest goods, something
            you will only buy because it's cheap and it may be fun for a couple
            of seconds after unboxing it but that's it. And you know that feels
            good so you'll come back for another hit, ain't that fun? Anyway,
            heres lorem ipsum: Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Exercitationem accusamus qui vitae non nostrum,
            pariatur rem sint mollitia necessitatibus doloremque reprehenderit,
            deleniti rerum id minima nam iusto natus voluptatem aliquid.
          </div>
        </div>
        <div className="aboutImgContainer">
          <img src={dude} alt="" />
        </div>
      </div>
    </div>
  );
}
