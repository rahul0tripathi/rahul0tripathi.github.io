import { FaExternalLinkAlt } from "react-icons/fa";
export default function Altworld() {
  return (
    <div
      className="card w-96 bg-neutral shadow-xl"
      style={{ marginLeft: "9px" }}
    >
      <div className="card-body">
        <h2 className="card-title text-base text-white">
          <a href="https://altworld.in/">
            Altworld <FaExternalLinkAlt style={{ display: "inline" }} />
          </a>
        </h2>
        <p className="text-sm text-secondary ">
          <li>
            set up initial <b className="text-accent">microservices</b> for user
            registration and authorization in golang
          </li>
          <li>
            {" "}
            implemented{" "}
            <b className="text-accent">filter-based scalable matchmaking</b> for
            the platform
          </li>
          <li>
            {" "}
            setup custom{" "}
            <b className="text-accent">
              photon servers and implemented load-balancing
            </b>
            , along with performance benchmarks .{" "}
          </li>
        </p>
      </div>
    </div>
  );
}
