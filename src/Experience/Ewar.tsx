import { FaExternalLinkAlt } from "react-icons/fa";
export default function Ewar() {
  return (
    <div
      className="card w-96 bg-neutral shadow-xl"
      style={{ marginLeft: "9px" }}
    >
      <div className="card-body">
        <h2 className="card-title text-base text-white">
          <a href="https://www.crunchbase.com/organization/ewar-games">
            Ewar Games <FaExternalLinkAlt style={{ display: "inline" }} />
          </a>
        </h2>
        <p className="text-sm text-secondary ">
          <li>
            scaled the platform and built{" "}
            <b className="text-accent">distributed websocket servers</b> for
            communication between backends and clients
          </li>
          <li>
            {" "}
            implemented{" "}
            <b className="text-accent">
              distributed skill-based matchmaking
            </b>{" "}
            for the platform and,
          </li>
          <li>
            {" "}
            responsible for{" "}
            <b className="text-accent">
              optimizing and scaling backends of turn based multiplayer games
            </b>
            .{" "}
          </li>
        </p>
      </div>
    </div>
  );
}
