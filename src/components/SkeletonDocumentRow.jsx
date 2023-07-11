import React from "react";
import { Skeleton } from "@mui/material";

function SkeletonDocumentRow() {
  return (
    <div className="flex justify-between items-center px-3 gap-x-5 w-full shadow-custom rounded-lg cursor-pointer lg:w-full md:-ml-5 md:w-[330px] md:py-0 md:px-0 z-0 hover:shadow-hover">
          {/* For Laptop & Tablet */}
      <div className="w-full h-full px-5 py-4 md:hidden">
        <div className="flex gap-x-5">
          <h3 className="font-semibold text-22px text-black w-44 md:text-12px md:w-24 ">
            <Skeleton
              animation="wave"
              variant="rounded"
              width={110}
              height={30}
            />
          </h3>
          <div className="flex text-primary gap-x-1 px-3 justify-center items-center rounded-2xl">
          </div>
        </div>
        <p className="text-accent mt-4 text-16px text-left md:text-10px">
          <Skeleton
            animation="wave"
            variant="rounded"
            width={300}
            height={20}
          />
        </p>
      </div>
      <div className="relative z-10 md:hidden">
        <Skeleton className="mr-2" variant="rounded" width={20} height={40} />
      </div>

      {/* For mobile */}
      <div className="hidden lg:hidden  md:inline-block md:w-full md:h-full md:px-5 md:py-4 ">
        <div className="flex gap-x-5">
          <h3 className="font-semibold text-22px text-black w-44 md:text-12px md:w-24 ">
            <Skeleton
              animation="wave"
              variant="rounded"
              width={70}
              height={15}
            />
          </h3>
          <div className="flex text-primary gap-x-1 px-3 justify-center items-center rounded-2xl">
          </div>
        </div>
        <p className="hidden lg:hidden  md:inline-block md:text-accent md:mt-4 md:text-16px md:text-left md:text-10px">
          <Skeleton
            animation="wave"
            variant="rounded"
            width={150}
            height={10}
          />
        </p>
      </div>
      <div className="relative z-10">
        <Skeleton className="mr-5" variant="rounded" width={10} height={30} />
      </div>
    </div>
  );
}

export default SkeletonDocumentRow;
