import { useState } from "react";
import { useDispatch } from "react-redux";
import { IDocumetResponse } from "..";
import CreateDocument from "../api/document/CreateDocument";
import { DeleteDocument } from "../api/document/DeleteDocument";
import { AxiosApi, IResolvedResponse } from "../helpers/axios";
import useLoading from "./useLoading";

export default function useDocumentAPI() {
  const dispatch: any = useDispatch();
  const loading = useLoading();
  const [uploadPercentage, setUploadPercentage] = useState<number>(0);

  const upload = async (
    file: File,
    onUploadProgress?: (progress: number) => void
  ): Promise<IDocumetResponse> => {
    const request = CreateDocument(file, (progress) => {
      setUploadPercentage(progress);
      onUploadProgress && onUploadProgress(progress);
    });
    const result: IResolvedResponse<IDocumetResponse> = await dispatch(
      AxiosApi(request)
    );
    return result.payload;
  };

  const uploadFiles = async (files: File[]): Promise<IDocumetResponse[]> => {
    loading.start();
    const fileUploads = files.map((file) => upload(file));
    const response = await Promise.all(fileUploads);
    loading.stop();
    return response;
  };

  const deleteDocument = async (file: IDocumetResponse): Promise<void> => {
    const request = DeleteDocument(file.fileName);
    return dispatch(AxiosApi(request));
  };

  const deleteDocuments = async (files: IDocumetResponse[]): Promise<void> => {
    loading.start();
    const fileDeletes = files.map((file) => deleteDocument(file));
    await Promise.all(fileDeletes);
    loading.stop();
  };

  return {
    upload,
    uploadPercentage,
    isLoading: loading.isLoading,
    uploadFiles,
    deleteDocument,
    deleteDocuments,
  };
}
