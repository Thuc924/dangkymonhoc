import authReducer from "./authReducer";
import userReducer from "./userReducer";

import {combineReducers} from 'redux'
import storage from 'redux-persist/lib/storage' // giữ giá trị của reducer lại
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2'
import {persistReducer} from 'redux-persist'

const commonConfig = {
    storage,
    stateReconciler: autoMergeLevel2
}

const authConfig={
    ...commonConfig,
    key: 'auth',
    whitelist: ['isLoggedIn', 'token']
}

const rootReducer = combineReducers({
    auth: persistReducer(authConfig, authReducer),
    user: userReducer
})

export default rootReducer
// Cấu hình persist cho các reducer, redux-persist có thể tuỳ chọn lưu hoặc không lưu state lên localStorage mà không cần phải thủ công