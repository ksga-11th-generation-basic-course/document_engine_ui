import { Skeleton } from "@mui/material";
import React from "react";

export const CustomSkeleton = () => {
  return (
    <div className="shadow-md rounded-lg text-accent cursor-pointer sm:w-[300px] border-[1px] skeleton-container">
      <div className="flex justify-between items-center p-3">
        <h4 className="font-semibold text-18px">
          <Skeleton variant="text" width={200} height={30} />
        </h4>
        <p className="border-[1px] rounded-full px-3">
          <Skeleton variant="text" width={50} height={20} />
        </p>
      </div>
      <div className="h-[200px] overflow-hidden">
        <Skeleton variant="rectangular" width="100%" height={200} />
      </div>
      <div className="flex justify-between items-center p-3">
        <div>
          <h3 className="font-semibold text-18px">
            <Skeleton variant="text" width={120} height={25} />
          </h3>
          <p className="text-14px">
            <span>
              <Skeleton variant="text" width={100} height={20} />
            </span>
          </p>
        </div>
        <div className="relative">
          <Skeleton variant="circular" width={30} height={30} />
        </div>
      </div>
    </div>
  );
};
