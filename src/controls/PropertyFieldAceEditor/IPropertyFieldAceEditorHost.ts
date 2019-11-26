import { IPropertyFieldAceEditorPropsInternal } from './IPropertyFieldAceEditor';
import { IAnnotation } from 'react-ace';


/**
* PropertyFieldNumberHost properties interface
*/
export interface IPropertyFieldAceEditorHostProps extends IPropertyFieldAceEditorPropsInternal  {
  onChange: (targetProperty?: string, newValue?: any) => void;
}

export interface IPropertyFieldAceEditorHostState {
  annotations: IAnnotation[];
  editorClassName?: string;
  editorHeight?: string;
  errorMessage?: string;
  value: string;
  fullScreen: boolean;
}
