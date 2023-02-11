import React, { useState } from "react";
import { Link } from "react-router-dom";
function Our_Projects({ visibleCheck }) {
  let [popUp, setPopUp] = useState("none");
  let popUpFunOpen = () => {
    setPopUp(null);
  };
  let popUpFunClose = () => {
    setPopUp("none");
  };
  return (
    <>
      <div
        className="grid grid-rows-4 grid-flow-col gap-4 p-2 bg-white border-b-2 border-black absolute w-full "
        style={{ display: popUp ? `${visibleCheck}` : popUp }}
        onMouseEnter={popUpFunOpen}
        onMouseLeave={popUpFunClose}
      >
        <div className="m-1 hover:text-blue-400 hover:font-bold hover:underline">
          <Link to="/our_projects/club-service"> Club Service</Link>
        </div>
        <div className="m-1 hover:text-blue-400 hover:font-bold hover:underline">
          <Link to="/our_projects/community-service">Community Service</Link>
        </div>
        <div className="m-1 hover:text-blue-400 hover:font-bold hover:underline">
          <Link to="/our_projects/shiksha">Shiksha</Link>
        </div>
        <div className="m-1 hover:text-blue-400 hover:font-bold hover:underline">
          <Link to="/our_projects/professional-development">
            Professional Development
          </Link>
        </div>
        <div className="m-1 hover:text-blue-400 hover:font-bold hover:underline">
          <Link to="/our_projects/international-service">
            International Service
          </Link>
        </div>
        <div className="m-1 hover:text-blue-400 hover:font-bold hover:underline">
          <Link to="/our_projects/public-relation-and-marketing">
            Public Relation And Marketing
          </Link>
        </div>
        <div className="m-1 hover:text-blue-400 hover:font-bold hover:underline">
          <Link to="/our_projects/sports">Sports</Link>
        </div>
        <div className="m-1 hover:text-blue-400 hover:font-bold hover:underline">
          <Link to="/our_projects/enterprenurship-development">
            Enterprenurship Development
          </Link>
        </div>
        <div className="m-1 hover:text-blue-400 hover:font-bold hover:underline">
          <Link to="/our_projects/partner-in-service">Partner In Service</Link>
        </div>
        <div className="m-1 hover:text-blue-400 hover:font-bold hover:underline">
          <Link to="/our_projects/editorial-service">Editorial Service</Link>
        </div>
        <div className="m-1 hover:text-blue-400 hover:font-bold hover:underline">
          <Link to="/our_projects/digital-communication">
            Digital Communication
          </Link>
        </div>
        <div className="m-1 hover:text-blue-400 hover:font-bold hover:underline">
          <Link to="/our_projects/social-media-relations">
            Social Media Relations
          </Link>
        </div>
        <div className="m-1 hover:text-blue-400 hover:font-bold hover:underline">
          <Link to="/our_projects/media-production">Media Production</Link>
        </div>
      </div>
    </>
  );
}

export default Our_Projects;
