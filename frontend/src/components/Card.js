import React from "react";

const Card = ({ result }) => {
  if (result.length === 0) {
    return (
      <>
        <div className="container">
          <h2 className="text-center">....No results found</h2>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 p-10">
          {result.map((val, index) => {
            return (
              <>
                <div className="flex justify-center p-3">
                  <div className="rounded-lg shadow-lg bg-white max-w-xs">
                    <a href="#!">
                      <img
                        className="rounded-t-lg"
                        src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                        alt=""
                      />
                    </a>
                    <div className="p-6">
                      <h1 className="font-bold text-center hover:text-blue-800 ">
                        Card title
                      </h1>
                      <p type="button" className="hover:text-blue-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolorem eum numquam ab obcaecati commodi provident quae!
                        Cum non dicta cupiditate possimus eaque nulla
                        exercitationem minus dolores vero nesciunt, quam ab?
                      </p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </>
    );
  }
};

export default Card;
