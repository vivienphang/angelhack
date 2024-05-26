import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";
import { Text, Box } from "@chakra-ui/react";
import { getEvents } from "../../api/events";

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

const getDataSource = (data) => {
  let dataSource = [];
  let i = 1;
  for (let d of data) {
    dataSource.push({
      id: i,
      status: (
        <Text
          borderRadius="20px"
          lineHeight="14px"
          bgColor="#eaf7e1"
          padding="8px 14px"
          fontWeight="bold"
          color="darkgreen"
        >
          {d.status}
        </Text>
      ),
      description: <Text whiteSpace="normal">{d.description}</Text>,
      categories: d.categories,
      tokensOffered: d.tokensOffered,
      duration: d.duration,
    });
    i++;
  }
  return dataSource;
}

const Listings = () => {
  const [listingData, setListingData] = useState([]);

  useEffect(() => {
    getAllListings();
  }, []);

  const getAllListings = async () => {
    const data = await getEvents();
    console.log(data);
    setListingData(data);
  };

  return (
    <Box id="listings-box" padding="24px" minH="80px" w="100%">
      <DataTable columns={columns} data={getDataSource(listingData)} selectableRows customStyles={customStyles} />
    </Box>
  );
};

export default Listings;
