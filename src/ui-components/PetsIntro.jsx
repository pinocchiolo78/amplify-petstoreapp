/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { generateClient } from "aws-amplify/api";
import { deletePet } from "../graphql/mutations";
import { getOverrideProps } from "./utils";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
const client = generateClient();
export default function PetsIntro(props) {
  const { pet, overrides, ...rest } = props;
  const buttonSlashDeleteOnClick = async () => {
    await client.graphql({
      query: deletePet.replaceAll("__typename", ""),
      variables: {
        input: {
          id: pet?.id,
        },
      },
    });
  };
  const deleteOnClick = async () => {
    await client.graphql({
      query: deletePet.replaceAll("__typename", ""),
      variables: {
        input: {
          id: pet?.id,
        },
      },
    });
  };
  return (
    <Flex
      gap="26px"
      direction="column"
      width="379px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="25px 0px 49px 0px"
      backgroundColor="rgba(161,155,120,1)"
      {...getOverrideProps(overrides, "PetsIntro")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="row"
        width="232px"
        height="75px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        border="5px SOLID rgba(110,151,247,1)"
        borderRadius="11px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(110,151,247,0)"
        onClick={() => {
          buttonSlashDeleteOnClick();
        }}
        {...getOverrideProps(overrides, "Button/Delete")}
      >
        <Text
          fontFamily="Roboto"
          fontSize="32px"
          fontWeight="700"
          color="rgba(110,151,247,1)"
          lineHeight="37.5px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Delete"
          onClick={() => {
            deleteOnClick();
          }}
          {...getOverrideProps(overrides, "Delete")}
        ></Text>
      </Flex>
      <Flex
        padding="0px 0px 0px 0px"
        width="201px"
        height="201px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "coremask")}
      >
        <Image
          width="201px"
          height="201px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src={pet?.image}
          {...getOverrideProps(overrides, "coreimg")}
        ></Image>
      </Flex>
      <Text
        fontFamily="Righteous"
        fontSize="40px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="49.66796875px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="77px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={`${"Name: "}${pet?.name}`}
        {...getOverrideProps(overrides, "nametxt")}
      ></Text>
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 25")}
      >
        <Text
          fontFamily="Roboto"
          fontSize="20px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="23.4375px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={pet?.about}
          {...getOverrideProps(overrides, "abouttxt")}
        ></Text>
      </Flex>
      <Text
        fontFamily="Roboto"
        fontSize="32px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="37.5px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={`${"Age: "}${pet?.age}`}
        {...getOverrideProps(overrides, "agetxt")}
      ></Text>
      <Text
        fontFamily="Roboto"
        fontSize="32px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="37.5px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={pet?.breed}
        {...getOverrideProps(overrides, "breedtxt")}
      ></Text>
      <Text
        fontFamily="Roboto"
        fontSize="32px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="37.5px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={`${"Color: "}${pet?.color}`}
        {...getOverrideProps(overrides, "colortxt")}
      ></Text>
      <Flex
        gap="10px"
        direction="row"
        width="232px"
        height="75px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        borderRadius="11px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(245,168,61,1)"
        {...getOverrideProps(overrides, "Button/Profile")}
      >
        <Text
          fontFamily="Roboto"
          fontSize="32px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="37.5px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Profile"
          {...getOverrideProps(overrides, "Profile")}
        ></Text>
      </Flex>
      <Flex
        gap="10px"
        direction="row"
        width="232px"
        height="75px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        borderRadius="11px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(245,168,61,1)"
        {...getOverrideProps(overrides, "Button/Update")}
      >
        <Text
          fontFamily="Roboto"
          fontSize="32px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="37.5px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Update"
          {...getOverrideProps(overrides, "Update")}
        ></Text>
      </Flex>
    </Flex>
  );
}
