export default function Devfolio() {
  return (
    <div
      className="card w-96 bg-neutral shadow-xl"
      style={{ marginLeft: "9px" }}
    >
      <div className="card-body">
        <h2 className="card-title text-base text-white">Devfolio</h2>
        <p className="text-sm text-secondary ">
          I also sometimes hack at Devfolio events
        </p>
        <div className="card-actions justify-left">
          <a href="https://devfolio.co/@MajTrippy">
            <button className="btn btn-ghost bg-primary text-accent">
              Profile
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
