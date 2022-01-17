import CreateDocument from "./api/document/CreateDocument";
import { GetConnectionPing } from "./api/GetConnectionPing";
import DeleteNotifications from "./api/notification/DeleteNotifications";
import GetNotifications from "./api/notification/GetNotifications";
import PatchNotificationsAsSeen from "./api/notification/PatchNotificationsAsSeen";
import GetPlace from "./api/places/GetPlace";
import GetPlaceFromCoordinates from "./api/places/GetPlaceFromCoordinates";
import SearchPlace from "./api/places/SearchPlace";
import CreatePushToken from "./api/token/CreatePushToken";
import CreateUser from "./api/user/CreateUser";
import GetUser from "./api/user/GetUser";
import GetUsers from "./api/user/GetUsers";
import { IUserSignIn, IUserToken, SignInUser } from "./api/user/SignInUser";
import UpdateUser from "./api/user/UpdateUser";
import { UpdateUserById } from "./api/user/UpdateUserById";
import AvatarList from "./components/AvatarList";
import Loader from "./components/loader/Loader";
import {
  INavigationItem,
  Navigation,
} from "./components/navigation/Navigation";
import { SimpleButton } from "./components/simpleButton/SimpleButton";
import { SimpleCard } from "./components/simpleCard/SimpleCard";
import { SimpleDropzone } from "./components/simpleDropzone/SimpleDropzone";
import {
  ISimpleFieldProps,
  SimpleField,
} from "./components/simpleField/SimpleField";
import { getIcon, IconNames } from "./components/simpleIcon/helper";
import { SimpleIcon } from "./components/simpleIcon/SimpleIcon";
import { SimpleInput } from "./components/simpleInput/SimpleInput";
import { ISimpleTabItem, SimpleTab } from "./components/simpleTab/SimpleTab";
import { IColumn, SimpleTable } from "./components/simpleTable/SimpleTable";
import { SimpleThemeProvider } from "./components/SimpleThemeProvider";
import {
  ITimelineItem,
  SimpleTimeline,
} from "./components/simpleTimeline/SimpleTimeline";
import { SimpleTypography } from "./components/simpleTypography/SimpleTypography";
import { TabTimeline } from "./components/tabTimeline/TabTimeline";
import { axiosMiddlewareConfig } from "./config/axiosMiddlewareConfig";
import {
  AllImageContentTypes,
  ONE_MEGABYTE,
  StartPage,
} from "./config/constants";
import {
  firebaseConfig,
  firebaseVapidKey,
  initializeFirebase,
} from "./config/firebase";
import {
  isAuthorized,
  logout,
  onAuthStateChanged,
  signInAnonymously,
} from "./helpers/auth";
import {
  AxiosApi,
  createAxiosClient,
  IRequest,
  IResolvedResponse,
  IResponse,
} from "./helpers/axios";
import { formatWithTime } from "./helpers/formatDate";
import {
  getOperatingSystem,
  getDeviceId,
  getMapsUrl,
} from "./helpers/platform";
import { initRemoteConfig, getSystemConfigValue } from "./helpers/remoteConfig";
import {
  removeWhiteSpace,
  toKeyValuePair,
  toKeyValuePairFromArr,
  getFileName,
} from "./helpers/transform";
import {
  locationSchema,
  locationResultSchema,
  getFileSchema,
  gePhoneNumberValidation,
  IYupRecord,
} from "./helpers/yupScheme";
import { useIsSmScreen } from "./hooks/mediaQuery";
import useDialog from "./hooks/useDialog";
import useDocumentAPI from "./hooks/useDocumentAPI";
import useLoading from "./hooks/useLoading";
import useLoginActions from "./hooks/useLoginActions";
import useNotificationAPI from "./hooks/useNotificationAPI";
import { useTokenAPI } from "./hooks/useTokenAPI";
import useUserAPI from "./hooks/useUserAPI";
import { IDocumetResponse } from "./models/DocumetResponse";
import {
  UserRoles,
  UserPermissions,
  RequestTypes,
  GeoJSONType,
  ToastTitle,
} from "./models/enum";
import { IGeoJSON } from "./models/GeoJSON";
import { IHeaderAction } from "./models/HeaderAction";
import { IKeyValuePair } from "./models/KeyValuePair";
import { IKnownKeys } from "./models/KnownKeys";
import { ILocationResult } from "./models/LocationResult";
import INotification, { INotificationQuery } from "./models/Notification";
import IPaginatedRequest from "./models/PaginatedRequest";
import {
  InitialPaginateResponse,
  InitialPaginateResult,
  IPaginateResponse,
  IPaginateResult,
} from "./models/PaginateResult";
import { IPagination } from "./models/Pagination";
import { IPushNotification } from "./models/PushNotification";
import { IPushToken, IPushTokenEdit } from "./models/PushToken";
import {
  IRazorpayOptions,
  IRazorpayPrefill,
  IRazorpayTheme,
  IRazorpayError,
  IRazorpaySuccess,
} from "./models/Razorpay";
import { ITimeStamps } from "./models/TimeStamps";
import { IToastMessage } from "./models/ToastMessage";
import {
  InitialUser,
  InitialUserEdit,
  IUser,
  IUserEdit,
  IUserQuery,
} from "./models/User";
import {
  AppInfoActions,
  AppInfoActionTypes,
} from "./state/appInfo/AppInfoAction";
import { AppInfoReducer } from "./state/appInfo/AppInfoReducer";
import {
  IAppInfoReducerState,
  InitialAppInfoReducerState,
} from "./state/appInfo/AppInfoReducerState";
import { LoginActionTypes, LoginActions } from "./state/login/LoginAction";

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
  SimpleField,
  SimpleDropzone,
  SimpleCard,
  /**
   * Helpers export start here
   */
  isAuthorized,
  createAxiosClient,
  signInAnonymously,
  onAuthStateChanged,
  logout,
  formatWithTime,
  getOperatingSystem,
  getDeviceId,
  getMapsUrl,
  initRemoteConfig,
  getSystemConfigValue,
  removeWhiteSpace,
  toKeyValuePair,
  toKeyValuePairFromArr,
  getFileName,
  locationSchema,
  locationResultSchema,
  getFileSchema,
  gePhoneNumberValidation,
  AxiosApi,
  /**
   * Hooks export start here
   */
  useIsSmScreen,
  useDialog,
  useLoading,
  useDocumentAPI,
  useLoginActions,
  useNotificationAPI,
  useUserAPI,
  useTokenAPI,
  /**
   * Config export start here
   */
  axiosMiddlewareConfig,
  initializeFirebase,
  firebaseConfig,
  firebaseVapidKey,
  ONE_MEGABYTE,
  /**
   * API request function export start here
   */
  GetConnectionPing,
  CreateDocument,
  DeleteNotifications,
  GetNotifications,
  PatchNotificationsAsSeen,
  GetPlace,
  GetPlaceFromCoordinates,
  SearchPlace,
  CreatePushToken,
  CreateUser,
  GetUser,
  GetUsers,
  SignInUser,
  UpdateUser,
  UpdateUserById,
  /**
   * State items are exported here
   */
  AppInfoActions,
  AppInfoActionTypes,
  AppInfoReducer,
  InitialAppInfoReducerState,
  LoginActionTypes,
  LoginActions,
  /**
   * Other items exported here
   */
  InitialUser,
  InitialUserEdit,
  IconNames,
  UserRoles,
  UserPermissions,
  RequestTypes,
  GeoJSONType,
  ToastTitle,
  getIcon,
  StartPage,
  AllImageContentTypes,
  InitialPaginateResult,
  InitialPaginateResponse,
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
  IYupRecord,
  IAppInfoReducerState,
  ISimpleFieldProps,
  IRazorpayOptions,
  IRazorpayPrefill,
  IRazorpayTheme,
  IRazorpayError,
  IRazorpaySuccess,
  INavigationItem,
  ISimpleTabItem,
  IColumn,
  ITimelineItem,
  IUserSignIn,
  IUserToken,
};
