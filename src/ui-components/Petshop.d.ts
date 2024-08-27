/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { HoverButtonProps } from "./HoverButton";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PetshopOverridesProps = {
    Petshop?: PrimitiveOverrideProps<FlexProps>;
    Nav?: PrimitiveOverrideProps<ViewProps>;
    "Frame 15"?: PrimitiveOverrideProps<FlexProps>;
    "Rectangle 2916830"?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 5"?: PrimitiveOverrideProps<IconProps>;
    "Polygon 816832"?: PrimitiveOverrideProps<IconProps>;
    "Frame 16"?: PrimitiveOverrideProps<FlexProps>;
    "Rectangle 30"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 2916837"?: PrimitiveOverrideProps<IconProps>;
    "Polygon 816838"?: PrimitiveOverrideProps<IconProps>;
    "logo 3"?: PrimitiveOverrideProps<ImageProps>;
    Deletebtn?: HoverButtonProps;
    coremask?: PrimitiveOverrideProps<FlexProps>;
    "Ellipse 9"?: PrimitiveOverrideProps<IconProps>;
    coreimg?: PrimitiveOverrideProps<ImageProps>;
    nametxt?: PrimitiveOverrideProps<TextProps>;
    "Frame 25"?: PrimitiveOverrideProps<FlexProps>;
    abouttxt?: PrimitiveOverrideProps<TextProps>;
    agetxt?: PrimitiveOverrideProps<TextProps>;
    breedtxt?: PrimitiveOverrideProps<TextProps>;
    colortxt?: PrimitiveOverrideProps<TextProps>;
    Profilebtn?: HoverButtonProps;
    Updatebtn?: HoverButtonProps;
} & EscapeHatchProps;
export declare type PetshopProps = React.PropsWithChildren<Partial<FlexProps> & {
    pet?: any;
} & {
    overrides?: PetshopOverridesProps | undefined | null;
}>;
export default function Petshop(props: PetshopProps): React.ReactElement;
