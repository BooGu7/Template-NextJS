import { IWeekday, IUser } from './index.d';
import { Moment } from 'moment';
import { ROUTE } from '@/common/constants/route';

export namespace AppTypes {
  export type IFile = Partial<FileWithPath> & IAttachment;
  export type IRole = 'worker' | 'super_admin';

  export type IMediaType = 'video' | 'image' | 'audio' | 'text';

  export type IAccountStatus = 'pending_review' | 'inactive' | 'active' | 'rejected';

  export type IOrderStatus =
    | 'new'
    | 'pending'
    | 'ready_to_ship'
    | 'in_transit'
    | 'returned'
    | 'delivered'
    | 'cancelled'
    | 'lost'
    | 'success'
    | 'damaged';

  export type IFacilityUserStatus = 'available' | 'blocked';

  export type IAddressType = '' | 'primary';

  export type ICountryCode = 'VN';

  export interface ISubMenu {
    id: string;
    label: string;
    href: ROUTE;
    icon?: React.ReactNode;
    iconActive?: React.ReactNode;
  }
  export interface IMenu {
    icon: React.ReactNode;
    iconActive: React.ReactNode;
    label: string;
    children?: ISubMenu[];
    href: ROUTE;
  }

  export interface IRoute {
    [x: string]: string;
  }

  export interface IPaginationParams {
    keyword?: string;
    page?: number;
    limit?: number;
    sort?: string;
  }

  export interface IOrderParam extends IPaginationParams {
    statuses?: IOrderStatus[];
  }
  export interface IPagination<T> {
    current_page: number;
    has_next: boolean;
    has_prev: boolean;
    metadata: any;
    next_page: number;
    offset: number;
    per_page: number;
    prev_page: number;
    records: Array<T>;
    total_page: number;
    total_record: number;
  }

  export interface IUsersFilters extends AppTypes.IPaginationParams {
    roles?: AppTypes.IRole[];
    account_statuses?: IAccountStatus[];
  }

  export interface IRecords<T> {
    records: Array<T>;
  }

  export interface ITrackActivityForm {}

  export interface IUser {
    id: string;
    created_at: number;
    updated_at: number;
    deleted_at?: any;
    account_status: string;
    contact_phone: string;
    country_code: ICountryCode;
    timezone: string;
    badge_photo: IAttachment;
    role: IRole;
    company?: any;
    first_name: string;
    user_name: string;
    facility_id: string;
    last_name: string;
    name: string;
    email: string;
    phone_number: string;
    region?: any;
    last_login: number;
    is_test: boolean;
    is_first_login: boolean;
    max_distance_in_miles: number;
    facility: IFacility;
    lat?: number;
    lng?: number;
    region_id: string;
    hcs_employee_id: string;
    hcs_client_id: string;
    status: IShiftRequestStatus;
    cert_ids: string[];
    mileage_preference: number;
    website_url: string;
    bio: string;
    job_title: string;
    avatar: IAttachment;
    permissions?: INameValue[];
    coordinate: ICoordinate;
    primary_address: ICoordinate;
    facility?: IFacilityStaff;
    spec_ids: string[];
    is_offline: boolean;
    last_online_at: number;
    ssn: string;
    work_type: string;
  }

  export interface IUserUpdateForm extends Partial<IUser> {}
  export interface IUserCreateForm {}
  export interface ILoginResponse {
    user: IUser;
    token: string;
  }

  export interface ILoginPhoneNumberForm {
    phone_number: string;
  }

  export type IResendOTPPhoneNumberForm = ILoginPhoneNumberForm;

  export interface IPhoneNumberResponse {
    is_new_user: boolean;
    message: string;
    next_in_seconds: number;
  }

  export interface ICodeOTP {
    otp_code: string;
  }

  export type IVerifyOTPPhoneNumberForm = ICodeOTP & ILoginPhoneNumberForm;

  export interface ContactRequestParams {
    name: string;
    contact_email: string;
    phone_number: string;
    toast_email: string;
    toast_password: string;
    pos_type: string;
  }

  export interface ICoordinate {
    building_name: string;
    city: string;
    country: string;
    country_code: ICountryCode;
    county: string;
    deleted_at: number;
    district: string;
    address_id: string;
    formatted_address: string;
    id: string;
    lat: number;
    lng: number;
    neighborhood: string;
    number: string;
    place_id: string;
    postal_code: string;
    state: string;
    state_code: string;
    street: string;
    types: string;
    type: string;
  }

  // ===== CONSTANTS =====
  export interface INameId {
    id: string;
    name: string;
  }

  export interface INameValue {
    value: string;
    name: string;
  }

  export interface IConstants {
    roles: INameValue[];
    package_types: INameValue[];
    delivery_services: INameValue[];
    couriers: INameValue[];
    country_codes: INameValue[];
    address_types: INameValue[];
    order_statuses: INameValue[];
  }

  // ESTIMATED COST

  interface ITPLEstimatedCostsForm {
    country_code: ICountryCode;

    user_id: string;

    notes: string;

    // Contact Info
    sender_address_id: string;
    sender_address: IPrimaryAddressParam;

