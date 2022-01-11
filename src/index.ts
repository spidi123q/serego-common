import AvatarList from "./components/AvatarList";
import Loader from "./components/loader/Loader";
import { Navigation } from "./components/navigation/Navigation";
import { SimpleButton } from "./components/simpleButton/SimpleButton";
import { SimpleIcon } from "./components/simpleIcon/SimpleIcon";
import { SimpleInput } from "./components/simpleInput/SimpleInput";
import { SimpleTab } from "./components/simpleTab/SimpleTab";
import { SimpleTable } from "./components/simpleTable/SimpleTable";
import { SimpleThemeProvider } from "./components/SimpleThemeProvider";
import { SimpleTimeline } from "./components/simpleTimeline/SimpleTimeline";
import { SimpleTypography } from "./components/simpleTypography/SimpleTypography";
import { TabTimeline } from "./components/tabTimeline/TabTimeline";
import { isAuthorized } from "./helpers/auth";
import {
  createAxiosClient,
  IRequest,
  IResolvedResponse,
  IResponse,
} from "./helpers/axios";
import { useIsSmScreen } from "./hooks/mediaQuery";
import { IDocumetResponse } from "./models/DocumetResponse";
import { IGeoJSON } from "./models/GeoJSON";
import { IHeaderAction } from "./models/HeaderAction";
import { IKeyValuePair } from "./models/KeyValuePair";
import { IKnownKeys } from "./models/KnownKeys";
import { ILocationResult } from "./models/LocationResult";
import INotification, { INotificationQuery } from "./models/Notification";
import IPaginatedRequest from "./models/PaginatedRequest";
import { IPaginateResponse, IPaginateResult } from "./models/PaginateResult";
import { IPagination } from "./models/Pagination";
import { IPushNotification } from "./models/PushNotification";
import { IPushToken, IPushTokenEdit } from "./models/PushToken";
import { ITimeStamps } from "./models/TimeStamps";
import { IToastMessage } from "./models/ToastMessage";
import { IUser, IUserEdit, IUserQuery } from "./models/User";

export {
  /**
   * Component exports start here
   */
  SimpleButton,
  Loader,
  SimpleInput,
  Navigation,
  SimpleIcon,
  SimpleTab,
  SimpleTable,
  SimpleTimeline,
  SimpleTypography,
  TabTimeline,
  AvatarList,
  SimpleThemeProvider,
  /**
   * Helpers export start here
   */
  isAuthorized,
  createAxiosClient,
  /**
   * Hooks export start here
   */
  useIsSmScreen,
};

export type {
  /**
   * Models export start here
   */
  IRequest,
  IResolvedResponse,
  IResponse,
  IDocumetResponse,
  IGeoJSON,
  IHeaderAction,
  IKeyValuePair,
  IKnownKeys,
  ILocationResult,
  INotification,
  INotificationQuery,
  IPaginatedRequest,
  IPaginateResult,
  IPaginateResponse,
  IPagination,
  IPushNotification,
  IPushToken,
  IPushTokenEdit,
  ITimeStamps,
  IToastMessage,
  IUser,
  IUserEdit,
  IUserQuery,
};
