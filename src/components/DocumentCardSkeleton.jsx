import { Skeleton } from "@mui/material";
import React from "react";

export const DocumentCardSkeleton = () => {
  return (
    <div className="shadow-md rounded-lg text-black cursor-pointer border-[1px] p-1 flex relative hover:shadow-hover">
      <div className="w-full p-3">
        <div className="flex justify-between items-center">
          <div className="flex text-primary gap-x-1 px-3 justify-center rounded-2xl absolute right-2 top-3 "></div>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <span className="font-bold text-22px text-primary flex gap-x-1">
              <Skeleton
                animation="wave"
                className="mr-2"
                variant="rounded"
                width={25}
                height={25}
              />
              <Skeleton
                animation="wave"
                className="mr-2"
                variant="rounded"
                width={100}
                height={25}
              />
            </span>
            <span className="text-14px font-semibold leading-8 text-accent">
              <Skeleton
                animation="wave"
                className="mr-2 mt-5"
                variant="rounded"
                width={200}
                height={15}
              />
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-7 right-3">
        <div className="relative">
          <Skeleton
            animation="wave"
            className="mr-2"
            variant="rounded"
            width={10}
            height={25}
          />
        </div>
      </div>
    </div>
  );
};
