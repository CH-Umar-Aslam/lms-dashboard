"use client";
import { updatePage } from "@/lib/store/features/CurrentPage/currentPageSlice";
import { AppStore, makeStore } from "@/lib/store/store";
import { ReactNode, useRef } from "react";
import { Provider } from "react-redux";

const StoreProvider = ({ children }: { children: ReactNode }) => {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
    storeRef.current.dispatch(updatePage("2"));
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default StoreProvider;