import MultiSteps from "@/components/MultiSteps";
import Navbr from "@/components/Navbr";
import { Center, Stack, VStack } from "@chakra-ui/react";
import React from "react";

function pay() {
  return (
    <>
      <Navbr />
      <br />
      <Center>
        <h2>Products Pay</h2>
      </Center>
      <VStack>
        <MultiSteps />
      </VStack>
    </>
  );
}

export default pay;
