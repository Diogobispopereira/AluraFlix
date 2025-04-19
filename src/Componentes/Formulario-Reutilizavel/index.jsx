export function FormReutilizavel({ label, placeholder, button, options, type = "text", onChange }) {
    return (
        <form>
            <label>{label}</label>
            {options ? (
                <select onChange={onChange}>
                    {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            ) : type === "textarea" ? (
                <textarea placeholder={placeholder} onChange={onChange} />
            ) : (
                <input type={type} placeholder={placeholder} onChange={onChange} />
            )}
            {button && (
                <div>
                    <button type="submit">{button}</button>
                </div>
            )}
        </form>
    );
}
