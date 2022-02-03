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
import {
  AsyncAutocomplete,
  IAsyncAutocompleteProps,
} from "./components/asyncAutocomplete/AsyncAutocomplete";
import AvatarList from "./components/AvatarList";
import {
  IconRadio,
  IIconRadioItem,
  IIconRadioProps,
} from "./components/IconRadio/IconRadio";
import {
  IListBoxItems,
  IListBoxProps,
  ListBox,
} from "./components/listBox/ListBox";
import Loader from "./components/loader/Loader";
import {
  buidNavigationQuery,
  INavigationItem,
  INavigationQuery,
  Navigation,
} from "./components/navigation/Navigation";
import { NotFound } from "./components/notFound/NotFound";
import { PagePath, IPagePathProps } from "./components/pagePath/PagePath";
import { IPageTitleProps, PageTitle } from "./components/pageTitle/PageTitle";
import {
  IPlacesAutocompleteProps,
  PlacesAutocomplete,
} from "./components/placesAutocomplete/PlacesAutocomplete";
import {
  SelectUpdate,
  ISelectUpdateProps,
} from "./components/selectUpdate/SelectUpdate";
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
import {
  ISimpleItemProps,
  SimpleItem,
} from "./components/simpleItem/SimpleItem";
import { ISimpleTabItem, SimpleTab } from "./components/simpleTab/SimpleTab";
import { IColumn, SimpleTable } from "./components/simpleTable/SimpleTable";
import { SimpleThemeProvider } from "./components/SimpleThemeProvider";
import {
  ITimelineItem,
  SimpleTimeline,
} from "./components/simpleTimeline/SimpleTimeline";
import { SimpleTypography } from "./components/simpleTypography/SimpleTypography";
import {
  ISummaryCardProps,
  SummaryCard,
} from "./components/summaryCard/SummaryCard";
import {
  ITabTimelineItem,
  TabTimeline,
} from "./components/tabTimeline/TabTimeline";
import { axiosMiddlewareConfig } from "./config/axiosMiddlewareConfig";
import {
  AllImageContentTypes,
  DefaultCurrency,
  GoodsTypes,
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
import { scrollToTarget } from "./helpers/utilities";
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
import { useMapsAPI } from "./hooks/useMapsAPI";
import useNotificationAPI from "./hooks/useNotificationAPI";
import { useQueryParam } from "./hooks/useQueryParam";
import { useTokenAPI } from "./hooks/useTokenAPI";
import useUserAPI from "./hooks/useUserAPI";
import { ICreatedBy } from "./models/CreatedBy";
import { IDocumetResponse } from "./models/DocumetResponse";
import {
  UserRoles,
  UserPermissions,
  RequestTypes,
  GeoJSONType,
  ToastTitle,
  TruckType,
  MeasurementUnit,
  MassUnit,
} from "./models/enum";
import { IGeoJSON } from "./models/GeoJSON";
import { IHeaderAction } from "./models/HeaderAction";
import { IKeyValuePair } from "./models/KeyValuePair";
import { IKnownKeys } from "./models/KnownKeys";
import { ILocationResult } from "./models/LocationResult";
import INotification, { INotificationQuery } from "./models/Notification";
import { IPageQuery } from "./models/PageQuery";
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
import { ISchemaModel } from "./models/SchemaModel";
import { ITimeStamps } from "./models/TimeStamps";
import { IToastMessage } from "./models/ToastMessage";
import { ITruckBooking, ITruckBookingQuery } from "./models/TruckBooking";
import { IUpdatedBy } from "./models/UpdatedBy";
import {
  InitialUser,
  InitialUserEdit,
  IUser,
  IUserEdit,
  IUserQuery,
} from "./models/User";
import { IVehicle, IVehicleEdit, IVehicleQuery } from "./models/Vehicle";
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
  PlacesAutocomplete,
  AsyncAutocomplete,
  SummaryCard,
  SimpleItem,
  SelectUpdate,
  PagePath,
  NotFound,
  IconRadio,
  ListBox,
  PageTitle,
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
  scrollToTarget,
  buidNavigationQuery,
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
  useMapsAPI,
  useQueryParam,
  /**
   * Config export start here
   */
  axiosMiddlewareConfig,
  initializeFirebase,
  firebaseConfig,
  firebaseVapidKey,
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
  TruckType,
  MassUnit,
  MeasurementUnit,
  ONE_MEGABYTE,
  GoodsTypes,
  DefaultCurrency,
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
  IPlacesAutocompleteProps,
  IAsyncAutocompleteProps,
  ITruckBooking,
  ITruckBookingQuery,
  ICreatedBy,
  IUpdatedBy,
  IVehicle,
  IVehicleEdit,
  IVehicleQuery,
  ITabTimelineItem,
  IPageQuery,
  ISchemaModel,
  ISummaryCardProps,
  ISimpleItemProps,
  ISelectUpdateProps,
  IPagePathProps,
  INavigationQuery,
  IIconRadioProps,
  IIconRadioItem,
  IListBoxItems,
  IListBoxProps,
  IPageTitleProps,
};
