function InputForm({ type, labelInput, name, value, setValue, invalidFields, setInvalidField }) {
   return (
      <div className="form-group col-md-4">
         <label className="control-label">{labelInput}</label>
         {setInvalidField ? (
            <input
               className="form-control border-[1px]"
               value={value}
               type={type}
               onChange={(e) => setValue((prev) => ({ ...prev, [name]: e.target.value }))}
               onFocus={() => setInvalidField([])}
            />
         ) : name === 'msqtv' ? (
            <input
               disabled
               className="form-control border-[1px]"
               value={value}
               type={type}
               onChange={(e) => setValue((prev) => ({ ...prev, [name]: e.target.value }))}
            />
         ) : (
            <input
               className="form-control border-[1px]"
               value={value}
               type={type}
               onChange={(e) => setValue((prev) => ({ ...prev, [name]: e.target.value }))}
            />
         )}
         {invalidFields && invalidFields.length > 0 && invalidFields.some((i) => i.name === name) && (
            <small className="text-red-500 italic">{invalidFields.find((i) => i.name === name)?.message}</small>
         )}
      </div>
   )
}
export default InputForm
