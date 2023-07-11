import React, { useEffect, useState } from "react";
import documenticon from "../assets/dashboard_image/documenticon.svg";
import { DocumentCardRow } from "../components/card/DocumentCardRow";
import { Hint } from "../components/Hint";
import { useDispatch, useSelector } from "react-redux";
import { getDocumentRecently } from "../redux/service/documentService/documentService";
import SkeletonDocumentRow from "../components/SkeletonDocumentRow";

export const Dashboard = () => {
  // const documentRecentlyUpdated = [
  //   {
  //     documentId: "b69d1d83-21b1-4a1b-a00b-bbe11429d563",
  //     title: "Laravel",
  //     status: false,
  //     createdDate: "16-06-2023",
  //     pages: [],
  //     workspaceId: "b91e387c-4399-4ff4-adf1-c5b455012f8a",
  //     tags: [],
  //     blocks: [],
  //     editDate: "25 minutes ago",
  //   },
  //   {
  //     documentId: "b69d1d83-21b1-4a1b-a00b-bbe11429d563",
  //     title: "Spring",
  //     status: true,
  //     createdDate: "16-06-2023",
  //     pages: [],
  //     workspaceId: "b91e387c-4399-4ff4-adf1-c5b455012f8a",
  //     tags: [],
  //     blocks: [],
  //     editDate: "25 minutes ago",
  //   },
  //   {
  //     documentId: "b69d1d83-21b1-4a1b-a00b-bbe11429d563",
  //     title: "Java",
  //     status: false,
  //     createdDate: "16-06-2023",
  //     pages: [],
  //     workspaceId: "b91e387c-4399-4ff4-adf1-c5b455012f8a",
  //     tags: [],
  //     blocks: [],
  //     editDate: "25 minutes ago",
  //   },
  // ];

  const dispatch = useDispatch();
  const recentlies = useSelector((state) => state.document.recently);
  useEffect(() => {
    dispatch(getDocumentRecently());
  }, [dispatch]);

  // console.log(recentlies)

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);


  return (
    <div className="bg-white z-0">
    <div className="w-full lg:w-full">
      <Hint />
    </div>
    <div className="flex items-center mt-12 mb-7 gap-x-3 md:-ml-5 md:mt-7 md:mb-5">
      <img
        src={documenticon}
        className="shadow-custom p-2 rounded-lg md:w-7"
      />
      <p className="font-semibold text-22px text-accent md:text-14px">
        Recently
      </p>
    </div>
    <div className="space-y-8  md:space-y-5 ">
    {loading ? (
          recentlies === null ? null : recentlies.length > 0 ? (
            [...recentlies].map((recently, index) => (
              <SkeletonDocumentRow key={index} />
            ))
          ) : (
            <div className="col-span-12 absolute px-64 md:px-0 md:-ml-5">
            <div className="flex flex-col justify-center gap-y-1 items-center h-60 w-[570px] lg:w-[170px] lg:h-40 md:w-[330px] md:h-20">
              <p className="font-semibold text-accent text-base md:text-12px ">
                No Recently
              </p>
            </div>
          </div>
          )
        ) : recentlies === null ? null : recentlies.length > 0 ? (
          [...recentlies]
          .sort((a, b) => a.editDate - b.editDate)
            .map((recently, index) => (
            <div key={index}>
              <DocumentCardRow
                documentId={recently.documentId}
                workspaceId={recently.workspaceId}
                documentname={recently.title}
                editDate={recently.editDate}
                status={recently.status}
              />
            </div>
          ))
        ) : (
          <div className="col-span-12 absolute px-64 md:px-0 md:-ml-5">
            <div className="flex flex-col justify-center gap-y-1 items-center h-60 w-[570px] lg:w-[170px] lg:h-40 md:w-[330px] md:h-20">
              <p className="font-semibold text-accent text-base md:text-12px ">
                No Recently
              </p>
            </div>
          </div>
        )}
    </div>
  </div>
  );
};