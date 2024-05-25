import DataTable from "react-data-table-component";
import axios from "axios";
import { useEffect } from "react";
import { Text, Box } from "@chakra-ui/react";

const mockApiResponse = {
  status: "Upcoming",
  title: "Volunteering at orphanage",
  tokensOffered: 30,
  date: "2024-04-31",
  description: "A day of volunteer in orphanage home",
  organizationId: "BBOQh1286q0tLkrHiMA6",
  categories: "Indoor",
  maxPeople: 10,
  duration: 6,
  numPeople: 0,
  id: "VedMzhCHisZ9h0pebRRD",
  organization: {
    totalMembers: 2000,
    tokens: 1000,
    username: "helpsos",
    role: "organization",
    foundedDate: "1978-04-22",
    name: "HelpSOS",
    description: "A charity organization",
    activeAreas: "Welfare,Self-Development",
  },
};

const customStyles = {
  rows: {
    style: {
      minHeight: '72px',
    },
  },
  headCells: {
    style: {
      backgroundColor: '#d19352',
      color: '#000', 
      fontSize: '16px', 
    },
  },
  cells: {
    style: {
      backgroundColor: '#e8c49b',
      color: '#333',
      fontSize: '14px', 
    },
  },
};



const columns = [
  {
    name: "Status",
    selector: (row) => row.status,
    width: "15%",
  },
  {
    name: "Description",
    selector: (row) => row.description,
  },
  {
    name: "Categories",
    selector: (row) => row.categories,
  },
  {
    name: "Tokens Offered",
    selector: (row) => row.tokensOffered,
  },
  {
    name: "Duration (hr)",
    selector: (row) => row.duration,
  },
];

const data = [
  {
    id: 1,
    status: (
      <Text
        borderRadius="20px"
        lineHeight="14px"
        bgColor="#eaf7e1"
        padding="8px 14px"
        fontWeight="bold"
        color="darkgreen"
      >
        {mockApiResponse.status}
      </Text>
    ),
    description: <Text whiteSpace="normal">{mockApiResponse.description}</Text>,
    categories: mockApiResponse.categories,
    tokensOffered: mockApiResponse.tokensOffered,
    duration: mockApiResponse.duration,
  },
];

const Listings = () => {
  // Listings API call

  useEffect(() => {
    getAllListings();
  }, []);

  const url = `${
    import.meta.env.VITE_BACKEND_URL
  }/api/events/getEvents?categories=Indoor`;
  console.log("URL: ", url);
  const getAllListings = async () => {
    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_BACKEND_URL
        }/api/events/getEvents?categories=Indoor`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      // console.log("response: ", response);
      return response.data; 
    } catch (error) {
      console.error("Error fetching listings:", error);
      return [];
    }
  };

  return (
    <Box padding="24px">
      <DataTable columns={columns} data={data} selectableRows customStyles={customStyles}/>
    </Box>
  );
};

export default Listings;
