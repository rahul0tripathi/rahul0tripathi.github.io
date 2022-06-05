import Devfolio from "./Devfolio";
import EthGlobal from "./EthGlobal";

export default function Projects() {
  return (
    <div className=" flex flex-col md:flex-row justify-center justify-items-center gap-4">
        <EthGlobal/>
        <Devfolio/>
    </div>
  );
}
