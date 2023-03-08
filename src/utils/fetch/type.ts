type RUserInfoType = Record<
  "username" | "uuid" | "signature" | "logoUrl" | "token",
  string
>;
type RUserSuccessType = {
  code: 200;
  msg: string;
  data: RUserInfoType;
};

export type RRegisterType =
  | {
      code: 500;
      msg: string;
    }
  | RUserSuccessType;
export type RLoginType = RRegisterType;

export type RJWTLoginType =
  | {
      code: 400;
      msg: string;
    }
  | RUserSuccessType;
