function InputForm({
   type,
   label,
   name,
   value,
   setValue,
   invalidFields,
   setInvalidField,
}) {
   return (
      <div className="form-group col-md-4">
         <label className="control-label">{label}</label>
         <input
            className="form-control"
            value={value}
            type={type}
            onChange={(e) =>
               setValue((prev) => ({ ...prev, [name]: e.target.value }))
            }
            onFocus={() => setInvalidField([])}
         />
         {invalidFields &&
            invalidFields.length > 0 &&
            invalidFields.some((i) => i.name === name) && (
               <small className="text-red-500 italic">
                  {invalidFields.find((i) => i.name === name)?.message}
               </small>
            )}
      </div>
   )
}
export default InputForm
