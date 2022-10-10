import {
  SimpleGrid,
  Flex,
  Heading,
  Box,
  Image,
  transition,
  Center,
} from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Link } from "@chakra-ui/react";

export default function HackathonSponsors() {
  return (
    <>
      <Heading
        textAlign={"center"}
        color="primary"
        fontSize="6xl"
        mt="3rem"
        marginBottom={"1rem"}
      >
        Sponsors
      </Heading>
      <SimpleGrid
        borderRadius={"20px"}
        padding="3rem"
        backgroundColor={"#05101D"}
        margin={"auto"}
        maxWidth={"1100px"}
        minChildWidth="200px"
        spacing="20px"
  
      >
        <Box>
          <Image src="./xyz.png"></Image>
        </Box>
        <Box>
          <Image src="./taskade.png"></Image>
        </Box>
        <Box>
          <Image src="./echo3d-2.png"></Image>
        </Box>
        <Box>
          <Image minWidth={"300px"}src="./aops.png"></Image>
        </Box>
        <Box>
          <Image src="./Replit.png"></Image>
        </Box>
        <Box>
          <Image src="./Slingshot.png"></Image>
        </Box>
        <Box maxWidth={"150px"}>
          <Image src="./Wolfram-Language-Sponsor.png"></Image>
        </Box>
      </SimpleGrid>
    
    </>
  );
}
