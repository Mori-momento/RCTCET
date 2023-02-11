import React from "react";
import Card from "./Card";
import { useParams } from "react-router";
function Our_projects_page({ result }) {
  let { id } = useParams();
  return (
    <>
      <div className="bg-slate-900/50 uppercase text-yellow-50 text-center font-extrabold">
        <h1 style={{ fontSize: "10vw" }}>{id}</h1>
      </div>
      <Card result={result}></Card>
    </>
  );
}

export default Our_projects_page;
