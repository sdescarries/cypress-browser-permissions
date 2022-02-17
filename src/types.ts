export enum PermissionState {
  ask = 0,
  allow = 1,
  block = 2,
}

export type BrowserPermissionName = keyof BrowserPermissions

export interface BrowserPermissions {
  camera: PermissionState
  clipboard: PermissionState
  microphone: PermissionState
  notifications: PermissionState
  geolocation: PermissionState
  popups: PermissionState
  images: PermissionState
  javascript: PermissionState
  cookies: PermissionState
  plugins: PermissionState
}
