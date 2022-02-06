import { useDispatch } from "react-redux";
import { AppInfoActions } from "../state/appInfo/AppInfoAction";

export default function useAppActions() {
  const dispatch = useDispatch();

  const showPlaceholder = async (show: any) =>
    dispatch(AppInfoActions.SetPlaceholder(show));

  return {
    showPlaceholder,
  };
}
