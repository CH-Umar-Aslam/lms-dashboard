"use client";
import { updatePage } from "@/lib/store/features/CurrentPage/currentPageSlice";
import { AppStore, makeStore } from "@/lib/store/store";
import { ReactNode, useRef } from "react";
import { Provider } from "react-redux";
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

const StoreProvider = ({ children }: { children: ReactNode }) => {
  const storeRef = useRef<AppStore>();
  const persistorRef = useRef<any>()
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
    storeRef.current.dispatch(updatePage(""));
    persistorRef.current = persistStore(storeRef.current)
  }

  return <Provider store={storeRef.current}>
    <PersistGate  persistor={persistorRef.current}>
    {children}
      </PersistGate>
    
    
    </Provider>;
};

export default StoreProvider;
