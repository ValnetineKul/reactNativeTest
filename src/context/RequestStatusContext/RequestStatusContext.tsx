import React, {
  Dispatch,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import { Nullable, RequestStatus } from "../../types";
import { URL } from "../../constants";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";

const initialRequestStatuses: Record<string, { status: RequestStatus; err?: any }> =
  Object.keys(URL).reduce((reqObj, currentValue) => {
    reqObj = {
      ...reqObj,
      [currentValue]: {
        status: RequestStatus.INIT,
      },
    };
    return reqObj;
  }, {});

export type Action<T, P = any, M = void> = { type: T; payload: P; meta?: M };

export type RequestStatusContextType = {
  requestStatuses?: typeof initialRequestStatuses;
  dispatch?: Dispatch<Action<string, { status: RequestStatus; err?: any }, void>>;
  updateRequestStatusCall?: <T>(
    request: () => Promise<T>,
    name: string
  ) => Promise<T>;
  isOnline?: boolean;
  setOnline?: (isOnline: boolean) => void;
  recheckConnection?: () => void;
};

const reducer = (
  state: typeof initialRequestStatuses,
  action: Action<string, { status: RequestStatus; err?: any }, void>
) => {
  return {
    ...state,
    [action.type]: {
      status: action.payload.status,
      err: action.payload?.err,
    },
  };
};

export const RequestStatusContext = React.createContext({});

export const RequestStatusContextProvider = ({ children }: PropsWithChildren) => {
  const [requestStatuses, dispatch] = useReducer(reducer, initialRequestStatuses);
  const [isOnline, setOnline] = useState<Nullable<boolean>>(true);

  const updateRequestStatusCall = async (
    request: <T>() => Promise<T>,
    name: string
  ) => {
    dispatch({
      type: name,
      payload: {
        status: RequestStatus.REQUEST,
      },
    });

    try {
      const result = await request();

      dispatch({
        type: name,
        payload: {
          status: RequestStatus.SUCCESS,
        },
      });
      return result;
    } catch (error) {
      dispatch({
        type: name,
        payload: {
          status: RequestStatus.ERROR,
          err: error,
        },
      });
      throw error;
    }
  };

  const recheckConnection = useCallback(() => {
    setOnline(null);
    NetInfo.fetch().then((state: NetInfoState) => {
      setOnline(state.isConnected && state.isInternetReachable);
    });
  }, []);

  const currentRequestsContext = useMemo(
    () => ({
      requestStatuses,
      dispatch,
      updateRequestStatusCall,
      isOnline,
      setOnline,
      recheckConnection,
    }),
    [isOnline, recheckConnection, requestStatuses]
  );

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state: NetInfoState) => {
      setOnline(state.isConnected && state.isInternetReachable);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <RequestStatusContext.Provider value={currentRequestsContext}>
      {children}
    </RequestStatusContext.Provider>
  );
};

export const useRequestStatusContext = (): RequestStatusContextType => {
  return useContext(RequestStatusContext) ?? {};
};
