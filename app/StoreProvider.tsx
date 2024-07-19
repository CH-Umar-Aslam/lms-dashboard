"use client";
import { updatePage } from "@/lib/store/features/CurrentPage/currentPageSlice";
import { AppStore, makeStore } from "@/lib/store/store";
import { ReactNode, useRef } from "react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const StoreProvider = ({ children }: { children: ReactNode }) => {
  const storeRef = useRef<AppStore>();
  const persistorRef = useRef<any>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
    storeRef.current.dispatch(updatePage(""));
    persistorRef.current = persistStore(storeRef.current);
  }

  return (
    <Provider store={storeRef.current}>
      <PersistGate persistor={persistorRef.current}>{children}</PersistGate>
    </Provider>
  );
};

export default StoreProvider;
// we will create store provider and then we will wrap out root component or layout with this store provider
// if we will wrap directly as we do in react to our layout then the whole app will become client side
// we can wrap a server component with an client component
// store provider is a client componet

// { children }: { children: ReactNode } this code means the client root component will be a children
// we will have that children as reactNode

// const storeRef = useRef<AppStore>(); this line we dont want to get again data if its same like memoizaiton
// const persistorRef = useRef<any>(); this code means we have created a variable to configure persistor
// storeRef.current = makeStore(); we want to make our store every time page referesh so that all other's  active user data can't be over whelmed
// storeRef.current.dispatch(updatePage("")); this lines means if we want to store default value on referesh in our store then we can call as dispatch with current reference and can call reducer actions or function
// persistorRef.current = persistStore(storeRef.current); this store will make or store peristant by persistStore

// store={storeRef.current} means  store={store} like in app
// and it will be in wrapper of provider attribute

// persistor={persistorRef.current} means  persistor={persistor} like in app
// and it will be in wrapper of persistorGate attribute contaiing children
// for redux persist use npm website redux-persist at npm 
// and for redux toolkit use react app docummemntation in redux official website
//  for next js view with next js and make some changes like returing configur store in make store function
// hook file is to rename useSelctor as useAppSelector and useDispatch as useAppDispatch

