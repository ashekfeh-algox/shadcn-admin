import type { NavGroup } from "../nav/type";

type User = {
  name: string;
  email: string;
  avatar: string;
};

export type SidebarData = {
  user: User;
  navGroups: NavGroup[];
};
