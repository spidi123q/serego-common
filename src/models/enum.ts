export enum UserRoles {
  Guest = "Guest",
  User = "User",
  OrganizationStaff = "Organization Staff",
  OrganizationAdmin = "Organization Admin",
  Admin = "Admin",
  SuperAdmin = "SuperAdmin",
}

export enum UserPermissions {
  SystemAdmin = "SystemAdmin",
  WriteOrganization = "WriteOrganization",
  ReadOrganization = "ReadOrganization",
  ReadOrganizationSelf = "ReadOrganizationSelf",
  WriteOrganizationSelf = "WriteOrganizationSelf",
  ReadUser = "ReadUser",
  WriteUser = "WriteUser",
  ReadUserSelf = "ReadUserSelf",
  WriteUserSelf = "WriteUserSelf",
  ReadTruckBooking = "ReadTruckBooking",
  WriteTruckBooking = "WriteTruckBooking",
  ReadVehicle = "ReadVehicle",
  WriteVehicle = "WriteVehicle",
  ReadClearance = "ReadClearance",
  WriteClearance = "WriteClearance",
}

export enum RequestTypes {
  Post = "POST",
  Get = "GET",
  Delete = "DELETE",
  Put = "PUT",
  Patch = "PATCH",
}

export enum GeoJSONType {
  Point = "Point",
  LineString = "LineString",
  Polygon = "Polygon",
}

export enum ToastTitle {
  ApiError = "Request Failed",
  PermissionError = "Permission Error",
  LocationError = "Location Error",
  Error = "Error",
  Success = "Success",
  Warning = "Warning",
  FirebaseError = "App Error",
  FormError = "Form Validation Failed",
}

export enum TruckType {
  Small = "Small",
  Medium = "Medium",
  Large = "Large",
}

export enum MassUnit {
  Kg = "Kg",
  Ton = "Ton",
}

export enum MeasurementUnit {
  cm = "cm",
}

export enum PortType {
  LandPort = "Land Port",
  SeaPort = "Sea Port",
  AirPort = "Airport",
}

export enum TruckBookingStatus {
  Pending = "Pending",
  ContainerLoaded = "Container loaded",
  EnRoute = "En route",
  Delivered = "Delivered",
}

export enum ClearanceStatus {
  DocumentCollectionPending = "Document Collection pending",
  DocumentCollected = "Document collected",
  PreparingDocuments = "Preparing documents",
  CustomsClearanceInitiated = "Customs clearance initiated",
  CustomsClearanceCompleted = "Customs clearance completed",
  ContainerReleased = "Container released",
}
