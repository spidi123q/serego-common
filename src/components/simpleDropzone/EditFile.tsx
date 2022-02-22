import FilePresentOutlined from "@mui/icons-material/FilePresentOutlined";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { isEmpty, xorBy } from "lodash";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import useDocumentAPI from "../../hooks/useDocumentAPI";
import useLoading from "../../hooks/useLoading";
import { IDocumetResponse } from "../../models/DocumetResponse";
import { SimpleButton } from "../simpleButton/SimpleButton";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { ONE_MEGABYTE } from "../../config/constants";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import { SimpleTypography } from "../simpleTypography/SimpleTypography";
import Grid from "@mui/material/Grid";

export interface IEditFileProps {
  files?: IDocumetResponse[];
  readonly?: boolean;
  onSave?(files: IDocumetResponse[]): Promise<unknown>;
  onClose(): void;
}

export function EditFile(props: IEditFileProps) {
  const { readonly, onClose } = props;
  const { deleteDocuments } = useDocumentAPI();
  const { enqueueSnackbar } = useSnackbar();
  const loading = useLoading();
  const [files, setFiles] = useState<IDocumetResponse[]>(props.files ?? []);

  const deleteFile = (myFile: IDocumetResponse) => {
    const updatedFiles = files.filter(
      (file) => file.fileName !== myFile.fileName
    );
    setFiles(updatedFiles);
  };

  const onSave = async () => {
    loading.start();
    const deletedfiles = xorBy(props.files, files, "fileName");
    await deleteDocuments(deletedfiles);
    props.onSave && (await props.onSave(files));
    loading.stop();
    enqueueSnackbar("Documents updated", { variant: "success" });
    onClose();
  };

  return (
    <>
      <DialogContent dividers={true}>
        <DialogContent>
          <List>
            {files.map((file, index) => (
              <ListItem
                key={index}
                secondaryAction={
                  <Grid container justifyContent="center" alignItems="center">
                    {!readonly && (
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => deleteFile(file)}
                      >
                        <DeleteOutlineOutlinedIcon />
                      </IconButton>
                    )}
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => window.open(file.objectUrl)}
                    >
                      <CloudDownloadOutlinedIcon />
                    </IconButton>
                  </Grid>
                }
              >
                <ListItemIcon>
                  <FilePresentOutlined />
                </ListItemIcon>
                <ListItemText
                  primary={`${file.originalFilename} - ${(
                    file.size / ONE_MEGABYTE
                  ).toFixed(1)} MB`}
                />
              </ListItem>
            ))}
          </List>
          {isEmpty(files) && <SimpleTypography>No Documents</SimpleTypography>}
        </DialogContent>
      </DialogContent>
      <DialogActions>
        <SimpleButton variant="text" onClick={onClose}>
          Close
        </SimpleButton>
        <SimpleButton
          color="primary"
          onClick={onSave}
          loading={loading.isLoading}
        >
          Save
        </SimpleButton>
      </DialogActions>
    </>
  );
}