    receiver_address_id: string;
    receiver_address: IPrimaryAddressParam;

    // Store
    store_id: string;

    // Items
    items: OrderItems;

    // Dimension
    dimension: IDimension;

    total_package_value: number;
    package_content: string;
  }

  // ======= Courier =======
  export interface ICourier {
    id: string;
    country_code: string;
    created_at: number;
    updated_at: number;
    deleted_at?: any;
    name: string;
    image_url: string;
    term_url: string;
    privacy_url: string;
    contact_number: string;
    support_url: string;
    is_disabled: boolean;
  }

  export interface IDeliveryService {
    id: string;
    country_code: string;
    destination_country_code: string;
    created_at: number;
    updated_at: number;
    deleted_at?: number;
    delivery_type: string;
    code: string;
    code_name: string;
    estimated_delivery_duration: string;
    name: string;
    description: string;
    courier_id: string;
    courier?: any;
    rating: number;
    image_url: string;
    is_printing_supported: boolean;
    is_disabled: boolean;
    is_public: boolean;
    is_support_bulk: boolean;
    for_account_types?: any;
  }

  // ======= ESTIMATED COST =======
  interface IEstimatedCostItem {
    estimated_costs_id: string;
    total_fee_paid: string;
    total_fee_before_discount: string;
    discount: string;
    courier: ICourier;
    delivery_service: IDeliveryService;
    available_pick_up_dates?: any;
    is_invalid: boolean;
    error?: any;
  }

  interface IEstimatedCost {
    records: IEstimatedCostItem[];
  }

  // ======= ORDER =======

  export interface Item {
    id: string;
    created_at: number;
    updated_at: number;
    deleted_at?: any;
    sku: string;
    order_id: string;
    name: string;
    quantity: number;
    package_value: number;
  }

  export interface IOrder {
    id: string;
    created_at: number;
    updated_at: number;
    deleted_at?: any;
    origin_country_code: string;
    destination_country_code: string;
    discount: string;
    tax_paid: string;
    tax_before_discount: string;
    total_fee_paid: string;
    total_fee_before_discount: string;
    service_fee_paid: string;
    shipping_fee_paid: string;
    shipping_fee_before_discount: string;
    currency: string;
    reference_id: string;
    user_id: string;
    user: IUser;
    notes: string;
    sender_address_id: string;
    sender_address: IPrimaryAddress;
    receiver_address_id: string;
    receiver_address: IPrimaryAddress;
    waybill_url: string;
    way_bill_url_additional: string;
    status: string;
    status_description: string;
    courier_status: string;
    cancel_reason: string;
    status_updated_at?: any;
    store_id: string;
    tracking_code: string;
    items: IOrderItem[];
    dimension: IDimension;
    total_package_value: string;
    package_content: string;
    expected_pick_up_date: number;
    expected_pick_up_time_slot_from: number;
    expected_pick_up_time_slot_to: number;
    coupon_id: string;
    refunded_at?: any;
    expected_cod_amount: string;
    cod_status: string;
    distribution_id: string;
    charged_transaction_id: string;
    batch_id: string;
    batch_payment_intent_id: string;
    refund_id: string;
    payment_intent_id: string;
  }

  interface ICreateLabelParam {
    order_id: string;
    estimated_costs_id: string;
    expected_cod_amount?: number;
    payment_method_id?: string;
  }

  interface ICreateOrderParam {
    user_id: string;

    notes: string;

    // Contact Info
    sender_address_id: string;
    sender_address: IPrimaryAddress;

    receiver_address_id: string;
    receiver_address: IPrimaryAddress;

    // Store
    store_id: string;

    // Items
    items: OrderItems;

    // Dimension
    dimension: IDimension;

    total_package_value: number;
    package_content: string;
  }

  interface IDimension {
    length?: number;
    weight: number;
    width?: number;
    height?: number;
  }

  interface IOrderItem extends IDimension {
    name?: string;
    code?: string;
    quantity?: number;
    package_value?: number;
    category?: ILevel;
  }

  interface ILevel {
    level1: string;
    level2: string;
    level3: string;
  }

  // PACKAGE

  type PackageDataType = {
    [key: string]: {
      icon: React.ReactNode;
      title: string;
      description: string;
      weight: number;
      width: number;
      length: number;
      height: number;
    };
  };

  // SUPPORTED LOCATION
  type ICountry = 'VN';

  interface ISupportedLocationLevel1Params extends IPaginationParams {
    country_code: ICountryCode;
  }
  interface ISupportedLocationLevel2Params extends IPaginationParams {
    country_code: ICountryCode;
    level1: string;
  }
  interface ISupportedLocationLevel3Params extends IPaginationParams {
    country_code: ICountryCode;
    level1: string;
    level2: string;
  }

  interface ISupportedLocationItem {
    alias: string;
    name: string;
  }

  // Address
  interface IPrimaryAddressParam extends IPaginationParams {
    type: 'primary';
  }

  interface IPrimaryAddress extends IUser {
    coordinate: ICoordinate;
    coordinate_id: string;
  }
}
