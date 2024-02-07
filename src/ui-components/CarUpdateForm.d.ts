/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Car } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CarUpdateFormInputValues = {
    name?: string;
    inUse?: boolean;
    battery?: number;
    connected?: boolean;
};
export declare type CarUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    inUse?: ValidationFunction<boolean>;
    battery?: ValidationFunction<number>;
    connected?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CarUpdateFormOverridesProps = {
    CarUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    inUse?: PrimitiveOverrideProps<SwitchFieldProps>;
    battery?: PrimitiveOverrideProps<TextFieldProps>;
    connected?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type CarUpdateFormProps = React.PropsWithChildren<{
    overrides?: CarUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    car?: Car;
    onSubmit?: (fields: CarUpdateFormInputValues) => CarUpdateFormInputValues;
    onSuccess?: (fields: CarUpdateFormInputValues) => void;
    onError?: (fields: CarUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CarUpdateFormInputValues) => CarUpdateFormInputValues;
    onValidate?: CarUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CarUpdateForm(props: CarUpdateFormProps): React.ReactElement;
