import React, { Fragment, useState } from "react";
import dotsvertical from "../../assets/document_image/dotsvertical.svg";
import { Menu, Transition } from "@headlessui/react";
import restore from "../../assets/document_image/restore.svg";
import trush from "../../assets/document_image/delete.svg";
import { RemoveHistory } from "../../modal/RemoveHistoryModal";
import { restoreDocument } from "../../redux/service/historyService/historyService";
import { useDispatch } from "react-redux";
import { restoreDocumentSuccess } from "../../redux/slice/historySlice/historySlice";
import { useNavigate } from "react-router";

export const DocumentHistoryCard = ({ history }) => {
  const character = history?.editedBy.split("");

  const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
  ];

  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  const [removeHistory, setRemoveHistory] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  let historyId = history?.historyId;

  let documentId = history?.documentId;

  let workspaceId = history?.workspaceId;

  const handleRestoreHistory = async () => {
    try {
      const history = await restoreDocument(historyId, documentId);
      dispatch(restoreDocumentSuccess(history));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center w-full text-accent">
        <div className="text-18px space-y-3">
          <p className="font-semibold">{history?.editedDate}</p>
          <div className="flex items-center gap-x-3">
            <div
              className={`w-7 h-7 flex justify-center items-center ${randomColor} rounded-full text-white text-15px`}
            >
              <p>{character[0]}</p>
            </div>
            <h4>{history?.editedBy}</h4>
          </div>
        </div>
        <div className="relative">
          {/* <button
            className="p-3 border-[1px] rounded-lg"
            type="button"
            onClick={() => setOpenHistory(!openHistory)}
          >
            <img src={dotsvertical} />
          </button> */}
          <Menu as="div" className="relative inline-block text-left bg-white">
            <div>
              <Menu.Button className="inline-flex w-full gap-x-3 justify-center items-center rounded-lg border-[1px] bg-opacity-20 p-3 text-sm font-medium text-accent hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                <img src={dotsvertical} />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute  mt-2 w-40 right-0 divide-y divide-gray-100 rounded-md bg-white z-10 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 bg-white">
                  <Menu.Item className=" hover:bg-gray-100">
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-violet-500 text-accent" : "text-accent"
                        } group flex w-full flex-col justify-start text-sm rounded-md px-2 py-2`}
                        onClick={() =>
                          navigate(`/document/history/${historyId}/${workspaceId}`)
                        }
                      >
                        <div className="flex gap-x-3">
                          {/* <img src={pen} alt="" /> */}
                          <img src={restore} />
                          <span className="text-lg">Restore</span>
                        </div>
                        {/* <p className="ml-[27.5px]">Edit document directly</p> */}
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item className=" hover:bg-gray-100">
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-violet-500 text-accent" : "text-accent"
                        } group flex w-full flex-col justify-start text-sm rounded-md px-2 py-2`}
                        onClick={() => setRemoveHistory(!removeHistory)}
                        // onClick={() => handleChangeStatus(true)}
                      >
                        <div className="flex gap-x-3">
                          {/* <img src={pen} alt="" /> */}
                          <img src={trush} />
                          <span className="text-lg text-red-500">Remove</span>
                        </div>
                        {/* <p className="ml-[27.5px]">Edit document directly</p> */}
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          {/* {openHistory ? (
            <DropDownHistory
              openHistory={openHistory}
              setOpenHistory={setOpenHistory}
            />
          ) : null} */}
        </div>
      </div>
      <div className="border-[1px] mt-3 mb-3"></div>
      <div>
        <RemoveHistory
          historyId={history?.historyId}
          documentId={history?.documentId}
          removeHistory={removeHistory}
          setRemoveHistory={setRemoveHistory}
        />
      </div>
    </div>
  );
};
