import { BiTrophy } from "react-icons/bi";
export default function EthGlobal() {
  return (
    <div
      className="card w-96 bg-neutral shadow-xl"
      style={{ marginLeft: "9px" }}
    >
      <div className="card-body">
        <h2 className="card-title text-base text-white">EthGlobal</h2>
        <p className="text-sm text-secondary ">
          I also regularly participate in Ethglobal Hackathons; also won a few
        </p>
        <div className="card-actions justify-left">
          <a href="https://showcase.ethglobal.com/buildquest/metanox-u6kf6">
            <button className="btn btn-ghost bg-primary text-accent">
              MetaNox <BiTrophy style={{ marginLeft: "4px" }} />{" "}
            </button>
          </a>
          <a href="https://showcase.ethglobal.com/roadtoweb3/bundlr">
            <button className="btn btn-ghost bg-primary text-accent">
              Bundlr
            </button>
          </a>
          <a href="https://showcase.ethglobal.com/nfthack2022/arcland">
            <button className="btn btn-ghost bg-primary text-accent">
              ArcLands
            </button>
          </a>

          <a href="https://app.poap.xyz/scan/rahultripathi.eth">
            <button className="btn btn-ghost bg-primary text-accent">
              Poaps
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
