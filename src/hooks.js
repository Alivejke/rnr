/**
 * React Starter Kit for Firebase
 * https://github.com/kriasoft/react-firebase-starter
 * Copyright (c) 2015-present Kriasoft | MIT License
 */

/* @flow */

import React, { useContext } from 'react';
import { ReactRelayContext } from 'react-relay';

// Default history object (for unit tests)
const history = { location: { pathname: '/' } };

export const ConfigContext = React.createContext({});
export const HistoryContext = React.createContext(history);
export const ResetContext = React.createContext(() => {});

export function useConfig() {
  return useContext(ConfigContext);
}

export function useHistory() {
  return useContext(HistoryContext);
}

export function useRelay() {
  return useContext(ReactRelayContext);
}

export function useReset() {
  return useContext(ResetContext);
}
