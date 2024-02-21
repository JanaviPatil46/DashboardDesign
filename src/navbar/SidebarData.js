import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { MdOutlineMail } from "react-icons/md";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { VscAccount } from "react-icons/vsc";
import { GrDocumentStore } from "react-icons/gr";
import { LuLayoutTemplate, LuWorkflow ,LuContact2 } from "react-icons/lu";
import { RiBillLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
const SidebarItems = [
  {
    title: "Insights",
    path: "/",
    icon: <AiOutlineAppstoreAdd />,
  },
  {
    title: "Inbox +",
    path: "/Card",
    icon: <MdOutlineMail />,
  },
  {
    title: "Clients", // Main menu item with submenus
    icon: <LiaUserFriendsSolid />,
    subNavOpen: false,
    subNav: [
      {
        title: "Accounts",
        path: "/submenu1",
        icon: <VscAccount />,
      },
      {
        title: "Contact",
        path: "/submenu2",
        icon: <LuContact2 />,
      },

    ],
  },

  {
    title: "Workflow", // Main menu item with submenus
    icon: <LuWorkflow />,
    subNavOpen: false,
    subNav: [
      {
        title: "Accounts",
        path: "/submenu1",
        icon: <VscAccount />,
      },
      {
        title: "Contact",
        path: "/submenu2",
        icon: <LuContact2 />,
      },

    ],
  },

  {
    title: "Documents", // Main menu item with submenus
    icon: <GrDocumentStore />,
    subNavOpen: false,
    subNav: [
      {
        title: "Accounts",
        path: "/submenu1",
        icon: <VscAccount />,
      },
      {
        title: "Contact",
        path: "/submenu2",
        icon: <LuContact2 />,
      },

    ],
  },

  {
    title: "Billing", // Main menu item with submenus
    icon: <RiBillLine />,
    subNavOpen: false,
    subNav: [
      {
        title: "Accounts",
        path: "/submenu1",
        icon: <VscAccount />,
      },
      {
        title: "Contact",
        path: "/submenu2",
        icon: <LuContact2 />,
      },

    ],
  },

  {
    title: "Templates", // Main menu item with submenus
    icon: <LuLayoutTemplate />,
    subNavOpen: false,
    subNav: [
      {
        title: "Accounts",
        path: "/submenu1",
        icon: <VscAccount />,
      },
      {
        title: "Contact",
        path: "/submenu2",
        icon: <LuContact2 />,
      },

    ],
  },

  {
    title: "Settings", // Main menu item with submenus
    icon: <IoSettingsOutline />,
    subNavOpen: false,
    subNav: [
      {
        title: "Accounts",
        path: "/submenu1",
        icon: <VscAccount />,
      },
      {
        title: "Contact",
        path: "/submenu2",
        icon: <LuContact2 />,
      },

    ],
  },

  
];

export default SidebarItems;
