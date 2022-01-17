import "./SimpleDropzone.scss";
import React, { useState, useEffect, useCallback } from "react";
import { useSnackbar } from "notistack";
import Cx from "classnames";
import { useDropzone, DropzoneOptions } from "react-dropzone";
import { useDispatch } from "react-redux";
import { AxiosApi, IRequest } from "../../helpers/axios";
import Grid from "@mui/material/Grid";
import { SimpleButton } from "../simpleButton/SimpleButton";
import LinearProgress from "@mui/material/LinearProgress";
import { SimpleTypography } from "../simpleTypography/SimpleTypography";
import { ONE_MEGABYTE } from "../../config/constants";
import { SimpleIcon } from "../simpleIcon/SimpleIcon";
import { IconNames } from "../simpleIcon/helper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import DeleteIcon from "@mui/icons-material/Delete";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FilePresentOutlined from "@mui/icons-material/FilePresentOutlined";
import IconButton from "@mui/material/IconButton";
export interface ISimpleDropzoneProps extends DropzoneOptions {
  url?: string;
  multiple?: boolean;
  accept?: string | string[];
  label?: string;
  onUploadCompleted?: (urls: string[]) => void;
  onChange: (files: DropzoneFile[]) => void;
}

export const SimpleDropzone: React.FunctionComponent<ISimpleDropzoneProps> = (
  props
) => {
  const { url, onUploadCompleted, onChange, label, ...rest } = props;
  const [files, setFiles] = useState<DropzoneFile[]>([]);
  const [uploadPercentage, setUploadPercentage] = useState<number>(0);
  const dispatch = useDispatch();

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach((file) => URL.revokeObjectURL(file.preview));
    onChange(files);
  }, [files]);

  const onUploadProgress = (progress: number) => {
    setUploadPercentage(progress);
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const files: DropzoneFile[] = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );
    setFiles(files);
    // Do something with the files
  }, []);

  const uploadFiles = async () => {
    let formData = new FormData();
    for (const file of files) {
      formData.append(file.name, file);
    }
    // console.log("TCL: onDrop -> formData", formData);
    await upload(
      dispatch,
      url ?? "",
      formData,
      onUploadProgress,
      onUploadCompleted
    );
    setFiles([]);
    setUploadPercentage(0);
  };

  const deleteFile = (myFile: DropzoneFile) => {
    setFiles(files.filter((file) => file.name !== myFile.name));
  };

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    ...rest,
  });

  return (
    <div className="simple-dropzone">
      <section
        className={Cx("container", {
          SimpleDropzone__isDragActive: isDragActive,
          SimpleDropzone__isDragReject: isDragReject,
        })}
      >
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <SimpleButton
            variant="contained-dark"
            startIcon={<SimpleIcon name={IconNames.upload} size="sm" />}
          >
            {label ?? "upload"}
          </SimpleButton>
        </div>
        <aside className="simple-dropzone__files">
          <List>
            {files.map((file, index) => (
              <ListItem
                key={index}
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => deleteFile(file)}
                  >
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemIcon>
                  <FilePresentOutlined />
                </ListItemIcon>
                <ListItemText
                  primary={`${file.name} - ${(file.size / ONE_MEGABYTE).toFixed(
                    1
                  )} MB`}
                />
              </ListItem>
            ))}
          </List>
        </aside>
      </section>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        className="SimpleDropzone__controls"
      >
        {uploadPercentage > 0 && (
          <LinearProgress variant="determinate" value={uploadPercentage} />
        )}
      </Grid>
    </div>
  );
};

const upload = async (
  dispatch: any,
  url: string,
  formData: FormData,
  onUploadProgress: (progress: number) => void,
  onUploadCompleted?: (urls: string[]) => void
) => {
  const request: IRequest = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    url,
    data: formData,
    method: "POST",
    onUploadProgress: (progressEvent: any) => {
      const percentCompleted = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total
      );
      console.log("upload", percentCompleted);
      onUploadProgress(percentCompleted);
    },
  };
  const result = (await dispatch(AxiosApi(request))) as any;
  onUploadCompleted && onUploadCompleted(result.payload.data);
};

interface DropzoneFile extends File {
  preview: string;
}
