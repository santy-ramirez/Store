import {
  Button,
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
  Text,
} from "@chakra-ui/react";
import React from "react";
import { MdShoppingCart } from "react-icons/md";

function CarShoping({ cardPay }) {
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
              <Text key={i}> {a.name}</Text>
            ))}
          </PopoverBody>
          <PopoverFooter>This is the footer</PopoverFooter>
        </PopoverContent>
      </Portal>
    </Popover>
  );
}

export default CarShoping;
