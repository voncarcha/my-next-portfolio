import { Flex, Spacer, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

function Nav() {
  return (
    <Flex
      w="100%"
      p={{ base: 2, md: 4 }}
      align="center"
      justify="space-between"
    >
      <Image
        src="/assets/svg/logo-dark.svg"
        alt="logo"
        height={40}
        width={40}
      />
      <Flex>
        <Text fontSize={{ base: "14px", xs: "18px", "2xl": "26px" }} px={2}>
          About
        </Text>
        <Text fontSize={{ base: "14px", xs: "18px", "2xl": "26px" }} px={2}>
          Works
        </Text>
      </Flex>
    </Flex>
  );
}

export default Nav;
