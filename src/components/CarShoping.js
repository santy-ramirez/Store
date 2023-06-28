import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  HStack,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

import React, { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { MdShoppingCart } from "react-icons/md";

function CarShoping({ cardPay }) {
  const [total, setTotal] = useState(0);
  useMemo(() => {
    cardPay.map((product) => setTotal(product.price + total));
  }, [cardPay]);

  return (
    <Popover>
      <PopoverTrigger>
        <Button>
          <IconButton
            size="lg"
            variant="ghost"
            aria-label="open menu"
            icon={<MdShoppingCart />}
          />
          {cardPay.length}
        </Button>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverHeader>Card Shoping</PopoverHeader>
          <PopoverCloseButton />
          <PopoverBody>
            {cardPay.map((a, i) => (
              <HStack>
                <Image
                  size="sm"
                  width={50}
                  height={20}
                  src={a.image}
                  alt="Caffe Latte"
                />
                <Stack>
                  <Text size="sm" py="2">
                    {a.category}
                  </Text>
                  <Text size="sm" py="2">
                    ${a.price}
                  </Text>
                </Stack>
              </HStack>
            ))}
          </PopoverBody>
          <PopoverFooter>total:{total} </PopoverFooter>
        </PopoverContent>
      </Portal>
    </Popover>
  );
}

export default CarShoping;
