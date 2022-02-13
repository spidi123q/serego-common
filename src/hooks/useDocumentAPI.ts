import { useState } from "react";
import { useDispatch } from "react-redux";
import { IDocumetResponse } from "..";
import CreateDocument from "../api/document/CreateDocument";
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
    loading.start();
    const result: IResolvedResponse<IDocumetResponse> = await dispatch(
      AxiosApi(request)
    );
    loading.stop();
    return result.payload;
  };

  return {
    upload,
    uploadPercentage,
    isLoading: loading.isLoading,
  };
}
