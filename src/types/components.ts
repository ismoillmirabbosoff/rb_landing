import type { MaskedInputProps } from 'react-text-mask'
import type { TextFieldProps } from '@mui/material/TextField'
import type { Path, Control, FieldValues, UseControllerProps } from 'react-hook-form'

export interface ControlProps<T extends FieldValues> extends UseControllerProps<T> {
	name: Path<T>
	control: Control<T>
}

export type InputProps<T extends FieldValues> = Omit<TextFieldProps, 'variant' | 'id'> &
	ControlProps<T>

export type InputMaskProps<T extends FieldValues> = Omit<
	TextFieldProps,
	'autoComplete' | 'variant' | 'id'
> &
	Omit<MaskedInputProps, 'render'> &
	ControlProps<T>

export type InputPhoneProps<T extends FieldValues> = Omit<
	TextFieldProps,
	'autoComplete' | 'variant' | 'id'
> &
	Omit<MaskedInputProps, 'render' | 'mask'> &
	ControlProps<T>
