import React from "react";
export default function Navbar() {
  return (
    <div>
      <div className="navbar bg-primary" style={{ fontFamily: "MonolisaB" }}>
        <a
          className="normal-case text-xl text-accent"
          href="https://opensea.io/assets/ethereum/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/38121513146491190755002555436942585046269001638802669743790819531254776531887"
        >
          rahultripathi.eth{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            style={{ marginLeft: "5px" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
      <div
        className="divider before:bg-neutral after:bg-neutral"
        style={{ marginTop: "-5px" }}
      ></div>
    </div>
  );
}
