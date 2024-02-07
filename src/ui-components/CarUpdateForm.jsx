/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Car } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function CarUpdateForm(props) {
  const {
    id: idProp,
    car: carModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    inUse: false,
    battery: "",
    connected: false,
  };
  const [name, setName] = React.useState(initialValues.name);
  const [inUse, setInUse] = React.useState(initialValues.inUse);
  const [battery, setBattery] = React.useState(initialValues.battery);
  const [connected, setConnected] = React.useState(initialValues.connected);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = carRecord
      ? { ...initialValues, ...carRecord }
      : initialValues;
    setName(cleanValues.name);
    setInUse(cleanValues.inUse);
    setBattery(cleanValues.battery);
    setConnected(cleanValues.connected);
    setErrors({});
  };
  const [carRecord, setCarRecord] = React.useState(carModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(Car, idProp) : carModelProp;
      setCarRecord(record);
    };
    queryData();
  }, [idProp, carModelProp]);
  React.useEffect(resetStateValues, [carRecord]);
  const validations = {
    name: [],
    inUse: [],
    battery: [],
    connected: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          inUse,
          battery,
          connected,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Car.copyOf(carRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "CarUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              inUse,
              battery,
              connected,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <SwitchField
        label="In use"
        defaultChecked={false}
        isDisabled={false}
        isChecked={inUse}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              name,
              inUse: value,
              battery,
              connected,
            };
            const result = onChange(modelFields);
            value = result?.inUse ?? value;
          }
          if (errors.inUse?.hasError) {
            runValidationTasks("inUse", value);
          }
          setInUse(value);
        }}
        onBlur={() => runValidationTasks("inUse", inUse)}
        errorMessage={errors.inUse?.errorMessage}
        hasError={errors.inUse?.hasError}
        {...getOverrideProps(overrides, "inUse")}
      ></SwitchField>
      <TextField
        label="Battery"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={battery}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              inUse,
              battery: value,
              connected,
            };
            const result = onChange(modelFields);
            value = result?.battery ?? value;
          }
          if (errors.battery?.hasError) {
            runValidationTasks("battery", value);
          }
          setBattery(value);
        }}
        onBlur={() => runValidationTasks("battery", battery)}
        errorMessage={errors.battery?.errorMessage}
        hasError={errors.battery?.hasError}
        {...getOverrideProps(overrides, "battery")}
      ></TextField>
      <SwitchField
        label="Connected"
        defaultChecked={false}
        isDisabled={false}
        isChecked={connected}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              name,
              inUse,
              battery,
              connected: value,
            };
            const result = onChange(modelFields);
            value = result?.connected ?? value;
          }
          if (errors.connected?.hasError) {
            runValidationTasks("connected", value);
          }
          setConnected(value);
        }}
        onBlur={() => runValidationTasks("connected", connected)}
        errorMessage={errors.connected?.errorMessage}
        hasError={errors.connected?.hasError}
        {...getOverrideProps(overrides, "connected")}
      ></SwitchField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || carModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || carModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
