import authReducer from './authReducer'
import sinhvienReducer from './sinhvienReducer'
import khoaReducer from './khoaReducer'
import monhocReducer from './monhocReducer'

import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage' // giữ giá trị của reducer lại
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2'
import { persistReducer } from 'redux-persist'
import lopReducer from './lopReducer'
import hockyReducer from './hockyReducer'
import monhoctochucReducer from './monhoctochucReducer'

const commonConfig = {
   storage,
   stateReconciler: autoMergeLevel2,
}

const authConfig = {
   ...commonConfig,
   key: 'auth',
   whitelist: ['isLoggedIn', 'token'],
}

const rootReducer = combineReducers({
   auth: persistReducer(authConfig, authReducer),
   sinhvien: sinhvienReducer,
   khoa: khoaReducer,
   lop: lopReducer,
   monhoc: monhocReducer,
   hocky: hockyReducer,
   monhoctochuc: monhoctochucReducer,
})

export default rootReducer
// Cấu hình persist cho các reducer, redux-persist có thể tuỳ chọn lưu hoặc không lưu state lên localStorage mà không cần phải thủ công
