import React, { useEffect, useState } from "react";
import workspaceicon from "../assets/workspace_image/workspaceicon.png";
import sort from "../assets/workspace_image/sort.svg";
import chevrondown from "../assets/workspace_image/chevrondown.svg";
import filter from "../assets/workspace_image/filter.svg";
import search from "../assets/workspace_image/search.svg";
import { DropDownSort } from "../components/DropDownSort";
import { WorkspaceCard } from "../components/card/WorkspaceCard";
import {
  filterWorkspace,
  getAllWorkspace,
  getTotalPage,
} from "../redux/service/workspaceService/workspaceService";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown } from "react-daisyui";
// import { io } from "socket.io-client";
import { removeWorkspaceServiceSuccess } from "../redux/slice/workspaceSlice/workspaceSlice";
import {
  Box,
  FormControl,
  FormControlLabel,
  Pagination,
  Radio,
  RadioGroup,
  Skeleton,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CustomSkeleton } from "../components/CustomSkeleton";

// const socket = io.connect("http://localhost:3002");

const theme = createTheme({
  palette: {
    primary: {
      main: "#1E9CEF",
      contrastText: "#fff",
    },
  },
});
import { DropDownFilterWorkspace } from "../components/DropDownFilterWorkspace";

export const Workspace = () => {
  const [openSearch, setOpenSearch] = useState(false);

  const { workspaces, totalPage } = useSelector((state) => state.workspace);

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

  const [openSort, setOpenSort] = useState(false);

  const [openFilter, setOpenFilter] = useState(false);

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
    dispatch(getTotalPage(size));
  }, [dispatch, no, size, asc, desc, sortbydatetime]);

  // useEffect(() => {
  //   socket.on("remove_workspace_success", (workspaceId) => {
  //     dispatch(removeWorkspaceServiceSuccess(workspaceId));
  //   });

  //   return () => {
  //     socket.off("remove_workspace");
  //   };
  // }, [dispatch]);

  const handleFilterWorkspace = (status) => {
    dispatch(
      filterWorkspace({
        status: status,
        no: no,
        size: size,
        asc: asc,
        desc: desc,
        sortbydatetime: sortbydatetime,
      })
    );
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
    <div className="text-accent lg:ml-5 md:ml-0 md:mt-3">
      {/* Icon workspace */}
      <div className="flex items-center gap-x-3 lg:hidden md:hidden">
        <img src={workspaceicon} className="p-2 shadow-custom rounded-lg" />
        <p className="font-semibold text-20px">Workspaces</p>
      </div>

      {/* Title and search for tablet and mobile */}
      <div className="hidden lg:grid lg:grid-cols-12">
        {/* Icon */}
        <div className="hidden lg:col-span-6 lg:flex items-center gap-x-3 md:col-span-12">
          <img
            src={workspaceicon}
            className="p-2 shadow-custom rounded-lg md:w-7 md:h-7 md:p-1"
          />
          <p className="font-semibold text-20px md:text-16px">Workspaces</p>
        </div>

        {/* Search button for tablet */}
        <div className="hidden lg:col-span-6 lg:flex lg:justify-between lg:w-5 lg:h-5 lg:ml-[295px] md:hidden">
          {openSearch ? (
            <input
              type="text"
              placeholder="search"
              className="absolute rounded-lg text-18px border-gray-200 border-[1px] w-[280px] lg:-ml-[250px] focus:ring-accent focus:border-accent"
            />
          ) : null}
          <button
            type="button"
            className="mt-3 absolute"
            onClick={() => setOpenSearch(!openSearch)}
          >
            <img src={search} />
          </button>
        </div>
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
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="All Workspaces"
                    name="radio-buttons"
                  >
                    <Dropdown.Item>
                      <FormControlLabel
                        value="A-Z"
                        control={<Radio defaultChecked />}
                        label="A-Z"
                        className="h-5 w-full"
                        onClick={() => {
                          setAsc(true);
                          setDesc(false);
                          setStatus("A-Z");
                        }}
                      />
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <FormControlLabel
                        value="Z-A"
                        control={<Radio />}
                        label="Z-A"
                        className="h-5 w-full"
                        onClick={() => {
                          setAsc(false);
                          setDesc(true);
                          setStatus("Z-A");
                        }}
                      />
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <FormControlLabel
                        value="THIS_WEEK"
                        control={<Radio />}
                        label="This week"
                        className="h-5 w-full"
                        onClick={() => {
                          setSortbydatetime("THIS_WEEK");
                          setStatus("THIS_WEEK");
                        }}
                      />
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <FormControlLabel
                        value="THIS_MONTH"
                        control={<Radio />}
                        label="This month"
                        className="h-5 w-full"
                        onClick={() => {
                          setSortbydatetime("THIS_MONTH");
                          setStatus("THIS_MONTH");
                        }}
                      />
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <FormControlLabel
                        value="THIS_YEAR"
                        control={<Radio />}
                        label="This year"
                        className="h-5 w-full"
                        onClick={() => {
                          setSortbydatetime("THIS_YEAR");
                          setStatus("THIS_YEAR");
                        }}
                      />
                    </Dropdown.Item>
                  </RadioGroup>
                </FormControl>
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
              <Dropdown.Menu className="w-60 bg-white rounded-lg">
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="All Workspaces"
                    name="radio-buttons-group"
                  >
                    <Dropdown.Item>
                      <FormControlLabel
                        value="All Workspaces"
                        control={<Radio defaultChecked />}
                        label="All Workspaces"
                        className="h-5 w-full"
                        onClick={() => {
                          dispatch(
                            getAllWorkspace({
                              no: no,
                              size: size,
                              asc: asc,
                              desc: desc,
                              sortbydatetime: sortbydatetime,
                            })
                          );
                          setFilterStatus("All Workspaces");
                        }}
                      />
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <FormControlLabel
                        value={true}
                        control={<Radio />}
                        label="My Workspaces"
                        className="h-5 w-full"
                        onClick={() => {
                          handleFilterWorkspace(true);
                          setFilterStatus("My Workspaces");
                        }}
                      />
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <FormControlLabel
                        value={false}
                        control={<Radio />}
                        label="Other Workspaces"
                        className="h-5 w-full"
                        onClick={() => {
                          handleFilterWorkspace(false);
                          setFilterStatus("Other Workspaces");
                        }}
                      />
                    </Dropdown.Item>
                  </RadioGroup>
                </FormControl>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className="md:col-span-1 col-span-4 h-11">
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

      <div className="grid grid-cols-12 gap-8 md:px-6 sm:grid sm:grid-cols-1">
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
            <p className="font-semibold text-accent text-16px">No Workspace</p>
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
