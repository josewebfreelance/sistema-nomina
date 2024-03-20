import {NAVBAR_ROUTES} from "../util/constants.ts";
import {SideNavGroup} from "./SideNavGroup.tsx";

export const SideNav = () => {

    return (
        <>
            {
                NAVBAR_ROUTES.map((routes) => (
                  <SideNavGroup key={routes.moduleName} {...routes} />
                ))
            }
        </>
    );

};
