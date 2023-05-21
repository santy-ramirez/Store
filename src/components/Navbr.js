import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FiBell, FiChevronDown, FiCircle, FiMenu } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../slices/auth";
function Navbr({ onOpen, ...rest }) {
  const [rol, setRol] = useState("epa");
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const { push } = useRouter();
  console.log(rol);
  const dispatch = useDispatch();
  const headleDeslogarse = () => {
    dispatch(logout());
    push("/login");
  };

  useEffect(() => {
    if (isLoggedIn) {
      console.log(user.authorities.map((a) => setRol(a.authority)));
    }
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <Flex
          ml={{ base: 0 }}
          px={{ base: 4 }}
          height="20"
          alignItems="center"
          bg={useColorModeValue("white", "gray.900")}
          borderBottomWidth="1px"
          borderBottomColor={useColorModeValue("gray.200", "gray.700")}
          justifyContent={{ base: "space-between" }}
          {...rest}
        >
          {rol === "ADMIN" ? (
            <IconButton
              display={{ base: "flex", md: "none" }}
              onClick={onOpen}
              variant="outline"
              aria-label="open menu"
              icon={<FiMenu />}
            />
          ) : (
            <Link href={"/"}>
              <IconButton
                display={{ base: "flex" }}
                variant="outline"
                aria-label="open menu"
                icon={<FiCircle />}
              />
            </Link>
          )}

          <Link href="/">
            <Text
              display={{ base: "flex", md: "none" }}
              fontSize="2xl"
              fontFamily="monospace"
              fontWeight="bold"
            >
              Store
            </Text>
          </Link>

          <HStack spacing={{ base: "0", md: "6" }}>
            {/* <IconButton
            size="lg"
            variant="ghost"
            aria-label="open menu"
            icon={<FiBell />}
          /> */}
            <Flex alignItems={"center"}>
              <Menu>
                <MenuButton
                  py={2}
                  transition="all 0.3s"
                  _focus={{ boxShadow: "none" }}
                >
                  <HStack>
                    <Avatar
                      size={"sm"}
                      src={
                        "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                      }
                    />
                    <VStack
                      display={{ base: "none", md: "flex" }}
                      alignItems="flex-start"
                      spacing="1px"
                      ml="2"
                    >
                      <Text fontSize="sm" color="gray.600">
                        {user.user}
                      </Text>
                      {rol === "ADMIN" ? (
                        <Text fontSize="sm" color="gray.600">
                          admin
                        </Text>
                      ) : (
                        <Text fontSize="sm" color="gray.600">
                          user
                        </Text>
                      )}
                    </VStack>
                    <Box display={{ base: "none", md: "flex" }}>
                      <FiChevronDown />
                    </Box>
                  </HStack>
                </MenuButton>
                <MenuList
                  bg={useColorModeValue("white", "gray.900")}
                  borderColor={useColorModeValue("gray.200", "gray.700")}
                >
                  <MenuItem>Profile</MenuItem>
                  <MenuItem>Settings</MenuItem>
                  {rol === "ADMIN" ? (
                    <Link href={"/admindesboard"}>
                      <MenuItem>Panel de admin</MenuItem>
                    </Link>
                  ) : (
                    <Link href={"/admindesboard"}>
                      <MenuItem>Panel de user</MenuItem>
                    </Link>
                  )}

                  <MenuDivider />
                  <MenuItem onClick={headleDeslogarse}>Sign out</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </HStack>
        </Flex>
      ) : (
        <Flex
          ml={{ base: 0 }}
          px={{ base: 4 }}
          height="20"
          alignItems="center"
          bg={useColorModeValue("white", "gray.900")}
          borderBottomWidth="1px"
          borderBottomColor={useColorModeValue("gray.200", "gray.700")}
          justifyContent={{ base: "space-between" }}
          {...rest}
        >
          <IconButton
            display={{ base: "flex" }}
            variant="outline"
            aria-label="open menu"
            icon={<FiCircle />}
          />

          <Link href="/">
            <Text
              display={{ base: "flex" }}
              fontSize="2xl"
              fontFamily="monospace"
              fontWeight="bold"
            >
              Store
            </Text>
          </Link>

          <HStack spacing={{ base: "0", md: "6" }}>
            {/* <IconButton
            size="lg"
            variant="ghost"
            aria-label="open menu"
            icon={<FiBell />}
          /> */}
            <Flex alignItems={"center"}>
              <Menu>
                <MenuButton
                  py={2}
                  transition="all 0.3s"
                  _focus={{ boxShadow: "none" }}
                >
                  <HStack>
                    <Box>registrate o logearte</Box>
                  </HStack>
                </MenuButton>
                <MenuList
                  bg={useColorModeValue("white", "gray.900")}
                  borderColor={useColorModeValue("gray.200", "gray.700")}
                >
                  <Link href={"/register"}>
                    <MenuItem>registrate</MenuItem>
                  </Link>
                  <MenuDivider />
                  <Link href={"/login"}>
                    <MenuItem>logearte</MenuItem>
                  </Link>
                </MenuList>
              </Menu>
            </Flex>
          </HStack>
        </Flex>
      )}
    </div>
  );
}
export default Navbr;
