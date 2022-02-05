import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { StoryBookTemplate } from "../StoryBookTemplate";
import { ISimpleFieldProps, SimpleField } from "./SimpleField";
import { Form, Formik, FormikProps } from "formik";
import { SimpleButton } from "../simpleButton/SimpleButton";
import * as yup from "yup";
import { IconNames } from "../simpleIcon/helper";

export default {
  title: "Components/Field",
  component: SimpleField,
} as Meta;

const validationSchema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
  custom: yup.mixed().required(),
});

// Create a master template for mapping args to render the Button component
const Template: Story<ISimpleFieldProps> = (args) => (
  <div>
    <StoryBookTemplate>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
          console.log(
            "🚀 ~ file: SimpleField.stories.tsx ~ line 31 ~ values",
            values
          );
        }}
        validationSchema={validationSchema}
      >
        {(formikProps: FormikProps<any>) => (
          <Form className="login__form">
            <SimpleField
              name="email"
              type="string"
              label="Email"
              formikProps={formikProps}
            />
            <SimpleField
              name="password"
              type="password"
              label="Password"
              formikProps={formikProps}
            />
            <SimpleField {...args} formikProps={formikProps} />
            <br />
            <SimpleButton variant="contained" color="primary" type="submit">
              SignIn
            </SimpleButton>
          </Form>
        )}
      </Formik>
    </StoryBookTemplate>
  </div>
);

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {
  name: "custom",
  label: "Custom",
  type: "string",
  options: [
    { Key: "Small", Value: "Small", iconName: IconNames.car },
    { Key: "Medium", Value: "Medium", iconName: IconNames.van },
    { Key: "Large", Value: "Large", iconName: IconNames.truck },
  ],
} as any;
