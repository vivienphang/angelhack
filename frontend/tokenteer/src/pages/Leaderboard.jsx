import DataTable from "react-data-table-component";
import { Box, Image } from "@chakra-ui/react";
import NavigatorBadge from "../assets/badgesIcons/navigator.png";
import AdventurerBadge from "../assets/badgesIcons/adventurer.png";
import ExplorerBadge from "../assets/badgesIcons/explorer.png";
import PioneerBadge from "../assets/badgesIcons/pioneer.png";
import VoyagerBadge from "../assets/badgesIcons/voyager.png";

const customStyles = {
  rows: {
    style: {
      minHeight: "60px",
    },
  },
  headCells: {
    style: {
      backgroundColor: "#d19352",
      color: "#000",
      fontSize: "16px",
    },
  },
  cells: {
    style: {
      fontSize: "14px",
    },
  },
  pagination: {
    style: {
      padding: "10px",
    },
    pageButtonsStyle: {
      "@media (max-width: 768px)": {
        margin: "0 4px", // Less margin between buttons on smaller screens
        width: "30px", // Smaller buttons on mobile
        height: "30px",
      },
      borderRadius: "50%",
      height: "40px",
      width: "40px",
      padding: "8px",
      margin: "8px",
      backgroundColor: "rgba(0, 0, 0, 0.1)",
      color: "#FFFFFF",
      fill: "#FFFFFF",
      "&:disabled": {
        cursor: "not-allowed",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      },
      "&:hover:not(:disabled)": {
        backgroundColor: "rgba(0, 0, 0, 0.2)",
      },
    },
  },
  tableWrapper: {
    style: {
      maxHeight: "calc(100vh - 250px)", // Adjust calculation based on your header, footer, etc.
      overflowY: "auto",
    },
  },
};

const badgeImages = {
  adventurer: AdventurerBadge,
  explorer: ExplorerBadge,
  voyages: VoyagerBadge,
  navigator: NavigatorBadge,
  pioneer: PioneerBadge,
};

const mapBadgeToIcon = (badgeEarned) => {
  return (
    <Image src={badgeImages[badgeEarned]} alt={badgeEarned} boxSize="100px" />
  );
};

const columns = [
  {
    name: "Rank",
    selector: (row, index) => index + 1,
    sortable: true,
    grow: 0,
  },
  {
    name: "User",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Tokens",
    selector: (row) => row.tokens,
  },
  {
    name: "Badge Earned",
    selector: (row) => mapBadgeToIcon(row.badges),
  },
];

// Mock data for leaderboard
const participants = [
  { name: "Alice", tokens: 45, badges: "adventurer" },
  { name: "Eve", tokens: 12, badges: "explorer" },
  { name: "Bob", tokens: 42, badges: "adventurer" },
  { name: "Charlie", tokens: 32, badges: "voyages" },
  { name: "David", tokens: 29, badges: "explorer" },
  { name: "Alice", tokens: 45, badges: "adventurer" },
  { name: "Eve", tokens: 12, badges: "explorer" },
  { name: "Bob", tokens: 42, badges: "adventurer" },
  { name: "Charlie", tokens: 32, badges: "voyages" },
  { name: "David", tokens: 29, badges: "explorer" },
  { name: "Alice", tokens: 45, badges: "adventurer" },
  { name: "Eve", tokens: 12, badges: "explorer" },
  { name: "Bob", tokens: 42, badges: "adventurer" },
  { name: "Charlie", tokens: 32, badges: "voyages" },
  { name: "David", tokens: 29, badges: "explorer" },
  { name: "Alice", tokens: 45, badges: "adventurer" },
  { name: "Eve", tokens: 12, badges: "explorer" },
  { name: "Bob", tokens: 42, badges: "adventurer" },
  { name: "Charlie", tokens: 32, badges: "voyages" },
  { name: "David", tokens: 29, badges: "explorer" },
].sort((a, b) => b.tokens - a.tokens);

const Leaderboard = () => {
  const paginationOptions = {
    rowsPerPageText: "Rows per page:",
    rangeSeparatorText: "of",
    selectAllRowsItem: true,
    selectAllRowsItemText: "All",
  };
  const customPaginationOptions = {
    rowsPerPageOptions: [5],
    initialRowsPerPage: 5,
  };

  return (
    <Box padding="20px" boxShadow="0 2px 4px rgba(0,0,0,0.1)" height="60%">
      <h2 style={{ textAlign: "center" }}>Leaderboard</h2>
      <DataTable
        columns={columns}
        data={participants}
        defaultSortFieldId={3}
        highlightOnHover
        pagination
        paginationComponentOptions={paginationOptions}
        paginationRowsPerPageOptions={
          customPaginationOptions.rowsPerPageOptions
        }
        paginationPerPage={customPaginationOptions.initialRowsPerPage}
        customStyles={customStyles}
        defaultSortAsc={false}
      />
    </Box>
  );
};

export default Leaderboard;
