export type GetProductsReq = {
  page?: number;
  perPage?: number;
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
