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
  getTotalPage,
} from "../redux/service/workspaceService/workspaceService";
import { useDispatch, useSelector } from "react-redux";
import emptybox from "../assets/workspace_image/emptybox.png";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CustomSkeleton } from "../components/CustomSkeleton";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Radio } from "@material-tailwind/react";
import { Collapse, Card, CardBody } from "@material-tailwind/react";

// const socket = io.connect("http://localhost:3002");

const theme = createTheme({
  palette: {
    primary: {
      main: "#1E9CEF",
      contrastText: "#fff",
    },
  },
});

export const Workspace = () => {
  const [openMenu, setOpenMenu] = React.useState(false);

  const [openMenuTwo, setOpenMenuTwo] = React.useState(false);

  const [visible, setVisible] = useState(false);

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

  const [status, setStatus] = useState("Ascending");

  const [filterStatus, setFilterStatus] = useState("All Workspaces");

  const toggleOpen = () => setOpenSearch((cur) => !cur);

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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 10) {
      setSize((prevPage) => prevPage + 1);
    }
  }
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
            <Menu
              open={openMenu}
              handler={setOpenMenu}
              dismiss={{
                itemPress: false,
              }}
            >
              <MenuHandler>
                <button className="flex items-center justify-between w-[200px]">
                  <p className="text-18px text-black font-ssp">{status}</p>
                  <ChevronDownIcon
                    strokeWidth={3}
                    className={`h-4 w-4 transition-transform ${
                      openMenu ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </MenuHandler>
              <MenuList className="rounded-lg p-2 w-[200px] font-ssp">
                <MenuItem className="flex justify-start p-0 hover:bg-gray-200 rounded-lg">
                  <Radio
                    id="Ascending"
                    name="type"
                    label={<span className="text-18px">Ascending</span>}
                    className="checked:bg-primary"
                    onClick={() => {
                      setAsc(true);
                      setDesc(false);
                      setStatus("Ascending");
                    }}
                    defaultChecked
                  />
                </MenuItem>
                <MenuItem className="flex justify-start p-0 hover:bg-gray-200 rounded-lg">
                  <Radio
                    id="Descending"
                    name="type"
                    label={<span className="text-18px">Descending</span>}
                    className="checked:bg-primary"
                    onClick={() => {
                      setAsc(false);
                      setDesc(true);
                      setStatus("Descending");
                    }}
                  />
                </MenuItem>
                <MenuItem className="flex justify-start p-0 hover:bg-gray-200 rounded-lg">
                  <Radio
                    id="This week"
                    name="type"
                    label={<span className="text-18px">This week</span>}
                    className="checked:bg-primary"
                    onClick={() => {
                      setSortbydatetime("THIS_WEEK");
                      setStatus("THIS_WEEK");
                    }}
                  />
                </MenuItem>
                <MenuItem className="flex justify-start p-0 hover:bg-gray-200 rounded-lg">
                  <Radio
                    id="This month"
                    name="type"
                    label={<span className="text-18px">This month</span>}
                    className="checked:bg-primary"
                    onClick={() => {
                      setSortbydatetime("THIS_MONTH");
                      setStatus("THIS_MONTH");
                    }}
                  />
                </MenuItem>
                <MenuItem className="flex justify-start p-0 hover:bg-gray-200 rounded-lg">
                  <Radio
                    id="This year"
                    name="type"
                    label={<span className="text-18px">This year</span>}
                    className="checked:bg-primary"
                    onClick={() => {
                      setSortbydatetime("THIS_YEAR");
                      setStatus("THIS_YEAR");
                    }}
                  />
                </MenuItem>
                </MenuList>
            </Menu>
          </div>
        </div>
        <div className="col-span-4 md:col-span-6 sm:grid-cols-1 flex items-center gap-x-5 h-11">
          <div className="flex items-center gap-x-3">
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"></path>
            </svg>
            <h4 className="font-semibold text-20px md:text-18px">Filter: </h4>
          </div>
          <div className="relative">
            <Menu
              open={openMenuTwo}
              handler={setOpenMenuTwo}
              dismiss={{
                itemPress: false,
              }}
            >
              <MenuHandler>
                <button className="flex items-center justify-between w-[200px]">
                  <p className="text-18px text-black font-ssp">
                    {filterStatus}
                  </p>
                  <ChevronDownIcon
                    strokeWidth={3}
                    className={`h-4 w-4 transition-transform ${
                      openMenuTwo ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </MenuHandler>
              <MenuList className="rounded-lg p-2 w-[200px] font-ssp">
                <MenuItem className="flex justify-start p-0 hover:bg-gray-200 rounded-lg">
                  <Radio
                    id="All Workspaces"
                    name="type"
                    label={<span className="text-18px">All Workspaces</span>}
                    className="checked:bg-primary"
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
                    defaultChecked
                  />
                </MenuItem>
                <MenuItem className="flex justify-start p-0 hover:bg-gray-200 rounded-lg">
                  <Radio
                    id="My Workspaces"
                    name="type"
                    label={<span className="text-18px">My Workspaces</span>}
                    className="checked:bg-primary"
                    onClick={() => {
                      handleFilterWorkspace(true);
                      setFilterStatus("My Workspaces");
                    }}
                  />
                </MenuItem>
                <MenuItem className="flex justify-start p-0 hover:bg-gray-200 rounded-lg">
                  <Radio
                    id="Other Workspaces"
                    name="type"
                    label={<span className="text-18px">Other Workspaces</span>}
                    className="checked:bg-primary"
                    onClick={() => {
                      handleFilterWorkspace(false);
                      setFilterStatus("Other Workspaces");
                    }}
                    d
                  />
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>
        <div className="md:col-span-1 col-span-4 h-11 -mt-2">
          <div className="flex justify-end relative items-center">
            <Collapse open={openSearch}>
              <Card>
                <CardBody>
                  <input
                    type="text"
                    placeholder="search"
                    className={`rounded-lg text-18px font-ssp border-gray-300 w-full focus:ring-accent focus:border-accent ml-6 -mt-10 transition-transform duration-300 ease-in-out transform ${
                      openSearch ? "translate-x-0" : "translate-x-full"
                    }`}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </CardBody>
              </Card>
            </Collapse>
            <button
              type="button"
              className="absolute mr-2 top-6 transition-opacity duration-500 ease-in-out opacity-100 hover:opacity-75"
              onClick={toggleOpen}
            >
              <img src={search} />
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-5" onScroll={() => handleScroll()}>
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
          <div className="col-span-12 absolute bottom-[40%] left-[55%]">
            <div className="flex flex-col items-center justify-center gap-y-1">
              <img src={emptybox} className="w-32 h-32" />
              <p className="font-semibold text-accent text-base">
                No Workspace
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-center items-center absolute left-[51%] bottom-6">
        {/* <ThemeProvider theme={theme}>
          <Pagination
            count={5}
            color="primary"
            page={no}
            onChange={handlePageNoChange}
          />
        </ThemeProvider> */}
      </div>
    </div>
  );
};