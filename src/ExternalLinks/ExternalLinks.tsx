import { FaTwitter, FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
export default function ExternalLinks() {
  return (
    <div
      className="flex justify-center antialiased "
      style={{ padding: "40px", fontFamily: "MonolisaB" }}
    >
      <div className="flex space-x-6 text-white ">
        <a href="https://twitter.com/tripathi_rahul_">
          {" "}
          <kbd className="btn btn-ghost  bg-neutral text-xl">
            <FaTwitter />
          </kbd>
        </a>
        <a href="https://github.com/rahul0tripathi">
          <kbd className="btn btn-ghost bg-neutral text-xl">
            <FaGithub />
          </kbd>
        </a>
        <a href="https://medium.com/@rahultripathidev">
          <kbd className="btn btn-ghost bg-neutral text-xl">
            <FaMedium />
          </kbd>
        </a>
        <a href="https://www.linkedin.com/in/tripathi-rahul/">
          <kbd className="btn btn-ghost bg-neutral text-xl">
            <FaLinkedin />
          </kbd>
        </a>
      </div>
    </div>
  );
}
