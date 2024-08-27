/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "./utils";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function HoverButton(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { "Real Button": {}, HoverButton: {} },
      variantValues: { property1: "Default" },
    },
    {
      overrides: {
        "Real Button": {},
        HoverButton: { backgroundColor: "rgba(234,194,11,1)" },
      },
      variantValues: { property1: "Variant2" },
    },
    {
      overrides: {
        "Real Button": {},
        HoverButton: { backgroundColor: "rgba(110,151,247,1)" },
      },
      variantValues: { property1: "Variant3" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="10px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      borderRadius="71px"
      padding="28px 121px 28px 121px"
      backgroundColor="rgba(217,217,217,1)"
      display="flex"
      {...getOverrideProps(overrides, "HoverButton")}
      {...rest}
    >
      <Text
        fontFamily="Archivo Black"
        fontSize="64px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="69.63200378417969px"
        textAlign="right"
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
        children="Real Button"
        {...getOverrideProps(overrides, "Real Button")}
      ></Text>
    </Flex>
  );
}
