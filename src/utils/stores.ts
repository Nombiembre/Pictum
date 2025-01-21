import { map } from "nanostores"


export interface popupStateValue {
  expanded: boolean,
  succes: boolean | null
}

export const $popupState = map<popupStateValue>({
  expanded: false,
  succes: null
})
