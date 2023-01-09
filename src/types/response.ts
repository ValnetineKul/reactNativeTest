export type ProductsRes = {
  data: Product[];
};

export type ProductRes = {
  data: Product;
};

export type Product = {
  id: string;
  type: string;
  attributes: Attribute;
  images: {
    data: string[];
  };
};

type Attribute = {
  name: string;
  description: string;
  available_on: Date;
  slug: string;
  updated_at: Date;
  sku: string;
  purchasable: boolean;
  in_stock: boolean;
  backorderable: boolean;
  available: boolean;
  currency: string;
  price: string;
  display_price: string;
  compare_at_price?: string | null;
};

export type LoginRes = {
  accessToken: string;
  tokenType: "Bearer";
  expiresIn: number;
  refreshToken: string;
  createdAt: number;
};

type AccountAttribute = {
  email: string;
  firstName: string;
  lastName: string;
  selectedLocale: string;
  storeCredits: number;
  completedOrders: number;
  publicMetadata: {
    userSegment: string;
  };
};

type AccountRelationships = {
  defaultBillingAddress: {
    data: {
      id: string;
      type: string;
    };
  };
  defaultShippingAddress: {
    data: {
      id: string;
      type: string;
    };
  };
};

export type AccountRes = {
  data: {
    id: string;
    type: string;
    attributes: AccountAttribute;
    relationships: AccountRelationships;
  };
};
