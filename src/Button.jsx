/* eslint-disable react/prop-types */
import React from "react";
import { AiFillMessage } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

const Button = (props) => {




  return (
      <div className="flex ">

      <button className= {`bg-bl rounded-lg flex items-center justify-center  p-1 gap-2
        ${props.type == "blue" ? "bg-blue-700" : "bg-orange-600"} `}>


      {props.icon == "contact" ? (
          <AiFillMessage size="16px" />
        ) : (
            <FaGithub size="16px" />
        )}

      {props.title}
    </button>
        </div>
  );
};

export default Button;