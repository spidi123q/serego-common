import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { Form, Formik, FormikHelpers, FormikProps } from "formik";
import { isEmpty } from "lodash";
import { useSnackbar } from "notistack";
import React from "react";
import useDialog from "../../hooks/useDialog";
import useDocumentAPI from "../../hooks/useDocumentAPI";
import useLoading from "../../hooks/useLoading";
import { IDocumetResponse } from "../../models/DocumetResponse";
import { ISimpleButtonProps, SimpleButton } from "../simpleButton/SimpleButton";
import { SimpleField } from "../simpleField/SimpleField";

export interface IFileUploadDialogProps
  extends Pick<ISimpleButtonProps, "variant"> {
  label: string;
  onSave(files: IDocumetResponse[]): Promise<unknown>;
}

export function FileUploadDialog(props: IFileUploadDialogProps) {
  const dialog = useDialog();
  const { onSave, label, variant } = props;
  const { uploadFiles } = useDocumentAPI();
  const { enqueueSnackbar } = useSnackbar();
  const loading = useLoading();

  const onSubmit = async (
    values: IFileForm,
    formikHelpers: FormikHelpers<any>
  ) => {
    dialog.close();
    if (values.files && !isEmpty(values.files)) {
      loading.start();
      const files = await uploadFiles(values.files);
      await onSave(files);
      loading.stop();
      enqueueSnackbar("Documents uploaded successfully", {
        variant: "success",
      });
    }
  };

  const open = () => {
    dialog.open(
      <>
        <Formik
          initialValues={{
            files: [],
          }}
          onSubmit={onSubmit}
        >
          {(formikProps: FormikProps<IFileForm>) => (
            <>
              <DialogContent dividers={true}>
                <Form>
                  <DialogContent>
                    <SimpleField
                      name="files"
                      type="file"
                      multiple
                      formikProps={formikProps}
                    />
                  </DialogContent>
                </Form>
              </DialogContent>
              <DialogActions>
                <SimpleButton variant="text" onClick={dialog.close}>
                  Close
                </SimpleButton>
                <SimpleButton
                  color="primary"
                  onClick={() => formikProps.handleSubmit()}
                >
                  Upload
                </SimpleButton>
              </DialogActions>
            </>
          )}
        </Formik>
      </>
    );
  };

  return (
    <>
      <SimpleButton
        onClick={open}
        loading={loading.isLoading}
        variant={variant}
      >
        {label}
      </SimpleButton>
      <dialog.PopUp />
    </>
  );
}

interface IFileForm {
  files?: File[];
}
