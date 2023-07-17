export function compareValues(key, order = 'asc') {
   return function (a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
         // nếu không tồn tại
         return 0
      }

      const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key]
      const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key]

      let comparison = 0
      if (varA > varB) {
         comparison = 1
      } else if (varA < varB) {
         comparison = -1
      }
      return order === 'desc' ? comparison * -1 : comparison
   }
}

export const sumSTC = (a) => {
   let kq = 0
   for (let i = 0; i < a?.length; i++) {
      // console.log("KQ: ", kq)
      // console.log("A[i]: ", +a[i]?.monhocTC.sotinchi)
      kq += +a[i].monhocTC?.sotinchi || +a[i].monhocDK?.sotinchi || 0
   }
   return kq
}

export const sumHocPhi = (a) => {
   let kq = 0
   for (let i = 0; i < a?.length; i++) {
      kq = +kq + +a[i].hocphi
   }
   return kq
}
