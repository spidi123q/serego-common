import { IRequest } from "../../helpers/axios";
import { RequestTypes } from "../../models/enum";

export default function CreateDocument(
  file: File,
  onUploadProgress?: (progress: number) => void
): IRequest {
  const data = new FormData();
  data.append("file", file);
  return {
    url: "/api/v1/Document",
    method: RequestTypes.Post,
    headers: {
      "Content-Type": "multipart/form-data",
    },
    data,
    onUploadProgress: (progressEvent) => {
      const percentCompleted = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total
      );
      console.log("upload percentage", percentCompleted);
      onUploadProgress && onUploadProgress(percentCompleted);
    },
  };
}
