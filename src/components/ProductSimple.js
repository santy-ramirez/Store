import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function ProductSimple({
  name,
  price,
  category,
  IMAGE,
  deleProduct,

  addCard,
}) {
  const [rol, setRol] = useState("epa");
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  useEffect(() => {
    if (isLoggedIn) {
      console.log(user.authorities.map((a) => setRol(a.authority)));
    }
  }, []);
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${IMAGE})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"cover"}
            src={IMAGE}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            {category}
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            {name}
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={800} fontSize={"xl"}>
              {price}
            </Text>
            <Text textDecoration={"line-through"} color={"gray.600"}>
              $199
            </Text>
          </Stack>
          {rol == "ADMIN" && (
            <Text
              onClick={deleProduct}
              textDecoration={"line-through"}
              color={"gray.800"}
            >
              delete
            </Text>
          )}
          <Text
            onClick={addCard}
            textDecoration={"line-through"}
            color={"gray.800"}
          >
            add card
          </Text>
        </Stack>
      </Box>
    </Center>
  );
}
