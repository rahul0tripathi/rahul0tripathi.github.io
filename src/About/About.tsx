export default function About() {
  return (
    <div className="text-accent" style={{ padding: "40px" }}>
      <div className="flex justify-center antialiased">
        <p className="text-3xl text-left " style={{ fontFamily: "MonolisaB" }}>
          Software Developer creating simple stuff (
          <img
            src="/pepefrg.gif"
            alt="pepe"
            style={{ display: "inline", height: "60px" }}
          />
          )
          <br /> and also learning
        </p>
      </div>
      <div className="divider"></div>
      <div className="flex justify-center antialiased">
        <p
          className="text-base text-left text-secondary tracking-wider leading-8"
        >
          I’m Rahul Tripathi, a software developer based out of 🇮🇳. I primarily
          worked on web-backends and game applications with a focus on
          simplicity & scalability. <br></br> I’ve just joined{" "}
          <a
            className="underline underline-offset-8 "
            style={{ fontFamily: "MonolisaB" }}
            href="https://brahma.fi"
          >
            {" "}
            Brahma.fi
          </a>{" "}
          where I'll be working on building cool defi related products. Before
          that, I worked at gaming startups as a backend dev;
        </p>
      </div>
    </div>
  );
}
