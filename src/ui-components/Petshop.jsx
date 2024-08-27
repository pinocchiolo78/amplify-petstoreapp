/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { useEffect, useState } from "react";
import { getOverrideProps } from "./utils";
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
import HoverButton from "./HoverButton";
export default function Petshop(props) {
  const { pet, overrides, ...rest } = props;
  const [coreimgSrc, setCoreimgSrc] = useState(undefined);
  const nametxtOnClick = () => {
    setCoreimgSrc(
      "https://fbi.cults3d.com/uploaders/16266097/illustration-file/4f26f5ea-5934-4388-9d69-cfae8cd3eb1f/IRONMAN.PNG"
    );
  };
  useEffect(() => {
    if (
      coreimgSrc === undefined &&
      pet !== undefined &&
      pet?.image !== undefined
    )
      setCoreimgSrc(pet?.image);
  }, [pet]);
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
      padding="0px 0px 49px 0px"
      backgroundColor="rgba(161,155,120,1)"
      {...getOverrideProps(overrides, "Petshop")}
      {...rest}
    >
      <View
        width="unset"
        height="82px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(63,72,90,1)"
        {...getOverrideProps(overrides, "Nav")}
      >
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          position="absolute"
          top="22px"
          right="14px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 15")}
        >
          <View
            width="37px"
            height="37px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(254,61,61,1)"
            {...getOverrideProps(overrides, "Rectangle 2916830")}
          ></View>
          <Icon
            width="37px"
            height="37px"
            viewBox={{ minX: 0, minY: 0, width: 37, height: 37 }}
            paths={[
              {
                d: "M37 18.5C37 28.7173 28.7173 37 18.5 37C8.28273 37 0 28.7173 0 18.5C0 8.28273 8.28273 0 18.5 0C28.7173 0 37 8.28273 37 18.5Z",
                fill: "rgba(245,168,61,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Ellipse 5")}
          ></Icon>
          <Icon
            width="49px"
            height="49px"
            viewBox={{ minX: 0, minY: 0, width: 49, height: 49 }}
            paths={[
              {
                d: "M24.5 0L45.7176 36.75L3.28238 36.75L24.5 0Z",
                fill: "rgba(110,151,247,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Polygon 816832")}
          ></Icon>
        </Flex>
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          position="absolute"
          top="22px"
          right="14px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 16")}
        >
          <View
            width="37px"
            height="37px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(254,61,61,1)"
            {...getOverrideProps(overrides, "Rectangle 30")}
          ></View>
          <Icon
            width="37px"
            height="37px"
            viewBox={{ minX: 0, minY: 0, width: 37, height: 37 }}
            paths={[]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Rectangle 2916837")}
          ></Icon>
          <Icon
            width="49px"
            height="49px"
            viewBox={{ minX: 0, minY: 0, width: 49, height: 49 }}
            paths={[
              {
                d: "M24.5 0L45.7176 36.75L3.28238 36.75L24.5 0Z",
                fill: "rgba(110,151,247,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Polygon 816838")}
          ></Icon>
        </Flex>
        <Image
          width="62px"
          height="62px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="16px"
          left="28px"
          borderRadius="10px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "logo 3")}
        ></Image>
      </View>
      <HoverButton
        display="flex"
        gap="10px"
        direction="row"
        width="329px"
        height="64px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        borderRadius="71px"
        padding="28px 121px 28px 121px"
        backgroundColor="rgba(217,217,217,1)"
        property1="Default"
        {...getOverrideProps(overrides, "Deletebtn")}
      ></HoverButton>
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
        <Icon
          width="201px"
          height="201px"
          viewBox={{ minX: 0, minY: 0, width: 201, height: 201 }}
          paths={[
            {
              d: "M201 100.5C201 156.005 156.005 201 100.5 201C44.9954 201 0 156.005 0 100.5C0 44.9954 44.9954 0 100.5 0C156.005 0 201 44.9954 201 100.5Z",
              fill: "rgba(217,217,217,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          {...getOverrideProps(overrides, "Ellipse 9")}
        ></Icon>
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
          src={coreimgSrc}
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
        onClick={() => {
          nametxtOnClick();
        }}
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
          children={`${"Desc: "}${pet?.about}`}
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
        children={pet?.color}
        {...getOverrideProps(overrides, "colortxt")}
      ></Text>
      <HoverButton
        display="flex"
        gap="10px"
        direction="row"
        width="329px"
        height="64px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        borderRadius="71px"
        padding="28px 121px 28px 121px"
        backgroundColor="rgba(217,217,217,1)"
        property1="Default"
        {...getOverrideProps(overrides, "Profilebtn")}
      ></HoverButton>
      <HoverButton
        display="flex"
        gap="10px"
        direction="row"
        width="329px"
        height="64px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        borderRadius="71px"
        padding="28px 121px 28px 121px"
        backgroundColor="rgba(217,217,217,1)"
        property1="Default"
        {...getOverrideProps(overrides, "Updatebtn")}
      ></HoverButton>
    </Flex>
  );
}
