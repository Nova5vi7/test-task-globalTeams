const Rating = ({value, checked, onChange}) => (
    <button onClick={() => {
        onChange(value)
    }} className={checked ? 'active' : 'not-active'} id={value}>
        <svg width="16" height="15" viewBox="0 0 16 15" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path
                d="M8 0.925178L10.3066 4.51636L10.4119 4.68027L10.6003 4.72975L14.7285 5.81375L12.0259 9.11722L11.9026 9.268L11.9137 9.46249L12.1585 13.7236L8.18152 12.1741L8 12.1034L7.81848 12.1741L3.84153 13.7236L4.08628 9.46249L4.09745 9.268L3.97409 9.11722L1.27146 5.81375L5.39966 4.72975L5.58809 4.68027L5.69337 4.51636L8 0.925178Z"/>
        </svg>
    </button>

);

export default Rating;