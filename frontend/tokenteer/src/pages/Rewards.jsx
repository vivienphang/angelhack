import {
  Box,
  Card,
  CardBody,
  Stack,
  Heading,
  CardFooter,
  Button,
  Text,
} from "@chakra-ui/react";
import { getPartners } from "../../api/partners";
import { useEffect, useState } from "react";

const Rewards = () => {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    getAllPartners();
  }, []);

  const getAllPartners = async () => {
    console.log('get partners...')
    const data = await getPartners();
    console.log(data);
    // const compiledDeals = data.map((deals) => console.log(deals))
    setPartners(data);
  };

  return (
    <Box display="flex" flexDirection="column" padding="24px">
      {partners &&
        partners.map((partner) => (
          <Card
            key={partner.id}
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
            bgColor="white"
            padding="14px 24px"
            borderRadius="14px"
            id="rewards-card"
            mb="14px"
          >
            <Stack>
              <CardBody>
                <Heading size="md">{partner.name}</Heading>
                {partner.deals &&
                  partner.deals.map((deal, i) => (
                    <Text key={i}>
                      {deal.name} - {deal.description}
                    </Text>
                  ))}
              </CardBody>
              <CardFooter>
                <Button variant="solid" colorScheme="blue">
                  Redeem
                </Button>
              </CardFooter>
            </Stack>
          </Card>
        ))}
    </Box>
  );
};

export default Rewards;
