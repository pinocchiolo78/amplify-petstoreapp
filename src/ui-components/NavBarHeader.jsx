/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import Logo1 from "./Logo1";
import { Flex, Text, View } from "@aws-amplify/ui-react";
import HoverButtonImgPark from "./HoverButtonImgPark";
export default function NavBarHeader(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="40px"
      direction="row"
      width="1440px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      boxShadow="0px 2px 6px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.15000000596046448)"
      padding="24px 32px 24px 32px"
      backgroundColor="rgba(233,249,252,1)"
      {...getOverrideProps(overrides, "NavBarHeader")}
      {...rest}
    >
      <Flex
        gap="40px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 321184372")}
      >
        <Logo1
          width="117px"
          height="117px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          src="https://media.istockphoto.com/id/1942765560/photo/yellow-cat-or-dog-paw-icon-isolated-on-white-background.jpg?s=1024x1024&w=is&k=20&c=XozUKRZgRX9Fp8qvX6_rIF7m3E0FzsatUoCOR-EBMKE="
          {...getOverrideProps(overrides, "logo 1")}
        ></Logo1>
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="700"
          color="rgba(92,102,112,1)"
          lineHeight="24px"
          textAlign="left"
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
          children="Add Pet"
          {...getOverrideProps(overrides, "Add Pet")}
        ></Text>
      </Flex>
      <Flex
        gap="32px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-end"
        alignItems="center"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 321184377")}
      >
        <View
          width="24px"
          height="24px"
          {...getOverrideProps(overrides, "MyIcon")}
        ></View>
        <HoverButtonImgPark
          width="64px"
          height="64px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          src="https://media.istockphoto.com/id/1942765560/photo/yellow-cat-or-dog-paw-icon-isolated-on-white-background.jpg?s=1024x1024&w=is&k=20&c=XozUKRZgRX9Fp8qvX6_rIF7m3E0FzsatUoCOR-EBMKE="
          {...getOverrideProps(overrides, "Hover Button/Img/Park")}
        ></HoverButtonImgPark>
      </Flex>
    </Flex>
  );
}
