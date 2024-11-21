import {
    forwardRef,
    InputHTMLAttributes,
    useEffect,
    useImperativeHandle,
    useRef,
} from 'react';

interface InputCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    isFocused?: boolean;
    label?: string;
    name: string;
    errors?: string[];
}

export default forwardRef(function InputCheckbox(
    {
        className = '',
        isFocused = false,
        label,
        name,
        errors = [],
        disabled,
        ...props
    }: InputCheckboxProps,
    ref,
) {
    const localRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

    return (
        <div>
            <label className="flex gap-4 items-center text-sm leading-6 text-zinc-600">
                <input
                    type="hidden"
                    name={name}
                    value="false"
                    disabled={disabled}
                />
                <input
                    {...props}
                    type="checkbox"
                    name={name}
                    className={`rounded border-zinc-300 text-zinc-900 focus:ring-0 ${className}`}
                    ref={localRef}
                    disabled={disabled}
                />
                {label}
            </label>
            {errors.map((error, index) => (
                <div key={index} className="mt-1 text-sm text-red-500">
                    {error}
                </div>
            ))}
        </div>
    );
});
