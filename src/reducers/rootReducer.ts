import { langReducer } from './langReducer';
import { combineReducers } from 'redux';
import { dataReducer } from './dataReducer';
import { themeReducer } from './themeReducer';
import { responsiveReducer } from './responsiveReducer';
import { userReducer } from './userReducer';
import { errorReducer } from './errorReducer';

export const rootReducer = combineReducers({
  user: userReducer,
  language: langReducer,
  products: dataReducer,
  theme: themeReducer,
  isMobile: responsiveReducer,
  error: errorReducer
});

export type RootState = ReturnType<typeof rootReducer>;
