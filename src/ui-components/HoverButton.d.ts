/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type HoverButtonOverridesProps = {
    HoverButton?: PrimitiveOverrideProps<FlexProps>;
    "Real Button"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type HoverButtonProps = React.PropsWithChildren<Partial<FlexProps> & {
    property1?: "Default" | "Variant2" | "Variant3";
} & {
    overrides?: HoverButtonOverridesProps | undefined | null;
}>;
export default function HoverButton(props: HoverButtonProps): React.ReactElement;
