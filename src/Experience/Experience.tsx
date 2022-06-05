import { FaExternalLinkAlt } from "react-icons/fa";
import Altworld from "./Altworld";
import Ewar from "./Ewar";
export default function Experience() {
  return (
    <div className=" flex flex-col md:flex-row justify-center justify-items-center gap-4">
      <Ewar />
      <Altworld />
    </div>
  );
}
