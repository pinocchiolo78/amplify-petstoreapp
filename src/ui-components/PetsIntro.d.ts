/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type PetsIntroOverridesProps = {
    PetsIntro?: PrimitiveOverrideProps<FlexProps>;
    "Button/Delete"?: PrimitiveOverrideProps<FlexProps>;
    Delete?: PrimitiveOverrideProps<TextProps>;
    coremask?: PrimitiveOverrideProps<FlexProps>;
    coreimg?: PrimitiveOverrideProps<ImageProps>;
    nametxt?: PrimitiveOverrideProps<TextProps>;
    "Frame 25"?: PrimitiveOverrideProps<FlexProps>;
    abouttxt?: PrimitiveOverrideProps<TextProps>;
    agetxt?: PrimitiveOverrideProps<TextProps>;
    breedtxt?: PrimitiveOverrideProps<TextProps>;
    colortxt?: PrimitiveOverrideProps<TextProps>;
    "Button/Profile"?: PrimitiveOverrideProps<FlexProps>;
    Profile?: PrimitiveOverrideProps<TextProps>;
    "Button/Update"?: PrimitiveOverrideProps<FlexProps>;
    Update?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type PetsIntroProps = React.PropsWithChildren<Partial<FlexProps> & {
    pet?: any;
} & {
    overrides?: PetsIntroOverridesProps | undefined | null;
}>;
export default function PetsIntro(props: PetsIntroProps): React.ReactElement;
