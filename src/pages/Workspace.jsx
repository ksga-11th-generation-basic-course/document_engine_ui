import React, { useEffect, useState } from "react";
import workspaceicon from "../assets/workspace_image/workspaceicon.png";
import sort from "../assets/workspace_image/sort.svg";
import chevrondown from "../assets/workspace_image/chevrondown.svg";
import filter from "../assets/workspace_image/filter.svg";
import search from "../assets/workspace_image/search.svg";
import { WorkspaceCard } from "../components/card/WorkspaceCard";
import {
  filterWorkspace,
  getAllWorkspace,
} from "../redux/service/workspaceService/workspaceService";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown, Radio } from "react-daisyui";
import { io } from "socket.io-client";
import { removeWorkspaceServiceSuccess } from "../redux/slice/workspaceSlice/workspaceSlice";
import { Box, Pagination, Skeleton } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CustomSkeleton } from "../components/CustomSkeleton";

const socket = io.connect("http://localhost:3001");

const theme = createTheme({
  palette: {
    primary: {
      main: "#1E9CEF",
      contrastText: "#fff",
    },
  },
});

export const Workspace = () => {
  const [openSearch, setOpenSearch] = useState(false);

  let workspaces = useSelector((state) => state.workspace.workspaces);

  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");

  const [no, setNo] = useState(1);

  const [size, setSize] = useState(6);

  const [asc, setAsc] = useState(true);

  const [desc, setDesc] = useState(false);

  const [sortbydatetime, setSortbydatetime] = useState("DEFAULT");

  const [loading, setLoading] = useState(true);

  const [status, setStatus] = useState("A-Z");

  const [filterStatus, setFilterStatus] = useState("All Workspaces");

  useEffect(() => {
    dispatch(
      getAllWorkspace({
        no: no,
        size: size,
        asc: asc,
        desc: desc,
        sortbydatetime: sortbydatetime,
      })
    );
  }, [dispatch, no, size, asc, desc, sortbydatetime]);

  useEffect(() => {
    socket.on("remove_workspace_success", (workspaceId) => {
      dispatch(removeWorkspaceServiceSuccess(workspaceId));
    });

    return () => {
      socket.off("remove_workspace");
    };
  }, [dispatch]);

  const handleFilterWorkspace = (status) => {
    dispatch(filterWorkspace(status));
  };

  const handlePageNoChange = (event, value) => {
    setNo(value);
  };

  useEffect(() => {
    // Simulating data fetching delay
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="text-accent space-y-5 sm:h-full bg-white">
      <div className="flex items-center gap-x-3 ">
        <img src={workspaceicon} className="p-2 shadow-md rounded-lg" />
        <p className="font-semibold text-20px">Workspaces</p>
      </div>
      <div className="grid grid-cols-12 md:grid md:grid-cols-12 sm:grid sm:grid-cols-1">
        <div className="col-span-4 md:col-span-5 sm:grid-cols-1 flex items-center gap-x-5 h-11">
          <div className="flex items-center gap-x-3">
            <img src={sort} className="w-7 h-7 md:w-6 md:h-8" />
            <h4 className="font-semibold text-20px md:text-18px">Sort: </h4>
          </div>
          <div className="relative">
            <Dropdown>
              <Dropdown.Toggle>
                <div className="flex items-center gap-x-20">
                  <p className="text-18px text-black">{status}</p>
                  <img src={chevrondown} />
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu className="w-48 bg-white rounded-lg">
                <Dropdown.Item>
                  <Radio
                    defaultChecked
                    name="sortOptions"
                    onClick={() => {
                      setAsc(true);
                      setDesc(false);
                      setStatus("A-Z");
                    }}
                    className="checked:bg-primary checked:shadow-none"
                  />
                  <span>A-Z</span>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Radio
                    name="sortOptions"
                    onClick={() => {
                      setAsc(false);
                      setDesc(true);
                      setStatus("Z-A");
                    }}
                    className="checked:bg-primary checked:shadow-none"
                  />
                  <span>Z-A</span>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Radio
                    name="sortOptions"
                    className="checked:bg-primary checked:shadow-none"
                    onClick={() => {
                      setSortbydatetime("THIS_WEEK");
                      setStatus("THIS_WEEK");
                    }}
                  />
                  <span>This week</span>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Radio
                    name="sortOptions"
                    className="checked:bg-primary checked:shadow-none"
                    onClick={() => {
                      setSortbydatetime("THIS_MONTH");
                      setStatus("THIS_MONTH");
                    }}
                  />
                  <span>This month</span>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Radio
                    name="sortOptions"
                    className="checked:bg-primary checked:shadow-none"
                    onClick={() => {
                      setSortbydatetime("THIS_YEAR");
                      setStatus("THIS_YEAR");
                    }}
                  />
                  <span>This year</span>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className="col-span-4 md:col-span-6 sm:grid-cols-1 flex items-center gap-x-5 h-11">
          <div className="flex items-center gap-x-3">
            <img src={filter} className="w-7 h-7 md:w-5 md:h-5" />
            <h4 className="font-semibold text-20px md:text-18px">Filter: </h4>
          </div>
          <div className="relative">
            <Dropdown>
              <Dropdown.Toggle>
                <div className="flex items-center gap-x-20">
                  <p className="text-18px text-black">{filterStatus}</p>
                  <img src={chevrondown} />
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu className="w-52 bg-white rounded-lg">
                <Dropdown.Item>
                  <Radio
                    defaultChecked
                    name="radioOptions"
                    onClick={() =>
                      {dispatch(
                        getAllWorkspace({
                          no: no,
                          size: size,
                          asc: asc,
                          desc: desc,
                          sortbydatetime: sortbydatetime,
                        })
                      ); setFilterStatus("All Workspaces")}
                    }
                    className="checked:bg-primary checked:shadow-none"
                  />
                  <span>All Workspaces</span>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Radio
                    name="radioOptions"
                    onClick={() => {
                      handleFilterWorkspace(true);
                      setFilterStatus("My Workspaces");
                    }}
                    className="checked:bg-primary checked:shadow-none"
                  />
                  <span>My Workspaces</span>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Radio
                    name="radioOptions"
                    onClick={() => {
                      handleFilterWorkspace(false);
                      setFilterStatus("Other Workspaces");
                    }}
                    className="checked:bg-primary checked:shadow-none"
                  />
                  <span>Other Workspaces</span>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className=" md:col-span-1 col-span-4 h-11">
          <div className="flex justify-end relative">
            {openSearch ? (
              <input
                type="text"
                placeholder="search"
                className="md:mt-10 sm:m-0 rounded-lg text-18px border-gray-200 border-[1px] w-[280px] md:w-[150px] focus:ring-accent focus:border-accent"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            ) : null}
            <button
              type="button"
              className="absolute mr-2 top-3"
              onClick={() => setOpenSearch(!openSearch)}
            >
              <img src={search} />
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-5 ">
        {loading ? (
          workspaces &&
          workspaces.map((workspace, index) => (
            <div className="col-span-4" key={index}>
              <CustomSkeleton />
            </div>
          ))
        ) : workspaces === null ? null : workspaces.length > 0 ? (
          workspaces
            .filter((workspace) => {
              if (searchTerm === "") {
                return workspace;
              } else if (
                workspace.workspaceName
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              ) {
                return workspace;
              }
            })
            .map((workspace, index) => (
              <div className="col-span-4" key={index}>
                <WorkspaceCard workspace={workspace} />
              </div>
            ))
        ) : (
          <div className="col-span-12 absolute bottom-[45%] left-[55%]">
            <p className="font-semibold text-accent">No Workspace</p>
          </div>
        )}
      </div>
      <div className="flex justify-center items-center absolute left-[51%] bottom-6">
        <ThemeProvider theme={theme}>
          <Pagination
            count={5}
            color="primary"
            page={no}
            onChange={handlePageNoChange}
          />
        </ThemeProvider>
      </div>
    </div>
  );
};
