export type GetProductsReq = {
  page?: number;
  perPage?: number;
  "filter[name]"?: string;
};

export type GetProductDetailsReq = {
  id: string | number;
};

export type SignUpReq = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  passwordConfirmation: string;
  publicMetadata: {
    userSegment: string;
  };
  privateMetadata: {
    hasAbandonedCart: false;
  };
};

export type LoginReq = {
  username: string;
  password: string;
};

export type UpdateAccountReq = {
  email?: string;
  firstName?: string;
  lastName?: string;
  selectedLocale?: string;
  billAddressId?: string;
  shipAddressId?: string;
  password?: string;
  passwordConfirmation?: string;
};
