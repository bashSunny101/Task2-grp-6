import React from "react";
import Action from "./Action";
import Comedy from "./comedy";
import Romance from "./romance";
import Horror from "./Horror";

export default function Movies(){
  return(
    <>
      <h1 className="font-medium text-center p-4  text-3xl pb-1">MOVIE RECOMMENDATION SYSTEM</h1>
      <p className="font-medium p-4 text-center mt-2 mb-14  pb-1 pt-0">Watch your favourites here!</p>

      <div className="max-w-full ml-4">
        <h2 className=" text-xl  m-4">ACTION</h2>
        <Action/>
      </div>

      <div className="max-w-full ml-4">
        <h2 className=" text-xl m-4">COMEDY</h2>
        <Comedy/>
      </div>

      <div className="max-w-full ml-4">
        <h2 className=" text-xl m-4">HORROR</h2>
        <Horror/>
      </div>

      <div className="max-w-full ml-4">
        <h2 className=" text-xl m-4">ROMANCE</h2>
        <Romance/>
      </div>

    </>
  )
}
