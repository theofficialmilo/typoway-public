import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { ReactElement } from "react";

export interface DialogData {
  title: string,
  content: string
}

export interface DesignTypeData {
  label: string,
  description: string,
  icon: ReactElement<OverridableComponent<SvgIconTypeMap<{},"svg">>>
}

export interface NavData {
  id: number,
  title: string,
  icon: ReactElement<OverridableComponent<SvgIconTypeMap<{},"svg">>> | null
  to: string
}