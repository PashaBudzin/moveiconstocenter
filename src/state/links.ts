import { atomWithStorage } from "jotai/utils";
import { link } from "../Link";

export const linksAtom = atomWithStorage<link[]>("links", [])
