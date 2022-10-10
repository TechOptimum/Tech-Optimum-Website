
import { ExternalLinkIcon } from "@chakra-ui/icons";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Link } from '@chakra-ui/react'
import { BsArrowUpRight } from "react-icons/bs";
import { Container, Flex, Heading, Text, Button, Icon } from "@chakra-ui/react";

export default function HeroHeader() {
  return (
    <>
      <Flex height={"80vh"} width={"100%"} direction={"column"}>
        <Flex direction={"column"}  marginLeft={["2rem", "7rem"]}>
          <Heading className="gradient-title" fontSize="5xl" marginBottom={"2.5rem"}>
            Learn. Participate. Accomplish.
          </Heading>
          <Text
            fontSize="2xl"
            color="primary"
            marginBottom={"2.5rem"}
            width={"85%"}
          >
            A student-led organization helping and inspiring future leaders of
            the tech industry worldwide.
          </Text>
          <Button
            backgroundColor="transparent"
            _hover={{ 
              backgroundColor: "transparent" ,
              color: "#9DB2F6",
            }}
            width="fit-content"
            padding={"0"}
            color="#1B76FF"
            fontWeight={"400"}
         
            rightIcon={
              <ExternalLinkIcon position={"relative"} bottom={"2px"} />
            }
          >
            LEARN MORE
          </Button>
        </Flex>
        
        <Container
         margin={"0 auto"}
          maxWidth={"800px"}
          backgroundColor="#29368C"
          height={["200px","150px"]}
          mx="2rem  "
          borderRadius={"36px"}
          marginTop={"5rem"}
          as={motion.div}
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: 1,
            transition: { duration: 1 },
            ease: "easeIn",
            y: 0,
          }}
        >
          <Flex direction={["column", "row"]}alignItems={"center"} height={"100%"}>
            <Heading
              color="white"
              fontSize="2xl"
              fontWeight={"400"}
              width={"35%"}
              textAlign={"center"}
            >
              <CountUp end={40} duration={4} useEasing={true} delay={1.5} />+
              FREE PROGRAMMING COURSES
            </Heading>
            <Heading
              color="white"
              fontSize="2xl"
              fontWeight={"400"}
              width={"5%"}
            >
              +
            </Heading>
            <Heading
              color="white"
              fontSize="2xl"
              fontWeight={"400"}
              width={"30%"}
              textAlign={"center"}
            >
              INTERNSHIP FINDER
            </Heading>
            <Heading
              color="white"
              fontSize="2xl"
              fontWeight={"400"}
              width={"5%"}
            >
              +
            </Heading>
            <Heading
              color="white"
              fontSize="2xl"
              fontWeight={"400"}
              width={"30%"}
              textAlign={"center"}
            >
              <CountUp end={300} duration={4} useEasing={true} delay={1.5} />+
              COMMUNITY MEMBERS
            </Heading>
            <Link href='./join' 
            transition="500ms">
            <Icon className="diagonal-button" as={BsArrowUpRight} />
            </Link>
          </Flex>
         
        </Container>
      </Flex>
    </>
  );
}
