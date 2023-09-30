
function FromInput({label, type, name, defaultValue, size}) {
    return (
      <div className="form-control">
          <label className="label">
              <span className="label-text">{label}</span>
          </label>
          <input type={type}
          name={name}
          defaultValue={defaultValue}
          className={`input input-bordered ${size}`} />
      </div>
    )
  }
  
  export default FromInput